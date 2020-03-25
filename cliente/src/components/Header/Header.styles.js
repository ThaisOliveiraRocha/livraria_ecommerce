import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 90px;
  padding: 10px;

  align-items: center;
  background-color: #406EB3;
`;

export const Image = styled.img`
  width: 50px;
  height: auto;
  margin-right: 5px;
`;

export const Titulo = styled.span`
  flex-grow: 1;
  color: #ffffff;
  font-size: 26px;
  font-weight: 700;
`;

export const CartContainer = styled.div`
  display: flex;
  color: #ffffff;
  align-items: center;

  margin-right: 15px;
  position: relative;
`;

export const CartImage = styled.img`
  width: 30px;
  height: auto;
  margin-right: 10px;
`;

export const HomeComponent = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

export const QuantidadeItens = styled.span`
  border-radius: 50%;
  background-color: red;
  font-weight: 300;
  width: 20px;
  height: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 5px;
  left: 45px;

  margin-left: 10px;
`;

export const CartButtonComponent = styled.span`
  display: flex;
  align-items: center;
`;