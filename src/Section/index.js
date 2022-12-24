import DOMPurify from "dompurify";
import { StyledSection, Wrapper, Button } from "./styled";

const Section = ({ questionId, question, answers, selectAnswer }) => {
  return (
    <StyledSection>
      <h2
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(question) }}
      ></h2>
      <Wrapper>
        {answers.map((answer) => (
          <Button
            key={answer.id}
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(answer.answer) }}
            onClick={() => selectAnswer(questionId, answer.id)}
            isSelected={answer.isSelected}
          >
          </Button>
        ))}
      </Wrapper>
    </StyledSection>
  );
};

export default Section;
