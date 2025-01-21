import { useAnswersStore, useQuestionsStore } from "@/store/store";
import React, { useEffect, useRef } from "react";

const Option = ({ ele, questionNumber}) => {
  const answers = useAnswersStore((state) => state.answers);
  const setStatus = useQuestionsStore((state) => state.setStatus);
  const setAnswer = useAnswersStore((state) => state.setAnswer);
  const handleOptionClick = (e) => {
    setAnswer(questionNumber, e.target.innerText);
    setStatus(questionNumber, "answered");
  };

  const option = useRef(null);
  useEffect(() => {
    option.current.innerHTML = ele?.option;
  }, [ele?.option]);
  return (
    <div
      className="py-1 px-2 my-2 md:text-[20px] text-black font-[500] transition ease-in-out rounded-md cursor-pointer w-[100%] hover:bg-blue-500 hover:text-white"
      style={
        answers[questionNumber] === ele.option
          ? {
              backgroundColor: "rgba(24, 125, 245, 0.8)",
              color: "white",
            }
          : {}
      }
      onClick={(e) => handleOptionClick(e, ele.id)}
      ref={option}
    ></div>
  );
};

export default Option;
