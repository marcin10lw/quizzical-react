import { nanoid } from "@reduxjs/toolkit";
import axios from "axios";

export const getQuestions = async (amount = 5, categoryId = 9) => {
  const response = await axios.get(
    `https://opentdb.com/api.php?amount=${amount}&category=${categoryId}`
  );
  const results = await response.data.results;

  const questions = await results.map((result) => {
    const correctAnswer = {
      answer: result.correct_answer,
      id: nanoid(),
      isCorrect: true,
      isSelected: false,
    };

    const incorrectAnswers = result.incorrect_answers.map((incorrectAnswer) => {
      return {
        answer: incorrectAnswer,
        id: nanoid(),
        isCorrect: false,
        isSelected: false,
      };
    });

    const allAnswers = [correctAnswer, ...incorrectAnswers];

    return {
      question: result.question,
      id: nanoid(),
      answers: allAnswers.sort((a, b) => 0.5 - Math.random()),
    };
  });

  return await questions;
};
