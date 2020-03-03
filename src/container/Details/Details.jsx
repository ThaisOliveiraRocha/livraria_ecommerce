import React, { PureComponent } from "react";
import PropTypes from "prop-types";
//import { Test } from './Details.styles';
import { connect } from "react-redux";
import Layout from "../../components/Layout";
import DetailsBook from "./components/DetailsBook";

const Details = ({ detalhes }) => {
  console.log(detalhes)
  return (
    <Layout>
      <DetailsBook livro={detalhes}/>
    </Layout>
  );
};

Details.propTypes = {
  // bla: PropTypes.string,
};


const mapStateToProps = state => ({
  detalhes: state.livraria.detalhes,
});

export default connect(mapStateToProps)(Details);

