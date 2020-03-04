import styled from "styled-components";
import { Grid } from "@material-ui/core";

export const Container = styled(Grid)`
  width: 100;
  background-color: #ffffff;
`;

export const ChildrenComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  padding: 30px;
  background-color: rgb(236, 236, 234);
`;
