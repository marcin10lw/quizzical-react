import { useState, useEffect } from "react";
import axios from "axios";
import { nanoid } from "nanoid";

export const useQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState("pending");

  const getQuestions = async () => {
    try {
      setStatus("pending");
      
      const response = await axios.get(
        "https://opentdb.com/api.php?amount=5&category=9"
      );
      const results = await response.data.results;

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

      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

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

  
  
  // return [questions, selectAnswer, getQuestions, score, status];
};
