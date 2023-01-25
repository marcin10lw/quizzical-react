import { all } from "redux-saga/effects";
import { watchFetchQuestions } from "./features/questions/questionsSaga";
import { watchQuestionsScore } from "./features/questions/scoreSaga";

export default function* rootSaga() {
  yield all([
    watchFetchQuestions(),
    watchQuestionsScore(),
  ])
}
