import { StyledMain, Button } from "./styled";

const Main = ({ children, showAnswers, setShowAnswers }) => (
  <StyledMain>
    {children}

    {!showAnswers && (
      <Button onClick={() => setShowAnswers(true)}>Check answers</Button>
    )}

    {showAnswers && (
      <Button>Play again</Button>
    )}
  </StyledMain>
);

export default Main;
