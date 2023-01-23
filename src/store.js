import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from "./features/questions/questionsSlice";
import createSagaMiddleware from "@redux-saga/core";
import { watchFetchQuestions } from "./features/questions/questionsSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    questions: questionsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchFetchQuestions);
