const ListTechs = ({ user, setTechEdit, setModalEditTechs }) => {
  return (
    <section>
      <ul>
        {user.techs?.map((tec) => {
          return (
            <li
              onClick={() => {
                setTechEdit(tec);
                setModalEditTechs(true);
              }}
              key={crypto.randomUUID()}
            >
              <h3>{tec.title}</h3>
              <p>{tec.status}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ListTechs;
