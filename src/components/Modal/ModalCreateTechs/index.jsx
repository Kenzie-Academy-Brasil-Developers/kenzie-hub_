import { MdOutlineClose } from "react-icons/md";
import ModalContainer from "./style";
import TechCreateForm from "../../Forms/TechsCreateForm";
import { useContext } from "react";
import { TechContext } from "../../../Providers/TechsContext";

const ModalCreateTechs = () => {
  const { setModalTechs } = useContext(TechContext);

  return (
    <ModalContainer>
      <section className="modal">
        <div className="title__modal">
          <h3>Cadastrar Tecnologia</h3>
          <MdOutlineClose onClick={() => setModalTechs(false)} />
        </div>
        <TechCreateForm />
      </section>
    </ModalContainer>
  );
};

export default ModalCreateTechs;
