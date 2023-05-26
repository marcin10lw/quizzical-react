import { useDispatch, useSelector } from "react-redux";
import {
  fetchQuestions,
  setQuizStarted,
  SelectQuestions,
  SelectQuestionsState,
  setShowAnswers,
} from "../questionsSlice";
import { StyledMain, Button, Score, Flex } from "./styled";
import Section from "../Section";

const Main = ({ score }) => {
  const { showAnswers } = useSelector(SelectQuestionsState);
  const questions = useSelector(SelectQuestions);
  const questionsAmount = questions.length;
  const dispatch = useDispatch();

  const onCheckAnswers = () => {
    dispatch(setShowAnswers(true));
  };

  const playAgain = () => {
    dispatch(setShowAnswers(false));
    dispatch(fetchQuestions());
  };

  const goBackToSettings = () => {
    dispatch(setShowAnswers(false));
    dispatch(setQuizStarted(false));
  };

  const renderedQuestions = questions.map((question) => (
    <Section
      key={question.id}
      questionId={question.id}
      question={question.question}
      answers={question.answers}
    />
  ));

  return (
    <StyledMain>
      <div>{renderedQuestions}</div>

      {!showAnswers && <Button onClick={onCheckAnswers}>Check answers</Button>}

      <Flex>
        {showAnswers && (
          <Score id="score">
            You scored {score}/{questionsAmount} correct answers 🚀
          </Score>
        )}

        {showAnswers && (
          <>
            <Button playAgain onClick={playAgain}>
              Play again with same settings
            </Button>
            <Button playAgain onClick={goBackToSettings}>
              Go back to settings
            </Button>
          </>
        )}
      </Flex>
    </StyledMain>
  );
};

export default Main;
