'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Email = () => {
  const [isValid, setIsValid] = useState(false);
  const router = useRouter();
  const validateEmail = (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(e.target.value)) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center p-3 h-[100vh]">
      <div className="flex flex-col items-center justify-center flex-col bg-blue-300 p-10 rounded-md">
        <h1 className="text-3xl font-bold">Welcome to Quiz App</h1>
        <div className="mt-10">
          <input
            className="p-2 text-xl border-2 border-black rounded-md"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => validateEmail(e)}
          />
        </div>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          style={!isValid ? { pointerEvents: 'none' } : {}}
          onClick={() => router.push("/quiz")}
        >
          Submit
        </button>
        <div className="mt-4">Enter a valid email to proceed with the test.</div>
      </div>
    </div>
  );
};

export default Email;
