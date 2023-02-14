import { MdOutlineClose } from "react-icons/md";
import api from "../../../API/login/api";
import ModalContainer from "./style.js";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import FormEditTechs from "../../Forms/ModalEditTechsForm";

const schema = yup.object({
  status: yup.string().required("Status obrigatório para atualização"),
});

const ModalEditTechs = ({ setModalEditTechs, techEdit }) => {
  const token = localStorage.getItem("@TOKEN");

  const [alteration, setAlteration] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const deleteTech = async (data) => {
    try {
      const response = await api.delete(`/users/techs/${techEdit.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const editTech = async (data) => {
    try {
      const response = await api.put(`/users/techs/${techEdit.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ModalContainer>
      <section className="modal">
        <div className="title__modal">
          <h3>Tecnologia Detalhes</h3>
          <MdOutlineClose onClick={() => setModalEditTechs(false)} />
        </div>
        <FormEditTechs
          handleSubmit={handleSubmit}
          editTech={editTech}
          techEdit={techEdit}
          register={register}
          setAlteration={setAlteration}
          alteration={alteration}
          deleteTech={deleteTech}
        />
      </section>
    </ModalContainer>
  );
};

export default ModalEditTechs;
