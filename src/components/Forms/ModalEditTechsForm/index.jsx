const FormEditTechs = ({
  handleSubmit,
  editTech,
  techEdit,
  register,
  setAlteration,
  alteration,
  deleteTech,
}) => {
  const statusVerif = (event) => {
    if (event !== "") {
      setAlteration(true);
    } else {
      setAlteration(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(editTech)}>
      <div>
        <label htmlFor="">Nome do projeto</label>
        <div className="name">
          <h3>{techEdit.title}</h3>
        </div>
      </div>
      <div>
        <label htmlFor="status">Status</label>
        <select
          name="status"
          id="status"
          {...register("status")}
          onChange={(event) => {
            statusVerif(event.target.value);
          }}
        >
          <option value="">Selecione o Status</option>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
      </div>
      <div className="constainer__buttons">
        <button className={!alteration ? "off save" : "on save"} type="submit">
          Salvar alterações
        </button>
        <button className="delete" type="button" onClick={deleteTech}>
          Excluir
        </button>
      </div>
    </form>
  );
};

export default FormEditTechs;
