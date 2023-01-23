import { useDispatch, useSelector } from "react-redux";
import {
  fetchQuestions,
  SelectQuestionsState,
  setShowAnswers,
} from "../questionsSlice";
import { StyledMain, Button, Score, Flex } from "./styled";
import Section from "../Section";

const Main = ({ children, score }) => {
  const { showAnswers, questions } = useSelector(SelectQuestionsState);
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
          <Score id="score">You scored {score}/5 correct answers</Score>
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
