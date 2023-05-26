import { call, put, takeLatest } from "redux-saga/effects";
import { getQuestions } from "../services/getQuestions";
import {
  fetchQuestions,
  fetchQuestionsSuccess,
  fetchQuestionsError,
} from "./questionsSlice";

function* fetchQuestionsHandler(params) {
  const { amount, categoryId } = yield params.payload;

  try {
    const questions = yield call(getQuestions, amount, categoryId);
    yield put(fetchQuestionsSuccess(questions));
  } catch (error) {
    yield put(fetchQuestionsError());
  }
}

export function* watchFetchQuestions() {
  yield takeLatest(fetchQuestions.type, fetchQuestionsHandler);
}
