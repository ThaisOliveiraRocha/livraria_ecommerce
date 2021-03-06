import styled from "styled-components";
import { Grid } from "@material-ui/core";

export const Container = styled(Grid)`
  width: 100;
`;

export const ChildrenComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  padding: 30px;
  background-color: #f1f3f4;
  min-height: calc(100vh - 160px);
  margin-top: 110px;
  padding-bottom: 0;
  padding-top: 0;
`;
