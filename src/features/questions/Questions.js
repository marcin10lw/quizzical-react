import { Container } from "../../Container/styled";
import Nav from "./Nav";
import Main from "./Main";
import LoadingScreen from "./LoadingScreen";
import ErrorScreen from "./ErrorScreen";
import { useDispatch, useSelector } from "react-redux";
import {
  SelectQuestions,
  SelectQuestionsState,
  setScore,
} from "./questionsSlice";
import { useEffect } from "react";

function App() {
  const { started, status } = useSelector(SelectQuestionsState);
  const { score } = useSelector(SelectQuestionsState);
  const questions = useSelector(SelectQuestions);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setScore());
  }, [questions]);

  const statusInfo = status === "pending" || status === "error";

  return (
    <Container started={started} status={statusInfo}>
      {!started && <Nav />}

      {started && status === "pending" && <LoadingScreen />}
      {status === "error" && <ErrorScreen />}

      {started && status === "success" && <Main score={score} />}
    </Container>
  );
}

export default App;
