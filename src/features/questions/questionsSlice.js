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
  setQuestions,
  setStatus,
  startQuiz,
  setShowAnswers,
  selectAnswer,
  setScore,
} = questionsSlice.actions;
export const SelectQuestionsState = (state) => state.questions;
export default questionsSlice.reducer;
