import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const ModalComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vh;
  height: 40vh;

  border: 1px solid rgba(11, 107, 230, 0.5);
  border-radius: 5px;
  box-shadow: 5px 5px 30px rgba(11, 107, 230, 0.3);
  background-color: white;
  padding: 20px;
`;