import { createContext, useContext } from "react";

export const Usercontext = createContext(undefined);
export const Questioncontext = createContext(undefined);

export const useUserContext = () => {
    const user = useContext(Usercontext);
    if(user === undefined) {
        throw new Error("No user has been defined yet");
    }
    return user;
}
export const useQuestionContext = () => {
    const questions = useContext(Questioncontext);
    if(questions === undefined) {
        throw new Error("No questions are there.");
    }
    return questions;
}
