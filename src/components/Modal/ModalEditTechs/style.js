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

    border-radius: 3px;
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
    }
  }

  form {
    margin: 5% 5% 0 5%;

    display: flex;
    flex-direction: column;

    gap: 20px;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;

      gap: 10px;

      width: 100%;

      h3 {
        margin-left: 5%;
      }
    }

    .name,
    div select {
      height: 40px;

      background-color: var(--gray-2);
      color: var(--gray-1);

      border: none;
      border-radius: 3px;
    }

    .constainer__buttons {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .save {
      width: 165px;
      height: 40px;

      color: var(--white);

      border-radius: 4px;
    }

    .off {
      background-color: var(--primary-negative);
    }

    .on {
      background-color: var(--primary);
    }

    .delete {
      width: 80px;
      height: 40px;

      color: var(--white);
      background-color: var(--gray-1);

      border-radius: 4px;
    }
  }
`;

export default ModalContainer;
