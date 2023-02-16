import { Navigate } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="App">Carregando...</div>;
      <Navigate to={"/login"} />
    </>
  );
};

export default App;
