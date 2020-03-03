import styled from "styled-components";


export const TituloTopo = styled.tr`
    
`;

export const Item = styled.td`
  height: 50px;
  text-align: center;
  border: 1px solid #dddddd;
`;

export const ImageTrash = styled.img`
  width: 20px;
  height: auto;
  cursor: pointer;

  &:active {
    transform: scale(0.9, 0.9);
  }
`;