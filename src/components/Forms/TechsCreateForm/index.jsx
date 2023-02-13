import FormStyle from "./style";

const TechCreateForm = ({ handleSubmit, onSubmitForm, register, errors }) => {
  return (
    <FormStyle onSubmit={handleSubmit(onSubmitForm)}>
      <div>
        <label htmlFor="techs">Nome</label>
        <input
          id="techs"
          type="text"
          placeholder="Nome da tecnologia"
          {...register("title")}
        />
        <p>{errors.title?.message}</p>
      </div>
      <div>
        <label htmlFor="status">Selecione status</label>
        <select name="status" id="status" {...register("status")}>
          <option value="">Selecione status</option>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <p>{errors.status?.message}</p>
      </div>
      <button type="submit">Cadastrar Tecnologia</button>
    </FormStyle>
  );
};

export default TechCreateForm;
