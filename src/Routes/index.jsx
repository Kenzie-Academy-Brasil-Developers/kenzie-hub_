import { Route, Routes } from "react-router-dom";
import App from "../App";
import Dashbord from "../Pages/Dashbord";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";
import Register from "../Pages/Register";

const RoutesPages = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />
      <Route path="/home/:user" element={<Dashbord />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesPages;
