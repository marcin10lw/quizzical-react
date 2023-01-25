import { Container } from "../../Container/styled";
import Nav from "./Nav";
import Main from "./Main";
import LoadingScreen from "./LoadingScreen";
import ErrorScreen from "./ErrorScreen";
import { useSelector } from "react-redux";
import { SelectQuestionsState } from "./questionsSlice";

function App() {
  const { started, status } = useSelector(SelectQuestionsState);
  const { score } = useSelector(SelectQuestionsState);

  const statusInfo = status === "pending" || status === "error";

  return (
    <Container started={started} status={statusInfo}>
      {!started && <Nav />}

      {started && status === "pending" && <LoadingScreen />}
      {status === "error" && <ErrorScreen />}

      {started && status === "success" && <Main score={score} />}
    </Container>
  );
}

export default App;
