import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchQuestions, setQuizStarted } from "../questionsSlice";

import { categories } from "./categories";
import { Container } from "../Container/styled";
import { StyledForm, Header, StartButton, Select, InputGroup } from "./styled";

const Form = () => {
  const [questionsAmount, setQuestionsAmount] = useState(5);
  const [categoryId, setCategoryId] = useState(9);
  const dispatch = useDispatch();

  let questionsAmounts = [];
  for (let i = 5; i <= 15; i++) {
    questionsAmounts.push(i);
  }

  const onStartQuiz = (event) => {
    event.preventDefault();

    dispatch(setQuizStarted(true));
    dispatch(fetchQuestions({ amount: questionsAmount, categoryId }));
  };

  return (
    <Container>
      <StyledForm onSubmit={onStartQuiz}>
        <Header>Quizzical</Header>
        <InputGroup>
          <label htmlFor="amount">Questions amount</label>
          <Select
            id="amount"
            onChange={({ target }) => setQuestionsAmount(target.value)}
          >
            {questionsAmounts.map((amount) => (
              <option key={amount}>{amount}</option>
            ))}
          </Select>
        </InputGroup>
        <InputGroup>
          <label htmlFor="category">Category</label>
          <Select
            id="category"
            onChange={({ target }) => setCategoryId(target.value)}
          >
            {categories.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </Select>
        </InputGroup>
        <StartButton>Start quiz</StartButton>
      </StyledForm>
    </Container>
  );
};

export default Form;
