import styled from "styled-components";

const UlStyle = styled.ul`
  background-color: var(--gray-3);

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 30px 0;
  border-radius: 4px;

  gap: 20px;

  width: 100%;
`;

const LiStyle = styled.li`
  background-color: var(--gray-4);

  height: 50px;
  width: 95%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 4px;

  cursor: pointer;

  h3 {
    margin-left: 3%;
  }

  p {
    margin-right: 3%;
  }
`;

export { LiStyle, UlStyle };
