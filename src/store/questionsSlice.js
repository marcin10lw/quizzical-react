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
    fetchQuestions: (state) => {
      state.status = "pending";
    },
    fetchQuestionsSuccess: (state, { payload: questions }) => {
      state.questions = questions;
      state.status = "success";
    },
    fetchQuestionsError: (state, action) => {
      state.status = action.payload;
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

export const SelectQuestionsState = (state) => state.questions;
export const SelectQuestions = (state) => SelectQuestionsState(state).questions;

export default questionsSlice.reducer;
