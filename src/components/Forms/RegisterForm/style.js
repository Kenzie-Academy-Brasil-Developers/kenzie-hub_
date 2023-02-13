import styled from "styled-components";

const FormRegisterStyle = styled.form`
  background-color: var(--gray-3);

  width: 90%;

  padding-bottom: 7%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;

  border-radius: 4px;

  .form__title {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 20px;

    margin: 40px 0 30px 0;

    h2 {
      font-weight: bold;
    }

    p {
      color: var(--gray-1);

      font-size: 0.8125rem;
    }
  }

  div {
    display: flex;
    flex-direction: column;

    width: 85%;

    gap: 10px;

    label {
      font-size: 0.875rem;
      color: var(--gray-1);
    }

    select {
      height: 40px;

      width: 100%;

      background-color: var(--gray-2);
      color: var(--gray-1);
      border: none;

      border-radius: 3px;
    }
  }

  button {
    height: 40px;
    width: 85%;

    border-radius: 3px;

    color: var(--white);

    font-weight: bold;
  }

  .off {
    background-color: var(--primary-negative);
  }

  .on {
    background-color: var(--primary);
  }
  @media (min-width: 769px) {
    width: 30%;

    padding-bottom: 3%;
  }
`;

const Footer = styled.footer`
  height: 50px;
  width: 100%;
`;

export { FormRegisterStyle, Footer };
