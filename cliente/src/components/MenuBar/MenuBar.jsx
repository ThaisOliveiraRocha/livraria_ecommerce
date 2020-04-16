import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Body } from "./MenuBar.styles";
import Button from "../Button";
import Divider from "@material-ui/core/Divider";
import { getUserSession } from "../../api";

const MenuBar = ({ history, isAdm }) => {
  const userLogado = JSON.parse(getUserSession());

  return (
    <>
      <Body>
        <Button
          background="#e5e5e5"
          color="#464159"
          onClick={() => history.push("/home")}
        >
          HOME
        </Button>
        <Divider style={{ heigth: "28", margin: "4" }} orientation="vertical" />
        <Button
          background="#e5e5e5"
          color="#464159"
          onClick={() => history.push("/promocao")}
        >
          PROMOÇÕES
        </Button>
        <Divider style={{ heigth: "28", margin: "4" }} orientation="vertical" />
        <Button
          background="#e5e5e5"
          color="#464159"
          onClick={() => history.push("/sobre-nos")}
        >
          SOBRE
        </Button>
        <Divider style={{ heigth: "28", margin: "4" }} orientation="vertical" />
        <Button
          background="#e5e5e5"
          color="#464159"
          onClick={() => history.push("/contato")}
        >
          CONTATO
        </Button>
        {(userLogado !== null && userLogado.isAdm === "1") && (
          <>
            <Divider
              style={{ heigth: "28", margin: "4" }}
              orientation="vertical"
            />
            <Button
              background="#e5e5e5"
              color="#464159"
              onClick={() => history.push("/gerenciarProdutos")}
            >
              GERENCIAR
            </Button>
          </>
        )}
      </Body>
    </>
  );
};

MenuBar.propTypes = {
  // bla: PropTypes.string,
};

MenuBar.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = (state) => ({
  isAdm: state.livraria.isAdm,
});

const mapDispatchToProps = ({ dispatch, history }) => ({
  //...
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MenuBar)
);
