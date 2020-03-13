import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  height: 40%;

  border: 1px solid rgba(11, 107, 230, 0.5);
  border-radius: 5px;
  box-shadow: 5px 5px 30px rgba(11, 107, 230, 0.3);
  background-color: white;
`;


export const LabelComponent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  justify-content: center;
`;

export const InputComponent = styled.input`
  width: 40%;
  height: 25px;
  margin-left: 20px;
`;

