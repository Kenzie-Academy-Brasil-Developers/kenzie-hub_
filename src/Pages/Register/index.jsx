import { useNavigate } from "react-router-dom";
import FormRegister from "../../components/Forms/RegisterForm";
import { Container, Header } from "./style";

const Register = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header>
        <h1 className="title">Kenzie Hub</h1>
        <button onClick={() => navigate("/login")} type="button">
          Voltar
        </button>
      </Header>
      <Container>
        <FormRegister />
      </Container>
    </>
  );
};

export default Register;
