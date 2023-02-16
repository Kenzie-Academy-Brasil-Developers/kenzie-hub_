import { useContext } from "react";
import { TechContext } from "../../Providers/TechsContext";
import { LiStyle, UlStyle } from "./style";

const ListTechs = () => {
  const { user, setTechEdit, setModalEditTechs } = useContext(TechContext);

  return (
    <>
      <UlStyle>
        {user.techs?.map((tec) => {
          return (
            <LiStyle
              onClick={() => {
                setTechEdit(tec);
                setModalEditTechs(true);
              }}
              key={crypto.randomUUID()}
            >
              <h3>{tec.title}</h3>
              <p>{tec.status}</p>
            </LiStyle>
          );
        })}
      </UlStyle>
    </>
  );
};

export default ListTechs;
