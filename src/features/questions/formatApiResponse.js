import { nanoid } from "nanoid";

export const formatApiResponse = (results) => {
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
