import { createSlice } from "@reduxjs/toolkit";

const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    questionsData: {
      questions: [],
      amount: 5,
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
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    startQuiz: (state) => {
      state.started = true;
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
  setStatus,
  startQuiz,
  setShowAnswers,
  selectAnswer,
  setScore,
} = questionsSlice.actions;

export const SelectQuestionsState = (state) => state.questions;
export const SelectQuestions = (state) =>
  SelectQuestionsState(state).questionsData.questions;
export const SelectAmount = (state) =>
  SelectQuestionsState(state).questionsData.amount;

export default questionsSlice.reducer;
