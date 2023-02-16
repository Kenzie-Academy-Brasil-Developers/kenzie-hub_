import { MdOutlineClose } from "react-icons/md";
import ModalContainer from "./style.js";

import FormEditTechs from "../../Forms/EditTechsForm";
import { useContext } from "react";
import { TechContext } from "../../../Providers/TechsContext";

const ModalEditTechs = () => {
  const { setModalEditTechs, techEdit, requestUser } = useContext(TechContext);

  return (
    <ModalContainer>
      <section className="modal">
        <div className="title__modal">
          <h3>Tecnologia Detalhes</h3>
          <MdOutlineClose onClick={() => setModalEditTechs(false)} />
        </div>
        <FormEditTechs />
      </section>
    </ModalContainer>
  );
};

export default ModalEditTechs;
