import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const FormComponentList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40vh;
  max-height: 70%;
  min-height: 30%;


  border: 1px solid rgba(11, 107, 230, 0.5);
  border-radius: 5px;
  box-shadow: 5px 5px 30px rgba(11, 107, 230, 0.3);
  background-color: white;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const FormComponentDelete = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35vh;
  height: 200px;

  border: 1px solid rgba(11, 107, 230, 0.5);
  border-radius: 5px;
  box-shadow: 5px 5px 30px rgba(11, 107, 230, 0.3);
  background-color: white;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30px;
  justify-content: center;
`;