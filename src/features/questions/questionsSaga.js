import { call, put, takeLatest } from "redux-saga/effects";
import { getQuestions } from "./getQuestions";
import { fetchQuestions, setQuestions, setStatus } from "./questionsSlice";

function* fetchQuestionsHandler() {
  try {
    yield put(setStatus("pending"));
    const questions = yield call(getQuestions);
    yield put(setQuestions(questions));
    yield put(setStatus("success"));
  } catch (error) {
    yield put(setStatus("error"));
  }
}

export function* watchFetchQuestions() {
  yield takeLatest(fetchQuestions.type, fetchQuestionsHandler);
}
