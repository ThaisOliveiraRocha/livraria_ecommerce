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
      <Divider style={{ heigth: "28", margin: "4" }} orientation="vertical" onClick={() => history.push("/promocao")}/>
      <Button background="#dadada" color="black">
        PROMOÇÕES
      </Button>
      <Divider style={{ heigth: "28", margin: "4" }} orientation="vertical" onClick={() => history.push("/sobre-nos")}/>
      <Button background="#dadada" color="black">
        SOBRE
      </Button>
      <Divider style={{ heigth: "28", margin: "4" }} orientation="vertical" onClick={() => history.push("/contato")}/>
      <Button background="#dadada" color="black">
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
