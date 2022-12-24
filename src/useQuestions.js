import { useState, useEffect } from "react";
import axios from "axios";
import { nanoid } from "nanoid";

export const useQuestions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=5&category=9")
      .then((res) => {
        const results = res.data.results;

        setQuestions(
          results.map((result) => {
            const correctAnswer = {
              answer: result.correct_answer,
              id: nanoid(),
              isCorrect: true,
              isSelected: false,
            };

            const incorrectAnswers = result.incorrect_answers.map(
              (incorrectAnswer) => {
                return {
                  answer: incorrectAnswer,
                  id: nanoid(),
                  isCorrect: false,
                  isSelected: false,
                };
              }
            );

            const allAnswers = [correctAnswer, ...incorrectAnswers];

            return {
              question: result.question,
              id: nanoid(),
              answers: allAnswers.sort((a, b) => 0.5 - Math.random()),
            };
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return [questions, setQuestions];
};
