"use client";
import getQuestions from "@/hooks/getQuestions";
import { useEffect, useRef, useState } from "react";
import Option from "./Option";
import { getStatusStyle } from "@/utils/getStatusStyle";
import Timer from "./Timer";
import { useAnswersStore, useQuestionsStore } from "@/store/store";
import { useRouter } from "next/navigation";
export default function Questions() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [questionNumber, setQuestionNumber] = useState(0);
  const questions = useQuestionsStore((state) => state.questions);
  const setQuestions = useQuestionsStore((state) => state.setQuestions);
  const setStatus = useQuestionsStore((state) => state.setStatus);
  const setAnswers = useAnswersStore((state) => state.setAnswers);
  const question = useRef(null);
  const options = useRef(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getQuestions().then((res) => res);
        const finalData = data?.map((ques, idx) => {
          const { type, question, incorrect_answers, correct_answer } = ques;
          return {
            id: idx,
            question,
            incorrect_answers,
            correct_answer,
            status: idx === 0 ? "active" : "inactive",
            options: [...incorrect_answers, correct_answer].map((ele, idx) => {
              return {
                id: idx,
                option: ele,
              };
            }),
          };
        });
        setQuestions(finalData);
        setAnswers(new Array(finalData.length).fill(""));
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (!questions) return;
    if (questions[questionNumber]?.status === "inactive") {
      setStatus(questionNumber, "active");
    }
    question.current.innerHTML =
      `${questionNumber + 1}. ` +
      (questions && questions[questionNumber]?.question);
  }, [questionNumber, questions, setStatus]);
  const handleClick = (e, idx) => {
    setQuestionNumber(() => idx);
    if (questions[idx].status === "inactive") {
      setStatus(idx, "active");
    }
  };

  return (
    <div className="flex md:grid md:grid-cols-4 min-h-[100vh] gap-2 md:gap-4">
      <div className="md:col-span-1 bg-blue-300 flex-1 flex-col items-center px-1 py-2 w-[100%] h-[100%] md:px-4">
        <h1 className="md:text-3xl md:text-2xl text-xl font-[600] text-center my-6">
          Index
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center md:gap-4 gap-2 md:my-8 my-2">
          {questions ? (
            questions.map((ele) => (
              <button
                className="md:p-3 py-2 text-white text-center font-[500] transition ease-in-out rounded-full cursor-pointer h-[48px] w-[48px]"
                style={getStatusStyle(ele.status)}
                key={ele.id}
                onClick={(e) => handleClick(e, ele.id)}
              >
                {ele.id + 1}
              </button>
            ))
          ) : (
            <div>Oops No questions to display</div>
          )}
        </div>
      </div>
      <div className="md:col-span-3 flex-5 flex-col items-start my-4 p-2 w-[100%] md:text-2xl">
        <div className="flex items-center justify-between mx-3">
          <div></div>
          <Timer />
          <button
            className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-md text-[18px] font-[500] text-white"
            onClick={() => router.push("/result")}
          >
            Submit
          </button>
        </div>
        <div className="flex items-center justify-between text-[18px] font-[500] mt-7 text-white">
          <button
            className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-md"
            style={{ visibility: questionNumber === 0 ? "hidden" : "visible" }}
            onClick={() => setQuestionNumber((prev) => prev - 1)}
          >
            Prev
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-md"
            style={{
              visibility:
                questionNumber === questions.length - 1 ? "hidden" : "visible",
            }}
            onClick={() => setQuestionNumber((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
        <div>
          <div className="font-[500] mt-[3%]" ref={question}></div>
          <div className="font-[400] mt-3 w-[100%]" ref={options}>
            {questions &&
              questions[questionNumber]?.options.map((ele) => {
                return (
                  <Option
                    key={ele.id}
                    ele={ele}
                    questionNumber={questionNumber}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
