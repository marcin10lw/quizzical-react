import { useDispatch } from "react-redux";
import {
  fetchQuestions,
  setAmount,
  setCategoryId,
  setQuizStarted,
} from "../questionsSlice";
import {
  StyledNav,
  Header,
  StartButton,
  Select,
  Text,
  Paragraph,
} from "./styled";
import categoriesData from "./categories.json";
import { Container } from "../Container/styled";

const Nav = () => {
  const dispatch = useDispatch();

  let questionsAmounts = [];
  for (let i = 5; i <= 15; i++) {
    questionsAmounts.push(i);
  }

  const { categories } = categoriesData;

  const onAmountChange = ({ target }) => {
    dispatch(setAmount(target.value));
  };

  const onCategoryChange = ({ target }) => {
    console.log(target.value);
    dispatch(setCategoryId(target.value));
  };

  const onStartClick = () => {
    dispatch(setQuizStarted(true));
    dispatch(fetchQuestions());
  };

  return (
    <Container>
      <StyledNav>
        <Header>Quizzical</Header>
        <Paragraph>
          <label>
            <Text>Questions amount</Text>
            <Select onChange={onAmountChange}>
              {questionsAmounts.map((amount) => (
                <option key={amount}>{amount}</option>
              ))}
            </Select>
          </label>
        </Paragraph>
        <Paragraph>
          <label>
            <Text>Category</Text>
            <Select onChange={onCategoryChange}>
              {categories.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </Select>
          </label>
        </Paragraph>
        <StartButton onClick={onStartClick}>Start quiz</StartButton>
      </StyledNav>
    </Container>
  );
};

export default Nav;
