import { StyledMain, Button, Score, Flex } from "./styled";

const Main = ({
  children,
  showAnswers,
  setShowAnswers,
  getQuestions,
  score,
}) => {
  const playAgain = () => {
    setShowAnswers(false);
    getQuestions();
  };

  return (
    <StyledMain id="beginning">
      {children}

      {!showAnswers && (
        <Button onClick={() => setShowAnswers(true)}>Check answers</Button>
      )}

      <Flex>
        {showAnswers && <Score>You scored {score}/5 correct answers</Score>}

        {showAnswers && (
          <Button playAgain as="a" href="#beginning" onClick={playAgain}>
            Play again
          </Button>
        )}
      </Flex>
    </StyledMain>
  );
};

export default Main;
