import { useForm } from "react-hook-form";
import FormLoginStyle from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserFormContext } from "../../../Providers/UserFormsContext";

const schema = yup.object({
  email: yup.string().required("Email obrigatório!"),
  password: yup.string().required("Senha Obrigatória!"),
});

const FormLogin = () => {
  const { onSubmitLoginForm } = useContext(UserFormContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <FormLoginStyle onSubmit={handleSubmit(onSubmitLoginForm)}>
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
      <button className="submit" type="submit">
        Entrar
      </button>
      <div className="container--register__button">
        <p>Ainda não possui uma conta</p>
        <Link to={"/cadastro"}>Cadastre-se</Link>
      </div>
    </FormLoginStyle>
  );
};

export default FormLogin;
