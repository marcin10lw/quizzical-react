import { useState } from "react";
import { useQuestions } from "./useQuestions";
import { Container } from "./Container/styled";
import Nav from "./Nav";
import Main from "./Main";
import Section from "./Section";

function App() {
  const [started, setStarted] = useState(false);
  const [questions, setQuestions, selectAnswer, getQuestions] = useQuestions();
  const [showAnswers, setShowAnswers] = useState(false);

  const startQuiz = () => setStarted(true);

  return (
    <Container started={started}>
      {!started && <Nav startQuiz={startQuiz} />}
      {started && (
        <Main
          showAnswers={showAnswers}
          setShowAnswers={setShowAnswers}
          getQuestions={getQuestions}
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
