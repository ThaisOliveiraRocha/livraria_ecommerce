import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Livraria from "../../container/Livraria/Livraria";
import { getBooks } from "../../api";
import { getLivros } from "../../store/actions";

//import { Test } from './Home.styles';

const Home = props => {
  useEffect(() => {
    getBooks()
      .then(response => {
        const data = response.data;
        props.getLivros(data);
      })
      .catch(e => console.log(e));
    // console.log(livros);
  }, []);
  return <Livraria />;
};

Home.propTypes = {
  // bla: PropTypes.string,
};

Home.defaultProps = {
  // bla: 'test',
};

const mapDispatchToProps = dispatch => ({
  getLivros: livros => {
    dispatch(getLivros(livros));
  }
});

export default connect(null, mapDispatchToProps)(Home);
