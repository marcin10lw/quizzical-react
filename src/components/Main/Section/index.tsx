import DOMPurify from "dompurify";
import { useDispatch, useSelector } from "react-redux";
import {
  Answer,
  selectAnswer,
  SelectQuestionsState,
} from "../../../store/questionsSlice";
import { StyledSection, SectionHeader, Wrapper, Button } from "./styled";

type SectionProps = {
  questionId: string;
  question: string;
  answers: Answer[];
};

const Section = ({ questionId, question, answers }: SectionProps) => {
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
