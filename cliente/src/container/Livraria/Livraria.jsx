import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Layout from "../../components/Layout";
import Card from "./components/Card/Card";
import ModalComponent from "../../components/ModalComponent";
import { removeLivro, showModal } from "../../store/actions";
import { withRouter } from "react-router-dom";
import Slider from "../../components/Slider";
import {
  LivrariaContainer,
  SliderContainer,
  CardContainer,
  ProductsContainer,
} from "./Livraria.styles";
import Titulo from "../../components/Title";
import Texto from "../../components/Text";

import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Button from "../../components/Button";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { replaceSpecialCharacter } from "../../utils";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "50%",
    border: "1px solid #2a7886",
    borderRadius: "3px",
    backgroundColor: "white",
    marginTop: "30px",
    marginBottom: "20px",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 24,
    margin: 4,
  },
}));

const Livraria = ({ livros, showModal, funcaoConfirma, cancel }) => {
  const classes = useStyles();
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    setBookList(livros);
  }, [livros]);

  const filterOptions = (value) => {
    console.log("value ", value);
    let novosLivros = livros.filter(
      (item) =>
      replaceSpecialCharacter(item.titulo).indexOf(replaceSpecialCharacter(value)) === 0
    );
    setBookList(novosLivros);
  };

  return (
    <Layout>
      {showModal && (
        <ModalComponent
          temaModal="Deseja excluir o item?"
          mensagem="O item selecionado será excluído permanentemente."
          onClose={cancel}
          funcaoConfirma={funcaoConfirma}
          cancel={cancel}
        />
      )}
      <LivrariaContainer>
        <SliderContainer>
          <Slider />
        </SliderContainer>
        <ProductsContainer>
          <Titulo font="22px">Conheça nossos produtos</Titulo>
          <div className={classes.root}>
            <Button background="transparent" width="80px">
              <Texto color="#2a7886">Filtrar</Texto>
              <Texto color="#2a7886">
                <KeyboardArrowDownIcon />
              </Texto>
            </Button>
            <InputBase
              className={classes.input}
              placeholder="Pesquisar..."
              name="pesquisar"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => filterOptions(e.target.value)}
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </div>

          <CardContainer>
            {bookList.map((livro, index) => {
              return <Card key={index} livro={livro} />;
            })}
          </CardContainer>
        </ProductsContainer>
      </LivrariaContainer>
    </Layout>
  );
};

Livraria.propTypes = {
  // bla: PropTypes.string,
};

const mapStateToProps = (state) => ({
  livros: state.livraria.vetLivros,
  showModal: state.livraria.removeModal,
});

const mapDispatchToProps = (dispatch) => ({
  funcaoConfirma: () => {
    dispatch(removeLivro());
  },
  cancel: () => {
    dispatch(showModal("", false));
  },
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Livraria)
);
