const getQuestions = async () => {
  const data = await fetch("https://opentdb.com/api.php?amount=15")
    .then((response) => response.body)
    .then((rb) => {
      const reader = rb.getReader();
      return new ReadableStream({
        start(controller) {
          function push() {
            reader.read().then(({ done, value }) => {
              if (done) {
                controller.close();
                return;
              }
              controller.enqueue(value);
              push();
            });
          }

          push();
        },
      });
    })
    .then((stream) =>
      new Response(stream, { headers: { "Content-Type": "text/html" } }).text()
    )
    .then((result) => {
      return JSON.parse(result).results;
    });
  return data;
};

export default getQuestions;
