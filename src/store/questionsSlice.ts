import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../core/store";

export type Answer = {
  answer: string;
  id: string;
  isCorrect: boolean;
  isSelected: boolean;
};

export type Question = {
  answers: Answer[];
  id: string;
  question: string;
};

type SliceState = {
  questions: Question[];
  status: "pending" | "success" | "error" | "idle";
  score: number;
  started: boolean;
  showAnswers: boolean;
};

const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    questions: [],
    status: "idle",
    score: 0,
    started: false,
    showAnswers: false,
  } as SliceState,
  reducers: {
    fetchQuestions: (state, { payload }) => {
      state.status = "pending";
    },
    fetchQuestionsSuccess: (state, { payload: questions }) => {
      state.questions = questions;
      state.status = "success";
    },
    fetchQuestionsError: (state) => {
      state.status = "error";
    },
    setQuizStarted: (state, { payload }) => {
      state.started = payload;
    },
    setShowAnswers: (state, action) => {
      state.showAnswers = action.payload;
    },
    selectAnswer: ({ questions }, action) => {
      const { questionId, answerId } = action.payload;
      const questionIndex = questions.findIndex(
        (question) => question.id === questionId
      );

      const answers = questions[questionIndex].answers;
      answers.forEach((answer) => {
        if (answer.id === answerId) {
          answer.isSelected = !answer.isSelected;
        } else {
          answer.isSelected = false;
        }
      });
    },
    setScore: (state) => {
      let correctAnswers = [];
      state.questions.forEach((question) => {
        question.answers.forEach((answer) => {
          if (answer.isSelected && answer.isCorrect) {
            correctAnswers.push(answer);
          }
        });
      });

      state.score = correctAnswers.length;
    },
  },
});

export const {
  fetchQuestions,
  fetchQuestionsSuccess,
  fetchQuestionsError,
  setQuizStarted,
  setShowAnswers,
  selectAnswer,
  setScore,
} = questionsSlice.actions;

export const SelectQuestionsState = (state: RootState) => state.questions;
export const SelectQuestions = (state: RootState) =>
  SelectQuestionsState(state).questions;

export default questionsSlice.reducer;
