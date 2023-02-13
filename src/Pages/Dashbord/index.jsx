import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../API/login/api.js";
import ListTechs from "../../components/ListTechs/index.jsx";
import ModalEditTechs from "../../components/Modal/ModalEditTechs/index.jsx";
import ModalTechs from "../../components/Modal/ModalTechs";

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
      <header>
        <h1 className="title">Kenzie Hub</h1>
        <button onClick={logout}>Sair</button>
      </header>
      <main>
        <section>
          <h2>Olá, {user.name}</h2>
          <p>{user.course_module}</p>
        </section>
        <h3>Tecnologias</h3>
        <button onClick={() => setModalTechs(true)}>+</button>
        <ListTechs
          user={user}
          setTechEdit={setTechEdit}
          setModalEditTechs={setModalEditTechs}
        />
      </main>
      {modalTechs && <ModalTechs setModalTechs={setModalTechs} />}
      {modalEditTechs && (
        <ModalEditTechs
          setModalEditTechs={setModalEditTechs}
          techEdit={techEdit}
        />
      )}
    </>
  );
};

export default Dashbord;
