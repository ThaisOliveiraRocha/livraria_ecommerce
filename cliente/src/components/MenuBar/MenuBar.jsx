import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Body } from "./MenuBar.styles";
import Button from "../Button";
import Texto from "../Text";
import Divider from "@material-ui/core/Divider";

const MenuBar = ({history}) => (
  <>
    <Body>
      <Button background="#dadada" color="black" onClick={() => history.push("/home")}>
        HOME
      </Button>
      <Divider style={{ heigth: "28", margin: "4" }} orientation="vertical" />
      <Button background="#dadada" color="black" onClick={() => history.push("/promocao")}>
        PROMOÇÕES
      </Button>
      <Divider style={{ heigth: "28", margin: "4" }} orientation="vertical" />
      <Button background="#dadada" color="black" onClick={() => history.push("/sobre-nos")}>
        SOBRE
      </Button>
      <Divider style={{ heigth: "28", margin: "4" }} orientation="vertical" />
      <Button background="#dadada" color="black" onClick={() => history.push("/contato")}>
        CONTATO
      </Button>
    </Body>
  </>
);

MenuBar.propTypes = {
  // bla: PropTypes.string,
};

MenuBar.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = ({dispatch, history}) => ({
  //...
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MenuBar));
