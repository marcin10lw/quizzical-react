import { useDispatch } from "react-redux";
import { fetchQuestions, setAmount, startQuiz } from "../questionsSlice";
import { StyledNav, Header, StartButton, Select, Text } from "./styled";

const Nav = () => {
  const dispatch = useDispatch();

  let questionsAmounts = [];
  for (let i = 5; i <= 15; i++) {
    questionsAmounts.push(i);
  }

  const onAmountChange = ({ target }) => {
    console.log(target.value);
    dispatch(setAmount(target.value));
  };

  const onStartClick = () => {
    dispatch(startQuiz());
    dispatch(fetchQuestions());
  };

  return (
    <StyledNav>
      <Header>Quizzical</Header>
      <p>
        <label>
          <Text>Questions amount</Text>
          <Select onChange={onAmountChange}>
            {questionsAmounts.map((amount) => (
              <option key={amount}>{amount}</option>
            ))}
          </Select>
        </label>
      </p>
      <StartButton onClick={onStartClick}>Start quiz</StartButton>
    </StyledNav>
  );
};

export default Nav;
