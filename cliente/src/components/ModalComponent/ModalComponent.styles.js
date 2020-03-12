import styled from "styled-components";

export const ContainerModal = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid rgba(11, 107, 230, 0.5);
  border-radius: 5px;
  box-shadow: 5px 5px 30px rgba(11, 107, 230, 0.3);
  background-color: white;
  z-index: 15;

  position: absolute;
  left: 40.7%;
  top: 20%;
  padding: 20px;
`;

export const HeaderModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BodyModal = styled.div`
  display: flex;
  align-items: center;

  padding: 20px;
`;

export const FooterModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;
