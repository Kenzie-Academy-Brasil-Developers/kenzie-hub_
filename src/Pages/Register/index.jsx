import { Link } from "react-router-dom";
import FormRegister from "../../components/Forms/RegisterForm";
import Container from "./style";

const Register = () => {
  return (
    <Container>
      <div></div>
      <h1 className="title">Kenzie Hub</h1>
      <Link to={"/login"}>
        <button type="button">Voltar</button>
      </Link>
      <FormRegister />
    </Container>
  );
};

export default Register;
