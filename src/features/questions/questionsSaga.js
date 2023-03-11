import { call, put, select, takeLatest } from "redux-saga/effects";
import { getQuestions } from "./getQuestions";
import {
  fetchQuestions,
  SelectAmount,
  setQuestions,
  setStatus,
} from "./questionsSlice";

function* fetchQuestionsHandler() {
  try {
    const amount = yield select(SelectAmount);
    yield put(setStatus("pending"));
    const questions = yield call(getQuestions, amount);
    yield put(setQuestions(questions));
    yield put(setStatus("success"));
  } catch (error) {
    yield put(setStatus("error"));
  }
}

export function* watchFetchQuestions() {
  yield takeLatest(fetchQuestions.type, fetchQuestionsHandler);
}
