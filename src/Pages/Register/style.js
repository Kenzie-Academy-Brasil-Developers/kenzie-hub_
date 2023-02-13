import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 10px auto;

  h1 {
    margin-left: 5%;
  }

  a {
    margin-right: 5%;

    button {
      height: 30px;
      width: 80px;

      background-color: var(--gray-3);
      color: var(--white);

      border-radius: 4px;

      font-size: 12px;
      font-weight: bold;
    }
  }

  @media (min-width: 769px) {
    width: 30%;

    h1 {
      margin-left: 0;
    }

    a {
      margin-right: 0;
    }
  }
`;

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export { Container, Header };
