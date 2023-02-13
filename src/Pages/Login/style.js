import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  margin-bottom: 20px;

  @media (min-width: 769px) {
    h1 {
      font-size: 1.25rem;
    }
  }
`;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { Container, Header };
