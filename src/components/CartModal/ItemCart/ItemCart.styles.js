import styled from "styled-components";

export const Tr = styled.tr`
  /* display: flex;
  align-items: center;
  width: 100%; */
`;

export const Td = styled.td`
  text-align: center;
  width: 70px;
  font-weight: normal;
`;

export const ImageBook = styled.img`
  width: 40px;
  height: auto;

  margin: 10px;
`;

export const InfoBook = styled.span`
  font-size: 14px;
  margin-right: 5px;
`;

export const Input = styled.input`
  font-size: 14px;
  width: 50px;
  margin-right: 5px;
`;

export const ImageTrash = styled.img`
  width: 20px;
  height: auto;
  cursor: pointer;

  &:active {
    transform: scale(0.9, 0.9);
  }
`;
