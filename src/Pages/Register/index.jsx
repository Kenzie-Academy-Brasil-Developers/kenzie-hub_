import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormRegister from "../../components/Forms/RegisterForm";
import { Container, Header } from "./style";

const Register = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("@TOKEN")) {
      navigate("/home/user");
    }
  }, []);

  return (
    <>
      <Header>
        <h1 className="title">Kenzie Hub</h1>
        <Link to={"/login"} type="button">
          Voltar
        </Link>
      </Header>
      <Container>
        <FormRegister />
      </Container>
    </>
  );
};

export default Register;
