import { StyledMain, Button } from "./styled";

const Main = ({ children, showAnswers, setShowAnswers, getQuestions }) => {
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

      {showAnswers && <Button as="a" href="#beginning" onClick={playAgain}>Play again</Button>}
    </StyledMain>
  );
};

export default Main;
