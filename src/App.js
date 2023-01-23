import { useState } from "react";
import { useQuestions } from "./useQuestions";
import { Container } from "./Container/styled";
import Nav from "./features/questions/Nav";
import Main from "./features/questions/Main";
import Section from "./features/questions/Section";
import LoadingScreen from "./features/questions/LoadingScreen";
import ErrorScreen from "./features/questions/ErrorScreen";
import { useSelector } from "react-redux";
import { SelectQuestionsState } from "./features/questions/questionsSlice";

function App() {
  const { started, status } = useSelector(SelectQuestionsState);
  const [score] = useQuestions();

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
