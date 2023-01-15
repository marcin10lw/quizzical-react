import { useState } from "react";
import { useQuestions } from "./useQuestions";
import { Container } from "./Container/styled";
import Nav from "./Nav";
import Main from "./Main";
import Section from "./Section";
import LoadingScreen from "./LoadingScreen";

function App() {
  const [started, setStarted] = useState(false);
  const [questions, selectAnswer, getQuestions, score, status] = useQuestions();
  const [showAnswers, setShowAnswers] = useState(false);

  const startQuiz = () => {
    getQuestions();
    setStarted(true);
  };

  return (
    <Container started={started}>
      {!started && <Nav startQuiz={startQuiz} />}
      {started && status === "pending" && <LoadingScreen />}
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
