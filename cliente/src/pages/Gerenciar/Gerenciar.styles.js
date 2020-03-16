import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const Middle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 80vh;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vh;
  height: 60vh;

  border: 1px solid rgba(11, 107, 230, 0.5);
  border-radius: 5px;
  box-shadow: 5px 5px 30px rgba(11, 107, 230, 0.3);
  background-color: white;
  padding: 20px;
`;

export const TituloComponent = styled.div`
  display: flex;
  align-items: center;
  width: 100vh;
  height: 10vh;
  justify-content: center;

  border: 1px solid rgba(11, 107, 230, 0.5);
  border-radius: 5px;
  box-shadow: 5px 5px 30px rgba(11, 107, 230, 0.3);
  background-color: white;
  padding: 20px;
`;

export const LabelComponent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;

export const InputComponent = styled.input`
  width: 50%;
  height: 25px;
  margin-left: 10px;
`;

export const LinkComponent = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

