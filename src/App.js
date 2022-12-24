import { useQuestions } from "./useQuestions";
import { Container } from "./Container/styled";
import Nav from "./Nav";
import Main from "./Main";

function App() {
  const [questions, setQuestions] = useQuestions();

  return (
    <Container>
      {/* <Nav /> */}
      <Main questions={questions}/>
    </Container>
  );
}

export default App;
