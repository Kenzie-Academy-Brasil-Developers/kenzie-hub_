import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;

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
`;

const Profile = styled.section`
  border: solid 1px var(--gray-3);

  display: flex;
  flex-direction: column;

  gap: 20px;

  padding: 30px;

  h2 {
    font-size: 1.125rem;
    font-weight: bold;
  }

  p {
    color: var(--gray-1);

    font-size: 0.875rem;
  }
`;

const SectionTechs = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 20px;

  min-height: 150px;

  h3 {
    font-size: 1.125rem;
    font-weight: bold;
  }

  p {
    width: 85%;
  }

  @media (min-width: 769px) {
    p {
      width: auto;

      margin: 0 auto;
    }
  }
`;

export { Header, Profile, SectionTechs };
