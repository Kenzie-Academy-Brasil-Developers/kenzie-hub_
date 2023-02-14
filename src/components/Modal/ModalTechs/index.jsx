import { MdOutlineClose } from "react-icons/md";
import ModalContainer from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../../API/login/api";
import TechCreateForm from "../../Forms/TechsCreateForm";

const schema = yup.object({
  title: yup.string().required("Tecnologia obrigatória!"),
  status: yup.string().required("Status obrigatório!"),
});

const ModalTechs = ({ setModalTechs }) => {
  const token = localStorage.getItem("@TOKEN");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitForm = async (data) => {
    try {
      const response = api.post("/users/techs", data, {
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
          <h3>Cadastrar Tecnologia</h3>
          <MdOutlineClose onClick={() => setModalTechs(false)} />
        </div>
        <TechCreateForm
          handleSubmit={handleSubmit}
          onSubmitForm={onSubmitForm}
          register={register}
          errors={errors}
        />
      </section>
    </ModalContainer>
  );
};

export default ModalTechs;
