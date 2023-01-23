import { createSlice } from "@reduxjs/toolkit";

const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    questions: [],
    started: false,
    showAnswers: false,
  },
  reducers: {},
});

export const SelectQuestionsState = (state) => state.questions;
export default questionsSlice.reducer;
