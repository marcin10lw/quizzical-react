import { call, put, takeLatest } from "redux-saga/effects";
import { getQuestions } from "../services/getQuestions";
import {
  fetchQuestions,
  fetchQuestionsSuccess,
  fetchQuestionsError,
} from "./questionsSlice";
import { AxiosResponse } from "axios";

function* fetchQuestionsHandler(params: ReturnType<typeof fetchQuestions>) {
  const { amount, categoryId } = yield params.payload;

  try {
    const questions: AxiosResponse = yield call(
      getQuestions,
      amount,
      categoryId
    );
    yield put(fetchQuestionsSuccess(questions));
  } catch (error) {
    yield put(fetchQuestionsError());
  }
}

export function* watchFetchQuestions() {
  yield takeLatest(fetchQuestions.type, fetchQuestionsHandler);
}
