"use client";
import { useAnswersStore, useQuestionsStore } from "@/store/store";
import { decode } from "he";
import { useRouter } from "next/navigation";

const Result = () => {
  const questions = useQuestionsStore((state) => state.questions);
  const answer = useAnswersStore((state) => state.answers);
  const router = useRouter();
  const unanswered = answer.reduce(
    (acc, val) => (val === "" ? acc + 1 : acc),
    0
  );
  const correct = answer.reduce(
    (acc, val, idx) => (val === questions[idx].correct_answer ? acc + 1 : acc),
    0
  );
  const incorrect = answer.length - correct - unanswered;
  return (
    <div className="flex flex-col items-center justify-center m-3">
      <h1 className="text-3xl font-bold mb-2">Result</h1>
      <div className="flex flex-col sm:flex-row sm:items-center items-start justify-between w-[100%] sm:text-xl text-md font-[500]">
        <div className="text-blue-700">Unanswered : {unanswered}</div>
        <div className="text-green-500">Correct : {correct}</div>
        <div className="text-red-500">Incorrect : {incorrect}</div>
      </div>
      <button
        className="self-start mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        onClick={() => router.push("/")}
      >
        Finish
      </button>
      <div>
        <div className="text-2xl font-bold text-center my-5">
          See Your Responses
        </div>
        <div className="text-lg font-[500]"> <span className="text-red-600">Note</span>: Questions with <span className="text-blue-600">blue</span> background are unanswered</div>
        {questions.map((ques) => {
          return (
            <div key={ques.id} className="my-5">
              <hr className="border-1 border-black" />
              <h1 className="text-xl font-[600]"
              style={
                answer[ques.id] === "" ? { backgroundColor: "rgba(114, 147, 255, 0.8)" } : {}
              }
              >
                {ques.id + 1}. {decode(ques.question)}
              </h1>
              <div>
                {ques.options.map((ele, idx) => {
                  return (
                    <div
                      key={idx}
                      className="py-1 px-2 my-2 md:text-[20px] text-black font-[500] transition ease-in-out rounded-md w-[100%]"
                      style={
                        questions[ques.id].correct_answer === ele?.option
                          ? {
                              backgroundColor: "rgba(24, 245, 87, 0.8)",
                              color: "white",
                            }
                          : answer[ques.id] === ele.option
                          ? {
                              backgroundColor: "rgba(236, 71, 29, 0.8)",
                              color: "white",
                            }
                          : {}
                      }
                    >
                      {decode(ele.option)}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Result;
