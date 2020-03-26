import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  padding: 20px 10px 20px 50px;
  align-items: center;
  background-color: #2a7886;
`;

export const Image = styled.img`
  width: 40px;
  height: auto;
  margin-right: 5px;
`;

export const CartContainer = styled.div`
  display: flex;
  color: #ffffff;
  align-items: center;
  position: relative;
`;

export const CartImage = styled.div`
  width: 30px;
  height: auto;
`;

export const HomeComponent = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

export const QuantidadeItens = styled.span`
  border-radius: 50%;
  background-color: red;
  font-size: 12px;
  width: 15px;
  height: 15px;

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 8px;
  left: 45px;
`;

export const CartButtonComponent = styled.span`
  display: flex;
  align-items: center;
`;