import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../API/login/api.js";
import ListTechs from "../../components/ListTechs/index.jsx";
import ModalEditTechs from "../../components/Modal/ModalEditTechs/index.jsx";
import ModalTechs from "../../components/Modal/ModalTechs";
import { Header, Profile, SectionTechs } from "./style.js";

const Dashbord = () => {
  const localUserId = localStorage.getItem("@USERID");
  const localToken = localStorage.getItem("@TOKEN");

  const [user, setUser] = useState({});
  const [modalTechs, setModalTechs] = useState(false);
  const [modalEditTechs, setModalEditTechs] = useState(false);
  const [techEdit, setTechEdit] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const requestUser = async () => {
      try {
        const response = await api.get(`/users/${localUserId}`);
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    requestUser();
  }, [!modalTechs || !techEdit]);

  const logout = () => {
    localStorage.clear();
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
        <SectionTechs>
          <h3>Que pena! Estamos em desenvolvimento</h3>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </SectionTechs>
      </main>
    </>
  );
};

export default Dashbord;
