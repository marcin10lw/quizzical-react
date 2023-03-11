import { createSlice } from "@reduxjs/toolkit";

const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    questionsData: {
      questions: [],
      amount: 5,
      categoryId: 9,
    },
    status: "",
    score: 0,
    started: false,
    showAnswers: false,
  },
  reducers: {
    fetchQuestions: () => {},
    setQuestions: ({ questionsData }, { payload: questions }) => {
      questionsData.questions = questions;
      console.log(questionsData.questions);
    },
    setAmount: ({ questionsData }, { payload: amount }) => {
      questionsData.amount = amount;
    },
    setCategoryId: ({ questionsData }, { payload: categoryId }) => {
      questionsData.categoryId = categoryId;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setQuizStarted: (state, { payload }) => {
      state.started = payload;
    },
    setShowAnswers: (state, action) => {
      state.showAnswers = action.payload;
    },
    selectAnswer: ({ questionsData }, action) => {
      const { questionId, answerId } = action.payload;
      const questionIndex = questionsData.questions.findIndex(
        (question) => question.id === questionId
      );

      const answers = questionsData.questions[questionIndex].answers;
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
      state.questionsData.questions.forEach((question) => {
        question.answers.forEach((answer) => {
          if (answer.isSelected && answer.isCorrect) {
            correctAnswers.push(answer);
          }
        });
      });
      console.log(correctAnswers);
      state.score = correctAnswers.length;
    },
  },
});

export const {
  fetchQuestions,
  setQuestions,
  setAmount,
  setCategoryId,
  setStatus,
  setQuizStarted,
  setShowAnswers,
  selectAnswer,
  setScore,
} = questionsSlice.actions;

export const SelectQuestionsState = (state) => state.questions;
export const SelectQuestions = (state) =>
  SelectQuestionsState(state).questionsData.questions;
export const SelectAmount = (state) =>
  SelectQuestionsState(state).questionsData.amount;
export const SelectCategoryId = (state) =>
  SelectQuestionsState(state).questionsData.categoryId;

export default questionsSlice.reducer;
