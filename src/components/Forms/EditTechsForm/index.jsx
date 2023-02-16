import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../../Providers/TechsContext";
import toastify from "../../Toastify/toastify";
import FormStyle from "./style";
import * as yup from "yup";
import { useState } from "react";
import api from "../../../API/login/api";

const schema = yup.object({
  status: yup.string().required("Status obrigatório para atualização"),
});

const FormEditTechs = () => {
  const { requestUser, techEdit, setModalEditTechs } = useContext(TechContext);

  const statusVerif = (event) => {
    if (event !== "") {
      setAlteration(true);
    } else {
      setAlteration(false);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [alteration, setAlteration] = useState(false);

  const token = localStorage.getItem("@TOKEN");

  const deleteTech = async (data) => {
    try {
      const response = await api.delete(`/users/techs/${techEdit.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      requestUser();
      setModalEditTechs(false);
      toastify(
        `Tecnologia '${techEdit.title}' deletada com sucesso`,
        "success"
      );
    } catch (error) {
      console.error(error);
      toastify("Algo deu errado. Tente novamente mais tarde", "error");
    }
  };

  const editTech = async (data) => {
    try {
      const response = await api.put(`/users/techs/${techEdit.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      requestUser();
      toastify("Tecnologia editada com sucesso", "success");
      setModalEditTechs(false);
    } catch (error) {
      console.error(error);
      toastify("Algo deu errado. Tente novamente mais tarde", "error");
    }
  };

  return (
    <FormStyle onSubmit={handleSubmit(editTech)}>
      <div>
        <label htmlFor="">Nome do projeto</label>
        <div className="name">
          <h3>{techEdit.title}</h3>
        </div>
      </div>
      <div>
        <label htmlFor="status">Status</label>
        <select
          name="status"
          id="status"
          {...register("status")}
          onChange={(event) => {
            statusVerif(event.target.value);
          }}
        >
          <option value="">Selecione o Status</option>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
      </div>
      <div className="constainer__buttons">
        <button className={!alteration ? "off save" : "on save"} type="submit">
          Salvar alterações
        </button>
        <button className="delete" type="button" onClick={deleteTech}>
          Excluir
        </button>
      </div>
    </FormStyle>
  );
};

export default FormEditTechs;
