import DOMPurify from "dompurify";
import { useSelector } from "react-redux";
import { SelectQuestionsState } from "../questionsSlice";
import { StyledSection, Wrapper, Button } from "./styled";

const Section = ({ questionId, question, answers, selectAnswer }) => {
  const { showAnswers } = useSelector(SelectQuestionsState);

  return (
    <StyledSection>
      <h2
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(question) }}
      ></h2>
      <Wrapper>
        {answers.map((answer) => (
          <Button
            key={answer.id}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(answer.answer),
            }}
            isSelected={answer.isSelected}
            showCorrect={answer.isCorrect && showAnswers}
            showIncorrect={
              !answer.isCorrect && showAnswers && answer.isSelected
            }
            disabled={showAnswers}
            onClick={() => selectAnswer(questionId, answer.id)}
          ></Button>
        ))}
      </Wrapper>
    </StyledSection>
  );
};

export default Section;
