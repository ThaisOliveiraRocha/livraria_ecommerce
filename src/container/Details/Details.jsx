import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Details.styles';

import Layout from '../../components/Layout';
import DetailsBook from './DetailsBook';

class Details extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <Layout>
        <DetailsBook />
      </Layout>
    );
  }
}

Details.propTypes = {
  // bla: PropTypes.string,
};

Details.defaultProps = {
  // bla: 'test',
};

export default Details;
