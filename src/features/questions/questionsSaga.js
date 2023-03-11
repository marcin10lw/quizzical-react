import { call, put, select, takeLatest } from "redux-saga/effects";
import { getQuestions } from "./getQuestions";
import {
  fetchQuestions,
  SelectAmount,
  SelectCategoryId,
  setQuestions,
  setStatus,
} from "./questionsSlice";

function* fetchQuestionsHandler() {
  try {
    const amount = yield select(SelectAmount);
    const categoryId = yield select(SelectCategoryId);
    yield put(setStatus("pending"));
    const questions = yield call(getQuestions, amount, categoryId);
    yield put(setQuestions(questions));
    yield put(setStatus("success"));
  } catch (error) {
    yield put(setStatus("error"));
  }
}

export function* watchFetchQuestions() {
  yield takeLatest(fetchQuestions.type, fetchQuestionsHandler);
}
