import styled, { keyframes } from "styled-components";

const fade = keyframes`
  from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`;

export const ModalBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  box-sizing: content-box;
  position: absolute;
  top: 60px;
  width: 200px;
  height: 150px;
  right: 150px;
  padding: 10px;
  border: 1px solid #79bac1;
  box-shadow: 5px 5px 30px rgba(121, 186, 193, 0.5);
  background-color: white;
  z-index: 10;

  animation: ${fade} 250ms;
  animation-fill-mode: backwards;
`;

export const UserComponent = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 30px;  
`;

export const Col = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
`;

export const Overlay = styled.div`
  position: fixed;
  /* display: none; */
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;
