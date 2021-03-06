import styled from "styled-components";

export const Titulo = styled.span`
  flex-grow: ${({ grow }) => (grow ? grow : 0)};
  font-size: ${({ font }) => (font ? font : "16px")};
  font-weight: 600;
  color: ${({ color }) => (color ? color : "#470938")};
`;
