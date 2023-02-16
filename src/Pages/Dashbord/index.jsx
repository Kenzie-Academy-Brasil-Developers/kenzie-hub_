import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import ListTechs from "../../components/ListTechs/index.jsx";
import ModalEditTechs from "../../components/Modal/ModalEditTechs/index.jsx";
import ModalCreateTechs from "../../components/Modal/ModalCreateTechs";
import { DivTechs, Header, Profile, SectionTechs } from "./style.js";
import { TechContext } from "../../Providers/TechsContext.jsx";
import toastify from "../../components/Toastify/toastify.js";

const Dashbord = () => {
  const {
    user,
    modalCreateTechs,
    setModalCreateTechs,
    modalEditTechs,
    requestUser,
  } = useContext(TechContext);

  const navigate = useNavigate();

  useEffect(() => {
    const localToken = localStorage.getItem("@TOKEN");

    if (localToken) {
      requestUser();
    } else {
      navigate("/login");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    toastify("Você está desconectado agora!", "success");
    navigate("/login");
  };

  return (
    <>
      <Header>
        <h1 className="title">Kenzie Hub</h1>
        <button onClick={logout}>Sair</button>
      </Header>
      <main>
        <Profile>
          <h2>Olá, {user.name}</h2>
          <p>{user.course_module}</p>
        </Profile>
        <DivTechs>
          <h3>Tecnologias</h3>
          <button onClick={() => setModalCreateTechs(true)}>+</button>
        </DivTechs>
        <SectionTechs>
          <ListTechs />
        </SectionTechs>
      </main>
      {modalCreateTechs && <ModalCreateTechs />}
      {modalEditTechs && <ModalEditTechs />}
    </>
  );
};

export default Dashbord;
