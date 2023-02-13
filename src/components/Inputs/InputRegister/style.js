import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;

  width: 85%;

  label {
    color: var(--gray-1);

    font-size: 14px;
  }

  input {
    height: 40px;

    color: var(--white);
    background-color: var(--gray-2);

    border-radius: 3px;
  }
`;

export default Div;
