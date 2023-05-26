import { all } from "redux-saga/effects";
import { watchFetchQuestions } from "../store/questionsSaga";

export default function* rootSaga() {
  yield all([watchFetchQuestions()]);
}
