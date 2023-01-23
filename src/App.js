import { useState } from "react";
import { useQuestions } from "./useQuestions";
import { Container } from "./Container/styled";
import Nav from "./features/questions/Nav";
import Main from "./features/questions/Main";
import Section from "./features/questions/Section";
import LoadingScreen from "./features/questions/LoadingScreen";
import ErrorScreen from "./features/questions/ErrorScreen";

function App() {
  const [started, setStarted] = useState(false);
  const [questions, selectAnswer, getQuestions, score, status] = useQuestions();
  const [showAnswers, setShowAnswers] = useState(false);

  const startQuiz = () => {
    getQuestions();
    setStarted(true);
  };

  const statusInfo = status === "pending" || status === "error";

  return (
    <Container started={started} status={statusInfo}>
      {!started && <Nav startQuiz={startQuiz} />}

      {started && status === "pending" && <LoadingScreen />}
      {status === "error" && <ErrorScreen />}

      {started && status === "success" && (
        <Main
          showAnswers={showAnswers}
          setShowAnswers={setShowAnswers}
          getQuestions={getQuestions}
          score={score}
        >
          <div>
            {questions.map((question) => (
              <Section
                key={question.id}
                questionId={question.id}
                question={question.question}
                answers={question.answers}
                selectAnswer={selectAnswer}
                showAnswers={showAnswers}
              />
            ))}
          </div>
        </Main>
      )}
    </Container>
  );
}

export default App;
