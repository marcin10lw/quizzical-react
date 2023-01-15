import { Message, Info } from "./styled";

const ErrorScreen = () => (
  <div>
    <Message>FAILED TO FETCH QUESTIONS 🙁</Message>
    <Info>Please check Your interner connection</Info>
    <Info>If Your connecion is OK, it's our fault</Info>
    <Info>Please try again later 😅</Info>
  </div>
);

export default ErrorScreen;
