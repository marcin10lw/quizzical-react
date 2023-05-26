import { nanoid } from "nanoid";

type Result = {
  category: string;
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
};

export const formatApiResponse = (results: Result[]) => {
  return results.map((result) => {
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
};
