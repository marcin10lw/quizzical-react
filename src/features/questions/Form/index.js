import { useDispatch } from "react-redux";
import {
  fetchQuestions,
  setAmount,
  setCategoryId,
  setQuizStarted,
} from "../questionsSlice";
import {
  StyledForm,
  Header,
  StartButton,
  Select,
  Text,
  InputGroup,
} from "./styled";
import { categories } from "./categories";
import { Container } from "../Container/styled";

const Form = () => {
  const dispatch = useDispatch();

  let questionsAmounts = [];
  for (let i = 5; i <= 15; i++) {
    questionsAmounts.push(i);
  }

  const onAmountChange = ({ target }) => {
    dispatch(setAmount(target.value));
  };

  const onCategoryChange = ({ target }) => {
    dispatch(setCategoryId(target.value));
  };

  const onStartClick = () => {
    dispatch(setQuizStarted(true));
    dispatch(fetchQuestions());
  };

  return (
    <Container>
      <StyledForm>
        <Header>Quizzical</Header>
        <InputGroup>
          <label htmlFor="amount">Questions amount</label>
          <Select id="amount" onChange={onAmountChange}>
            {questionsAmounts.map((amount) => (
              <option key={amount}>{amount}</option>
            ))}
          </Select>
        </InputGroup>
        <InputGroup>
          <label htmlFor="category">Category</label>
          <Select id="category" onChange={onCategoryChange}>
            {categories.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </Select>
        </InputGroup>
        <StartButton onClick={onStartClick}>Start quiz</StartButton>
      </StyledForm>
    </Container>
  );
};

export default Form;
