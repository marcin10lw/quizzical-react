import { useState, useEffect } from "react";
import axios from "axios";
import { nanoid } from "nanoid";

export const useQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);

  const getQuestions = () => {
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
  };

  useEffect(getQuestions, []);

  const selectAnswer = (questionId, answerId) => {
    setQuestions((questions) =>
      questions.map((question) => {
        if (question.id === questionId) {
          return {
            ...question,
            answers: question.answers.map((answer) => {
              return answer.id === answerId
                ? { ...answer, isSelected: !answer.isSelected }
                : { ...answer, isSelected: false };
            }),
          };
        }

        return question;
      })
    );
  };

  useEffect(() => {
    let correctAnswers = [];
    questions.forEach((question) => {
      question.answers.forEach((answer) => {
        if (answer.isSelected && answer.isCorrect) {
          correctAnswers.push(answer);
        }
      });
    });

    setScore(correctAnswers.length);
  }, [questions]);

  return [questions, setQuestions, selectAnswer, getQuestions, score];
};
