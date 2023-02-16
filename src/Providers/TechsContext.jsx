import { useState } from "react";
import { createContext } from "react";
import api from "../API/login/api";
import toastify from "../components/Toastify/toastify";

const TechContext = createContext({});

const TechProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [modalCreateTechs, setModalCreateTechs] = useState(false);
  const [modalEditTechs, setModalEditTechs] = useState(false);
  const [techEdit, setTechEdit] = useState({});

  const requestUser = async () => {
    const localUserId = localStorage.getItem("@USERID");

    try {
      const response = await api.get(`/users/${localUserId}`);
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmitCreateForm = async (data) => {
    const token = localStorage.getItem("@TOKEN");

    try {
      const response = await api.post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      requestUser();
      setModalCreateTechs(false);
      toastify(`Tecnilogia ${data.title} adicionada com sucesso!`, "success");
    } catch (error) {
      console.error(error);
      toastify("Algo deu errado. Tente novamente mais tarde", "error");
    }
  };

  return (
    <TechContext.Provider
      value={{
        user,
        setUser,
        modalCreateTechs,
        setModalCreateTechs,
        modalEditTechs,
        setModalEditTechs,
        techEdit,
        setTechEdit,
        requestUser,
        onSubmitCreateForm,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export { TechContext, TechProvider };
