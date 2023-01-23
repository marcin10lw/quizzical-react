import { useEffect } from "react";
import { Container } from "./Container/styled";
import Nav from "./features/questions/Nav";
import Main from "./features/questions/Main";
import LoadingScreen from "./features/questions/LoadingScreen";
import ErrorScreen from "./features/questions/ErrorScreen";
import { useDispatch, useSelector } from "react-redux";
import {
  SelectQuestionsState,
  setScore,
} from "./features/questions/questionsSlice";

function App() {
  const { started, status } = useSelector(SelectQuestionsState);
  const { score, questions } = useSelector(SelectQuestionsState);
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
