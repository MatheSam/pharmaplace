import styled from "styled-components";

export const Container = styled.div`
  background-color: #f4f4f4;
  div {
    display: flex;
    justify-content: center;
    margin-top: 31px;
    font-size: 12px;
  }
`;
export const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: 669px) {
    display: flex;
    /*  flex-wrap: nowrap; */
    flex-direction: row;
    overflow-x: auto;
    scroll-behavior: smooth;
    
  }
`;
