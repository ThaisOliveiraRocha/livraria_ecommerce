import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { SinopseComponent, Body, Row, Col } from "./SinopseBook.styles";
import Titulo from "../../../../components/Title";
import Texto from "../../../../components/Text";
import Divider from "@material-ui/core/Divider";

const SinopseBook = ({ livro }) => (
  <Body>
    <SinopseComponent>
      <Row>
        <Col>
          <Titulo>Sinopse</Titulo>
        </Col>
      </Row>
      <Divider
        style={{
          width: "100%",
          height: "1px",

          marginBottom: "5px",
          backgroundColor: "rgba(0, 0, 0, 0.12)"
        }}
        orientation="horizontal"
      />
      <Row>
        <Col>
          <Texto>{livro.sinopse}</Texto>
        </Col>
      </Row>
    </SinopseComponent>
  </Body>
);

SinopseBook.propTypes = {
  // bla: PropTypes.string,
};

SinopseBook.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SinopseBook);
