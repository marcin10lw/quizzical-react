import { useState } from "react";
import { useQuestions } from "./useQuestions";
import { Container } from "./Container/styled";
import Nav from "./Nav";
import Main from "./Main";

function App() {
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useQuestions();

  const startQuiz = () => setStarted(true);

  return (
    <Container>
      {!started && <Nav startQuiz={startQuiz} />}
      {started && <Main questions={questions} />}
    </Container>
  );
}

export default App;
