"use client";
import getQuestions from "@/hooks/getQuestions";
import { useEffect, useState } from "react";

export default function Questions() {
  const [questions, setQuestions] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(0);

  const handleClick = () => {};

  useEffect(() => {
    const div = document.getElementById("question");
    if (questions) {
      div.innerHTML = questions[questionNumber].question;
    }
  }, [questions, questionNumber]);

  useEffect(() => {
    const getData = async () => {
      const data = await getQuestions().then((res) => res);
      const finalData = data.map((ques, idx) => {
        const { type, question, incorrect_answers, correct_answer } = ques;
        return {
          id: idx,
          type,
          question,
          incorrect_answers,
          correct_answer,
          isDone: false,
          options: [...incorrect_answers, correct_answer],
        };
      });
      setQuestions(() => finalData);
    };
    getData();
  }, []);
  return (
    <div className="grid grid-cols-3 gap-4 h-[100vh]">
      <div className="bg-blue-300 flex flex-col items-center py-10">
        <h1 className="text-3xl font-[600]">Index</h1>
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2items-center md:gap-4 gap-2 my-8">
          {questions ? (
            questions.map((_, idx) => (
              <div className="p-4 bg-gray-300 text-center rounded-[100px] cursor-pointer" key={idx} onClick={handleClick}>
                {idx + 1}
              </div>
            ))
          ) : (
            <div>Oops No questions to display</div>
          )}
        </div>
      </div>
      <div className="col-span-2 flex flex-col items-center justify-center p-2">
        {questions ? (
          <div className="text-2md">
            <div id="question"></div>
            <div>{questions[questionNumber].correct_answer}</div>
          </div>
        ) : (
          <div>Oops No questions to display</div>
        )}
      </div>
    </div>
  );
}
