import styled from "styled-components";

export const FormComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vh;
  height: 70vh;

  border: 1px solid rgba(11, 107, 230, 0.5);
  border-radius: 5px;
  box-shadow: 5px 5px 30px rgba(11, 107, 230, 0.3);
  background-color: white;
  padding: 20px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  justify-content: center;
`;

export const ColText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
`;

export const ColInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
`;

export const ButtonComponent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  justify-content: center;
`;