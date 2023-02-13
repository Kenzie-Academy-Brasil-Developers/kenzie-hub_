import { Link } from "react-router-dom";
import FormRegister from "../../components/Forms/RegisterForm";
import { Container, Header } from "./style";

const Register = () => {
  return (
    <>
      <Header>
        <h1 className="title">Kenzie Hub</h1>
        <Link to={"/login"}>
          <button type="button">Voltar</button>
        </Link>
      </Header>
      <Container>
        <FormRegister />
      </Container>
    </>
  );
};

export default Register;
