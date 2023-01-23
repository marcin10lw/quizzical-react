import { createSlice } from "@reduxjs/toolkit";

const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    questions: [],
    status: "",
    score: 0,
    started: false,
    showAnswers: false,
  },
  reducers: {
    fetchQuestions: () => {},
    setQuestions: (state, { payload: questions }) => {
      state.questions = questions;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    startQuiz: (state) => {
      state.started = true;
    },
    setShowAnswers: (state, action) => {
      state.showAnswers = action.payload;
    },
  },
});

export const {
  fetchQuestions,
  setQuestions,
  setStatus,
  startQuiz,
  setShowAnswers,
} = questionsSlice.actions;
export const SelectQuestionsState = (state) => state.questions;
export default questionsSlice.reducer;
