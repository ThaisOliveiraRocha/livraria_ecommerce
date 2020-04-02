import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  max-height: 100%;
  
  height: 250px;
  width: 55%;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #79bac1;
`;

export const SinopseComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  max-height: 200px;
  overflow: auto;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Col = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;

`;
