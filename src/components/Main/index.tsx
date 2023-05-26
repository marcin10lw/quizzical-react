import { useDispatch, useSelector } from "react-redux";
import {
  setQuizStarted,
  SelectQuestions,
  SelectQuestionsState,
  setShowAnswers,
} from "../../store/questionsSlice";

import {
  StyledMain,
  Button,
  Score,
  SummaryWrapper,
  QuestionsWrapper,
} from "./styled";
import Section from "./Section";

type MainProps = {
  score: number;
};

const Main = ({ score }: MainProps) => {
  const { showAnswers } = useSelector(SelectQuestionsState);
  const questions = useSelector(SelectQuestions);
  const questionsAmount = questions.length;
  const dispatch = useDispatch();

  const onPlayAgain = () => {
    dispatch(setShowAnswers(true));
  };

  const goBackToSettings = () => {
    dispatch(setShowAnswers(false));
    dispatch(setQuizStarted(false));
  };

  return (
    <StyledMain>
      <QuestionsWrapper>
        {questions.map((question) => (
          <Section
            key={question.id}
            questionId={question.id}
            question={question.question}
            answers={question.answers}
          />
        ))}
      </QuestionsWrapper>
      {!showAnswers && <Button onClick={onPlayAgain}>Check answers</Button>}
      <SummaryWrapper>
        {showAnswers && (
          <Score>
            You scored {score}/{questionsAmount} correct answers 🚀
          </Score>
        )}
        {showAnswers && (
          <>
            <Button playAgain onClick={goBackToSettings}>
              Play Again
            </Button>
          </>
        )}
      </SummaryWrapper>
    </StyledMain>
  );
};

export default Main;
