import { StyledMain, Button, Questions } from "./styled";
import Section from "../Section";

const Main = ({ questions }) => (
  <StyledMain>
    <Questions>
      {questions.map((question) => (
        <Section
          key={question.id}
          question={question.question}
          answers={question.answers}
        />
      ))}
    </Questions>
    <Button>Check answers</Button>
  </StyledMain>
);

export default Main;
