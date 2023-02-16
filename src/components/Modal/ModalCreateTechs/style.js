import styled from "styled-components";

const ModalContainer = styled.div`
  height: 100%;
  width: 100vw;

  display: flex;
  justify-content: center;

  position: absolute;
  top: 0;

  background-color: rgba(0, 0, 0, 0.5);

  .modal {
    background-color: var(--gray-3);

    position: sticky;
    top: 20%;

    width: 90%;
    height: 290px;
  }

  .title__modal {
    background-color: var(--gray-2);

    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 40px;

    h3 {
      margin-left: 3%;
    }

    svg {
      color: var(--gray-1);

      margin-right: 3%;

      cursor: pointer;
    }
  }

  @media (min-width: 769px) {
    .modal {
      height: 342px;
      width: 369px;
    }
    .title__modal {
      height: 50px;
    }
  }
`;

export default ModalContainer;
