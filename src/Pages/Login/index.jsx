import FormLogin from "../../components/Forms/LoginForm/index.jsx";
import { Container, Header } from "./style.js";

const Login = () => {
  return (
    <>
      <Header>
        <h1 className="title">Kenzie Hub</h1>
      </Header>
      <Container>
        <FormLogin />
      </Container>
    </>
  );
};

export default Login;
