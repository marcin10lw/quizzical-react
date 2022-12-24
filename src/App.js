import { useState } from "react";
import { useQuestions } from "./useQuestions";
import { Container } from "./Container/styled";
import Nav from "./Nav";
import { Main, Button } from "./Main/styled";
import Section from "./Section";

function App() {
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useQuestions();

  const startQuiz = () => setStarted(true);

  const selectAnswer = (questionId, answerId) => {
    setQuestions((questions) =>
      questions.map((question) => {
        if (question.id === questionId) {
          return {
            ...question,
            answers: question.answers.map((answer) => {
              return answer.id === answerId
                ? { ...answer, isSelected: true }
                : { ...answer, isSelected: false };
            }),
          };
        }

        return question;
      })
    );
  };

  return (
    <Container>
      {!started && <Nav startQuiz={startQuiz} />}
      {started && (
        <Main>
          <div>
            {questions.map((question) => (
              <Section
                key={question.id}
                questionId={question.id}
                question={question.question}
                answers={question.answers}
                selectAnswer={selectAnswer}
              />
            ))}
          </div>
          <Button>Check answers</Button>
        </Main>
      )}
    </Container>
  );
}

export default App;
