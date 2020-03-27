import React from "react";
import PropTypes from "prop-types";
import Header from "../Header";
import { Container, ChildrenComponent } from "./Layout.styles";
import { GlobalStyles } from "../../assets/styles/GlobalStyles";
import MenuBar from "../MenuBar";

const Layout = ({ children }) => (
  <Container>
    <GlobalStyles />
    <Header />
    <MenuBar />
    <ChildrenComponent>
      {children}
    </ChildrenComponent>
  </Container>
);

Layout.propTypes = {
  // bla: PropTypes.string,
};

Layout.defaultProps = {
  // bla: 'test',
};

export default Layout;
