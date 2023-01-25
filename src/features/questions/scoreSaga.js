import { put, takeEvery } from "redux-saga/effects";
import { selectAnswer, setScore } from "./questionsSlice";

function* questionsScoreHandler() {
  yield put(setScore());
}

export function* watchQuestionsScore() {
  yield takeEvery(selectAnswer.type, questionsScoreHandler);
}
