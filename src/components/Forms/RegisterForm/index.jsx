import { useForm } from "react-hook-form";
import { FormRegisterStyle, Footer } from "./style";
import schema from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import InputRegister from "../../Inputs/InputRegister";
import { useNavigate } from "react-router-dom";
import api from "../../../API/login/api";

const FormRegister = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmitForm = async (data) => {
    const register = {
      email: data.email,
      password: data.password,
      name: data.name,
      bio: data.bio,
      contact: data.contact,
      course_module: data.course_module,
    };
    console.log(register, "data");
    try {
      const response = api.post("/users", register);
      console.log(await response, "resposta api");
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <FormRegisterStyle onSubmit={handleSubmit(onSubmitForm)}>
        <div className="form__title">
          <h2>Crie sua conta</h2>
          <p>Rápido e grátis, vamos nessa</p>
        </div>
        <InputRegister
          label="Nome"
          type="text"
          id="name"
          placeholder="Digite aqui seu nome"
          error={errors.name?.message}
          {...register("name")}
        />
        <InputRegister
          label="Email"
          type="email"
          id="email"
          placeholder="Digite aqui seu email"
          error={errors.email?.message}
          {...register("email")}
        />
        <InputRegister
          label="Senha"
          type="password"
          id="password"
          placeholder="Digite aqui sua senha"
          error={errors.password?.message}
          {...register("password")}
        />
        <InputRegister
          label="Confirmar senha"
          type="password"
          id="confirmPassword"
          placeholder="Digite novamente sua senha"
          error={errors.confirmPassword?.message}
          {...register("confirmPassword")}
        />
        <InputRegister
          label="Bio"
          type="text"
          id="bio"
          placeholder="Digite aqui sua bio"
          error={errors.bio?.message}
          {...register("bio")}
        />
        <InputRegister
          label="Contato"
          type="text"
          id="contact"
          placeholder="Opção de contato"
          error={errors.contact?.message}
          {...register("contact")}
        />
        <div>
          <label htmlFor="course_module">Selecione seu módulo</label>
          <select
            name="course_module"
            id="course_module"
            {...register("course_module")}
          >
            <option value="">Módulo</option>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro Módulo
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo Módulo
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro Módulo
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto Módulo
            </option>
          </select>
          <p>{errors.course_module?.message}</p>
        </div>
        <button
          className={errors.confirmPassword?.message ? "off" : "on"}
          type="submit"
        >
          Cadastrar
        </button>
      </FormRegisterStyle>
      <Footer></Footer>
    </>
  );
};

export default FormRegister;
