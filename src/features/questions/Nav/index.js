import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchQuestions, setAmount, startQuiz } from "../questionsSlice";
import { StyledNav } from "./styled";

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
      <h1>Quizzical</h1>
      <label>
        Questions amount
        <select onChange={onAmountChange}>
          {questionsAmounts.map((amount) => (
            <option key={amount}>{amount}</option>
          ))}
        </select>
      </label>
      <button onClick={onStartClick}>Start quiz</button>
    </StyledNav>
  );
};

export default Nav;
