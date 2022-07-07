import styled from "styled-components";

export const SectionBox = styled.div`
  width: 100%;
  height: 70px;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;

  background-color: var(--orange);

  button {
    background-color: var(--orange);
    color: var(--white);
    opacity: calc(0.6);
  }

  button:hover {
    opacity: calc(1);
  }

  h2 {
    color: var(--white);
    font-size: 20px;
  }

  @media (min-width: 768px) {
    position: relative;
    right: 0;
    bottom: 0;
    width: 250px;
    height: 70px;
  }
`;
