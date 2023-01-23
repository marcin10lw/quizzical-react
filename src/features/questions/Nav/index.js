import { useDispatch } from "react-redux";
import { fetchQuestions, startQuiz } from "../questionsSlice";
import { StyledNav } from "./styled";

const Nav = () => {
  const dispatch = useDispatch();

  const onStartClick = () => {
    dispatch(startQuiz());
    dispatch(fetchQuestions());
  };

  return (
    <StyledNav>
      <h1>Quizzical</h1>
      <button onClick={onStartClick}>Start quiz</button>
    </StyledNav>
  );
};

export default Nav;
