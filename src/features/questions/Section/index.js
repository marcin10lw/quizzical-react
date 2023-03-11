import DOMPurify from "dompurify";
import { useDispatch, useSelector } from "react-redux";
import { selectAnswer, SelectQuestionsState } from "../questionsSlice";
import { StyledSection, SectionHeader, Wrapper, Button } from "./styled";

const Section = ({ questionId, question, answers }) => {
  const { showAnswers } = useSelector(SelectQuestionsState);
  const dispatch = useDispatch();

  return (
    <StyledSection>
      <SectionHeader
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(question) }}
      />
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
            onClick={() =>
              dispatch(selectAnswer({ questionId, answerId: answer.id }))
            }
          ></Button>
        ))}
      </Wrapper>
    </StyledSection>
  );
};

export default Section;
