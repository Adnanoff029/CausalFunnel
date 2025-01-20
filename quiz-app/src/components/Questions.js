"use client";
import getQuestions from "@/hooks/getQuestions";
import { useEffect, useRef, useState } from "react";

export default function Questions() {
  const [questions, setQuestions] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answers, setAnswers] = useState([]);
  const question = useRef(null);
  const options = useRef(null);
  const handleClick = (e, idx) => {
    setQuestionNumber(() => idx);
  };

  const handleOptionClick = (e, idx) => {
    //   console.log(e.target.innerText.split(' ').join(' '));
    setAnswers((prev) => {
      prev[questionNumber] = e.target.innerText;
      return [...prev];
    });
    console.log(answers);
  };
  useEffect(() => {
    if (!questions) return;
    question.current.innerHTML =
      questions && questions[questionNumber].question;
    // const elements = questions[questionNumber].options.map(
    //   (ele) =>
    //     `<div
    //       className="p-3 text-[20px] text-black font-[500] transition ease-in-out rounded-md cursor-pointer hover:bg-blue-500 hover:text-white"
    //       key={${ele.id}}
    //     >
    //       ${ele.option}
    //     </div>`
    // );
    // elements.forEach((ele) => {
    //     console.log(ele);
    //   options.current.appendChild(document.createElement(ele));
    // });
  }, [questionNumber, questions]);

  useEffect(() => {
    if (!options) return;
  }, [options]);

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
          visited: idx === 0 ? true : false,
          options: [...incorrect_answers, correct_answer].map((ele, idx) => {
            return {
              id: idx,
              option: ele,
              isSelected: false,
            };
          }),
          optionSelected: -1,
        };
      });
      setQuestions(() => finalData);
    };
    getData();
    setAnswers(() => new Array(15).fill(""));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 h-[100vh]">
      <div className="bg-blue-300 flex flex-col items-center py-10">
        <h1 className="text-3xl font-[600]">Index</h1>
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2items-center md:gap-4 gap-2 my-8">
          {questions ? (
            questions.map((ele) => (
              <div
                className="p-3 bg-purple-600 text-white text-center font-[500] transition ease-in-out rounded-md cursor-pointer"
                key={ele.id}
                onClick={(e) => handleClick(e, ele.id)}
              >
                {ele.id + 1}
              </div>
            ))
          ) : (
            <div>Oops No questions to display</div>
          )}
        </div>
      </div>
      <div className="col-span-2 flex flex-col items-start p-2 w-[100%] my-[10%]">
        <div className="text-2xl font-[500]" ref={question}></div>
        <div className="text-md font-[400] mt-3 w-[100%]" ref={options}>
          {questions &&
            questions[questionNumber].options.map((ele) => {
              return (
                <div
                  className="p-2 text-[20px] text-black font-[500] transition ease-in-out rounded-md cursor-pointer hover:bg-blue-500 hover:text-white w-[100%]"
                  style={
                    answers[questionNumber] === ele.option
                      ? {
                          backgroundColor: "rgba(24, 125, 245, 0.8)",
                          color: "white",
                        }
                      : {}
                  }
                  key={ele.id}
                  onClick={(e) => handleOptionClick(e, ele.id)}
                >
                  {ele.option}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
