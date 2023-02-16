import styled from "styled-components";

const FormStyle = styled.form`
  margin: 5% 5% 0 5%;

  display: flex;
  flex-direction: column;

  gap: 20px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 10px;

    width: 100%;

    h3 {
      margin-left: 5%;
    }
  }

  .name,
  div select {
    height: 40px;

    background-color: var(--gray-2);
    color: var(--gray-1);

    border: none;
    border-radius: 3px;
  }

  .constainer__buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .save {
    width: 165px;
    height: 40px;

    color: var(--white);

    border-radius: 4px;
  }

  .off {
    background-color: var(--primary-negative);
  }

  .on {
    background-color: var(--primary);
  }

  .delete {
    width: 80px;
    height: 40px;

    color: var(--white);
    background-color: var(--gray-1);

    border-radius: 4px;
  }

  @media (min-width: 769px) {
    .name,
    div select,
    .constainer__buttons button {
      height: 50px;
    }
  }
`;

export default FormStyle;
