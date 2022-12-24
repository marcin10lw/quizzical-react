import DOMPurify from "dompurify";
import { StyledSection, Wrapper, Button } from "./styled";

const Section = ({ question, answers }) => {
  return (
    <StyledSection>
      <h2
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(question) }}
      ></h2>
      <Wrapper>
        {answers.map((answer) => (
          <Button
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(answer.answer) }}
            key={answer.id}
          >
          </Button>
        ))}
      </Wrapper>
    </StyledSection>
  );
};

export default Section;
