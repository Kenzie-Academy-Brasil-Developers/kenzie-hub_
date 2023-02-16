import { Route, Routes } from "react-router-dom";
import App from "../App.jsx";
import Dashbord from "../Pages/Dashbord";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";
import Register from "../Pages/Register";
import { TechProvider } from "../Providers/TechsContext.jsx";
import { UserFormProvider } from "../Providers/UserFormsContext.jsx";

const RoutesPages = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route
        path="/login"
        element={
          <UserFormProvider>
            <Login />
          </UserFormProvider>
        }
      />
      <Route
        path="/cadastro"
        element={
          <UserFormProvider>
            <Register />
          </UserFormProvider>
        }
      />
      <Route
        path="/home/:user"
        element={
          <TechProvider>
            <Dashbord />
          </TechProvider>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesPages;
