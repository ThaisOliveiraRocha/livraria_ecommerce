import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Divider } from "@material-ui/core";
import Texto from "../Text";
import Titulo from "../Title";
import Button from "../Button";
import {
  Overlay,
  ModalBody,
  UserComponent,
  ImageComponent,
  Image,
  Row,
  Col
} from "./ModalUser.styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const ModalUser = ({ user, onClose }) => (
  <>
    <Overlay onClick={onClose} />
    <ModalBody>
      <UserComponent>
        <AccountCircleIcon fontSize="large" />
        <Row>
          <Col>
            <Titulo>{user.nome}</Titulo>
          </Col>
        </Row>
        <Row>
          <Col>
            <Texto>{user.email}</Texto>
          </Col>
        </Row>
      </UserComponent>
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
          <Button background="white">
            <Texto>Gerenciar</Texto>
          </Button>
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
          <Button background="white">
            <Texto>Sair</Texto>
          </Button>
        </Col>
      </Row>
    </ModalBody>
  </>
);

ModalUser.propTypes = {
  // bla: PropTypes.string,
};

ModalUser.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
