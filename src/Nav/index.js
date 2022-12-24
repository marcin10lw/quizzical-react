import { StyledNav } from "./styled";

const Nav = ({ startQuiz }) => (
  <StyledNav>
    <h1>Quizzical</h1>
    <button onClick={startQuiz}>Start quiz</button>
  </StyledNav>
);

export default Nav;
