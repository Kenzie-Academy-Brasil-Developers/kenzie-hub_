import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;

  background-color: var(--gray-4);

  h1 {
    margin-left: 5%;
  }

  button {
    margin-right: 5%;

    border-radius: 4px;

    background-color: var(--gray-3);
    color: var(--white);

    height: 32px;
    width: 55px;
  }
  button:focus {
    background-color: var(--gray-1);
  }

  @media (min-width: 769px) {
    h1 {
      margin-left: 15%;
    }
    button {
      margin-right: 15%;
    }
  }
`;

const Profile = styled.section`
  border: solid 1px var(--gray-3);

  display: flex;
  flex-direction: column;

  gap: 20px;

  padding: 8% 5%;

  margin-top: 80px;

  h2 {
    font-size: 1.125rem;
    font-weight: bold;
  }

  p {
    color: var(--gray-1);

    font-size: 0.875rem;
  }

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;

    padding: 3% 15%;
  }
`;

const DivTechs = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  margin: 20px auto;

  h3 {
    font-weight: bold;
  }

  button {
    width: 32px;
    height: 32px;

    font-size: 20px;

    color: var(--white);
    background-color: var(--gray-3);

    border-radius: 4px;
  }

  button:focus {
    background-color: var(--gray-2);
  }

  @media (min-width: 769px) {
    h3 {
      margin-left: 15%;
    }
    button {
      margin-right: 15%;
    }
  }
`;

const SectionTechs = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 20px;

  min-height: 150px;

  width: 95%;

  margin: 0 auto;

  h3 {
    font-size: 1.125rem;
    font-weight: bold;
  }

  @media (min-width: 769px) {
    width: 70%;
  }
`;

export { Header, Profile, DivTechs, SectionTechs };
