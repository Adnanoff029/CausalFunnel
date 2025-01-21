import { create } from "zustand";
// Custom hook for questions
export const useQuestionsStore = create((set) => ({
  questions: [],
  setQuestions: (data) => {
    set({ questions: [...data] });
  },
  setStatus: (num, value) =>
    set((state) => ({
      questions: state.questions.map((ele, idx) =>
        idx === num ? { ...ele, status: value } : ele
      ),
    })),
}));

export const useAnswersStore = create((set) => ({
  answers: [],
  setAnswer: (num, value) =>
    set((state) => ({
      answers: state.answers.map((ele, idx) => (idx === num ? value : ele)),
    })),
  setAnswers: (data) => set({ answers: [...data] }),
}));
