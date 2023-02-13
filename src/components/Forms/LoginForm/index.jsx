import { useForm } from "react-hook-form";
import FormLoginStyle from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../../API/login/api";
import { Link, useNavigate } from "react-router-dom";

const schema = yup.object({
  email: yup.string().required("Email obrigatório!"),
  password: yup.string().required("Senha Obrigatória!"),
});

const FormLogin = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitForm = async (data) => {
    try {
      const response = api.post("/sessions", data);
      localStorage.setItem("@TOKEN", (await response).data.token);
      localStorage.setItem("@USERID", (await response).data.user.id);
      navigate(`/home/${(await response).data.user.name}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormLoginStyle onSubmit={handleSubmit(onSubmitForm)}>
      <h2>Login</h2>
      <div className="container--email">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          placeholder="Seu Email"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>
      </div>
      <div className="container--password">
        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type="password"
          placeholder="Sua senha"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>
      </div>
      <button type="submit">Entrar</button>
      <div className="container--register__button">
        <p>Ainda não possui uma conta</p>
        <Link to={"/cadastro"}>
          <button type="button">Cadastre-se</button>
        </Link>
      </div>
    </FormLoginStyle>
  );
};

export default FormLogin;
