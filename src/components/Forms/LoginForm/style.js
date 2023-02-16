import styled from "styled-components";

const FormLoginStyle = styled.form`
  background-color: var(--gray-3);

  width: 90%;
  height: 425px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 15px;

  border-radius: 4px;

  h2 {
    font-weight: bold;
    font-size: 0.9375rem;
  }

  div {
    display: flex;
    flex-direction: column;

    gap: 10px;

    width: 85%;

    label {
      font-size: 0.75rem;

      color: var(--gray-1);
    }

    input {
      height: 40px;

      background-color: var(--gray-2);
      color: var(--white);

      border-radius: 4px;
    }
  }

  button,
  a {
    height: 40px;
    width: 85%;

    color: var(--white);

    font-weight: bold;
    font-size: 0.8125rem;

    border-radius: 4px;

    margin-top: 1%;
  }

  .submit {
    background-color: var(--primary);
  }

  .submit:focus {
    background-color: var(--primary-focus);
  }

  .container--register__button {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 20px;

    p {
      font-size: 12px;

      color: var(--gray-1);

      margin-top: 5%;
    }

    a {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      text-decoration: none;

      background-color: var(--gray-1);
    }
    a:focus {
      background-color: var(--gray-2);
    }
  }

  @media (min-width: 769px) {
    width: 30%;
    height: 450px;

    h2 {
      font-size: 1.125rem;
    }

    div label {
      font-size: 0.875rem;
    }
  }
`;

export default FormLoginStyle;
