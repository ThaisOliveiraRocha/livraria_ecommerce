import React, { useEffect } from "react";
import PropTypes from "prop-types";
//import { Test } from './Details.styles';
import { connect } from "react-redux";
import Layout from "../../components/Layout";
import DetailsBook from "./components/DetailsBook";

const Details = ({ detalhes, history }) => {
  if (Object.keys(detalhes).length === 0) {
    {
      history.push("/");
    }
    return null;
  }
  return (
    <Layout>
      <DetailsBook livro={detalhes} />
    </Layout>
  );
};

Details.propTypes = {
  // bla: PropTypes.string,
};

const mapStateToProps = state => ({
  detalhes: state.livraria.detalhes
});

export default connect(mapStateToProps)(Details);
