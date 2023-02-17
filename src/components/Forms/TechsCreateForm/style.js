import styled from "styled-components";

const FormStyle = styled.form`
  width: 90%;

  margin: 5% 5% 0 5%;

  display: flex;
  flex-direction: column;

  gap: 10px;

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
      font-size: 0.75rem;
    }

    input,
    select {
      height: 40px;

      border-radius: 3px;
    }
    p {
      font-size: 0.9375rem;
    }
  }

  button {
    height: 40px;

    background-color: var(--primary);
    color: var(--white);

    border-radius: 4px;

    font-size: 0.8125rem;
    font-weight: bold;
  }

  @media (min-width: 769px) {
    div input,
    div select,
    button {
      height: 50px;
    }
  }
`;

export default FormStyle;
