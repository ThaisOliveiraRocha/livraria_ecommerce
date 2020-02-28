import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Carrinho.styles';

class Carrinho extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Carrinho will mount');
  }

  componentDidMount = () => {
    console.log('Carrinho mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Carrinho will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Carrinho will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Carrinho did update');
  }

  componentWillUnmount = () => {
    console.log('Carrinho will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="CarrinhoWrapper">
        Test content
      </div>
    );
  }
}

Carrinho.propTypes = {
  // bla: PropTypes.string,
};

Carrinho.defaultProps = {
  // bla: 'test',
};

export default Carrinho;
