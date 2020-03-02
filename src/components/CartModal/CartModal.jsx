import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { 
  ModalBody,
  Table,
  Tr,
  Td,
  ImageBook,
  Input,
  ImageTrash,
  ButtonGroup 
} from './CartModal.styles';
import Titulo from "../../components/Title";
import Text from "../../components/Text";
import Button from "../../components/Button";

const CartModal = props => (
  <ModalBody>
    <Titulo>Meu carrinho</Titulo>
    <Table>
      <Tr>
        <Td>
          <ImageBook src={require("../../assets/images/book1.png")} />
        </Td>
        <Td>
          <Text>Titulo</Text>
        </Td>
        <Td>
          <Input type="number" min="0" name="qtd_livros" />
        </Td>
        <Td>
          <Text>Preço</Text>
        </Td>
        <Td>
          <ImageTrash src={require("../../assets/images/excluir.png")} />
        </Td>
      </Tr>
    </Table>
    <ButtonGroup>
      <Button>Finalizar Compra</Button>
    </ButtonGroup>
  </ModalBody>
);

CartModal.propTypes = {
  // bla: PropTypes.string,
};

CartModal.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

//export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
export default CartModal;
