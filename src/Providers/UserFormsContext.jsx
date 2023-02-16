import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../API/login/api";
import toastify from "../components/Toastify/toastify";

const UserFormContext = createContext({});

const UserFormProvider = ({ children }) => {
  const navigate = useNavigate();

  const onSubmitLoginForm = async (data) => {
    try {
      const response = await api.post("/sessions", data);
      localStorage.setItem("@TOKEN", (await response).data.token);
      localStorage.setItem("@USERID", (await response).data.user.id);
      navigate(`/home/${(await response).data.user.name}`);
      toastify("Login efetuado com sucesso!", "success");
    } catch (error) {
      console.error(error);
      if (
        error.response.data.message === "Incorrect email / password combination"
      ) {
        toastify("Email ou senha incorretos!", "error");
      }
    }
  };

  const onSubmitRegisterForm = async (data) => {
    const register = {
      email: data.email,
      password: data.password,
      name: data.name,
      bio: data.bio,
      contact: data.contact,
      course_module: data.course_module,
    };
    try {
      const response = await api.post("/users", register);
      navigate("/login");
      toastify("Cadastrado com sucesso!", "succses");
    } catch (error) {
      console.error(error);
      toastify(error.response.data.menssage, "error");
    }
  };

  return (
    <UserFormContext.Provider
      value={{ onSubmitLoginForm, onSubmitRegisterForm }}
    >
      {children}
    </UserFormContext.Provider>
  );
};

export { UserFormContext, UserFormProvider };
