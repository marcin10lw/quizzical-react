import { useDispatch, useSelector } from "react-redux";
import {
  fetchQuestions,
  SelectAmount,
  SelectQuestions,
  SelectQuestionsState,
  setShowAnswers,
} from "../questionsSlice";
import { StyledMain, Button, Score, Flex } from "./styled";
import Section from "../Section";

const Main = ({ score }) => {
  const { showAnswers } = useSelector(SelectQuestionsState);
  const questions = useSelector(SelectQuestions);
  const questionsAmount = useSelector(SelectAmount);

  const dispatch = useDispatch();

  const playAgain = () => {
    dispatch(setShowAnswers(false));
    dispatch(fetchQuestions());
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
    <StyledMain id="beginning">
      <div>{renderedQuestions}</div>

      {!showAnswers && (
        <Button
          as="a"
          href="#score"
          onClick={() => dispatch(setShowAnswers(true))}
        >
          Check answers
        </Button>
      )}

      <Flex>
        {showAnswers && (
          <Score id="score">
            You scored {score}/{questionsAmount} correct answers
          </Score>
        )}

        {showAnswers && (
          <Button playAgain onClick={playAgain}>
            Play again
          </Button>
        )}
      </Flex>
    </StyledMain>
  );
};

export default Main;
