import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Body } from "./MenuBar.styles";
import Button from "../Button";
import Texto from "../Text";
import Divider from "@material-ui/core/Divider";

const MenuBar = props => (
  <>
    <Body>
      <Button background="#dadada">
        <Texto>HOME</Texto>
      </Button>
      <Divider style={{ heigth: "28", margin: "4" }} orientation="vertical" />
      <Button background="#dadada">
        <Texto>PROMOÇÕES</Texto>
      </Button>
      <Divider style={{ heigth: "28", margin: "4" }} orientation="vertical" />

      <Button background="#dadada">
        <Texto>DETALHES</Texto>
      </Button>
      <Divider style={{ heigth: "28", margin: "4" }} orientation="vertical" />

      <Button background="#dadada">
        <Texto>SOBRE</Texto>
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

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
