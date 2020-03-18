import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 70vh;
`;

export const FormComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40vh;
  height: 40vh;

  border: 1px solid rgba(11, 107, 230, 0.5);
  border-radius: 5px;
  box-shadow: 5px 5px 30px rgba(11, 107, 230, 0.3);
  background-color: white;
  padding: 20px;
`;

export const Select = styled.select`
  width: 80%;
  height: 25px;
  border-radius: 2px;
  border: 1px solid rgba(157, 171, 181);
  background-color: rgba(157, 171, 181, 0.2);
  color: rgba(57, 59, 60);
  font-weight: 400;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  justify-content: center;
`;

export const Col = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
