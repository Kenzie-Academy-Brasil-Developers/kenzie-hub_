import FormStyle from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../../API/login/api";
import * as yup from "yup";
import { useContext } from "react";
import { TechContext } from "../../../Providers/TechsContext";

const schema = yup.object({
  title: yup.string().required("Tecnologia obrigatória!"),
  status: yup.string().required("Status obrigatório!"),
});

const TechCreateForm = () => {
  const { requestUser, setModalCreateTechs, onSubmitCreateForm } =
    useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <FormStyle onSubmit={handleSubmit(onSubmitCreateForm)}>
      <div>
        <label htmlFor="techs">Nome</label>
        <input
          id="techs"
          type="text"
          placeholder="Nome da tecnologia"
          {...register("title")}
        />
        <p>{errors.title?.message}</p>
      </div>
      <div>
        <label htmlFor="status">Selecione status</label>
        <select name="status" id="status" {...register("status")}>
          <option value="">Selecione status</option>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <p>{errors.status?.message}</p>
      </div>
      <button type="submit">Cadastrar Tecnologia</button>
    </FormStyle>
  );
};

export default TechCreateForm;
