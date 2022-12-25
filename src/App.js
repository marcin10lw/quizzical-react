import { useState } from "react";
import { useQuestions } from "./useQuestions";
import { Container } from "./Container/styled";
import Nav from "./Nav";
import Main from "./Main";
import Section from "./Section";

function App() {
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useQuestions();
  const [showAnswers, setShowAnswers] = useState(false);

  const startQuiz = () => setStarted(true);

  const selectAnswer = (questionId, answerId) => {
    setQuestions((questions) =>
      questions.map((question) => {
        if (question.id === questionId) {
          return {
            ...question,
            answers: question.answers.map((answer) => {
              return answer.id === answerId
                ? { ...answer, isSelected: !answer.isSelected }
                : { ...answer, isSelected: false };
            }),
          };
        }

        return question;
      })
    );
  };

  return (
    <Container started={started}>
      {!started && <Nav startQuiz={startQuiz} />}
      {started && (
        <Main showAnswers={showAnswers} setShowAnswers={setShowAnswers}>
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
