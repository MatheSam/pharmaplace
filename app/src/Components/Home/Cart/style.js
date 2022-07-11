import styled from "styled-components";

export const StyledCart = styled.section`
  width: 100%;
  height: 100vh;
  color: var(--white);
  display: flex;
  flex-direction: column;
  
  .head {
    display: flex;
    height: 70px;
    background-color: var(--primary);
    align-items: center;

    .close {
      width: 20%;
      font-size: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    h2 {
      flex: 1;
      font-weight: 500;
    }

    .image {
      width: 48px;
      height: 48px;
      border-radius: 100%;
      background-color: var(--white);
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 30px;

      & img {
        width: 80%;
        height: 80%;
      }

      & span {
        position: absolute;
        border: 1px solid var(--white);
        right: 29px;
        top: 42px;
        font-size: 12px;
        padding: 12px;
        z-index: 2;
        width: 0px;
        height: 0px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--orange);
      }
    }
  }

  .body {
    flex: 1;
    padding: 20px 30px;
    overflow: auto;
    background-color: var(--body-background);
  }

  .cartInfo {
    background-color: var(--white);
    height: 150px;
    padding: 0px 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    button {
      opacity: 1;
    }

    & .finalizar {
      background-color: var(--primary);
      color: var(--white);
    }

    & .adicionar {
      background-color: var(--white);
      color: var(--primary);
      font-weight: 300;
      font-size: 15px;
      border: 1px solid var(--primary);
    }
  }
`;
