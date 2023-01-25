import { all } from "redux-saga/effects";
import { watchFetchQuestions } from "./features/questions/questionsSaga";

export default function* rootSaga() {
  yield all([
    watchFetchQuestions(),
  ])
}
