import { useForm } from "react-hook-form";
import { FormRegisterStyle, Footer } from "./style";
import schema from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import InputRegister from "../../Inputs/InputRegister";
import { useContext } from "react";
import { UserFormContext } from "../../../Providers/UserFormsContext";

const FormRegister = () => {
  const { onSubmitRegisterForm } = useContext(UserFormContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  return (
    <>
      <FormRegisterStyle onSubmit={handleSubmit(onSubmitRegisterForm)}>
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
