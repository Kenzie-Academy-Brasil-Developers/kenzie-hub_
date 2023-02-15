import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormLogin from "../../components/Forms/LoginForm/index.jsx";
import { Container, Header } from "./style.js";

const Login = () => {
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
      </Header>
      <Container>
        <FormLogin />
      </Container>
    </>
  );
};

export default Login;
