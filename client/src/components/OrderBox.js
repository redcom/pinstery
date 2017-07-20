// @flow

import React from 'react';
import styled from 'styled-components';
import { Button, TitleItem } from '../components';

import { defaultFontSize, boxShadowBottom } from '../styles/vars';

const Box = styled.div`width: 300px;`;
const OrderDetails = styled.div`
  display: flex;
  align-items: center;
  margin: 1em 0;
  margin-top: ${props => (props.marginTop ? props.marginTop : '1em')};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '1em')};
`;

const InputNumber = styled.input`
  font-size: ${defaultFontSize};
  font-weight: bold;
  padding: 0.2em 1em;
  width: 4em;
  text-align: center;
  box-shadow: ${boxShadowBottom};
  border: none;
`;

const SizeOptions = styled.select`
  font-size: ${defaultFontSize};
  font-weight: bold;
  padding: 0.2em 1em;
  width: 6em;
  text-align: center;
  box-shadow: ${boxShadowBottom};
  border: none;
`;

type Props = {
  id: number,
  price: number,
  addToCart: Function,
};

class OrderBox extends React.Component {
  props: Props;

  static defaultProps = {
    price: 0,
  };

  componentWillMount() {
    this.setState({
      quantity: 1,
      size: 1,
      totalPrice: this.props.price,
    });
  }

  onChange = evt => {
    const { type, value } = evt.target;
    let quantity;
    let size;

    if (type === 'number') {
      quantity = value;
    }
    if (type === 'select-one') {
      size = value;
    }
    const totalPrice = quantity * this.props.price;
    this.setState({
      size,
      quantity,
      totalPrice,
    });
  };

  sendOrder = evt => {
    evt.preventDefault();
    this.props.addToCart({
      id: this.props.id,
      quantity: this.state.quantity,
      size: this.state.size,
    });
  };

  render() {
    return (
      <Box>
        <OrderDetails>
          <TitleItem htmlFor="quantity">Quantity</TitleItem>
          <InputNumber
            type="number"
            required="true"
            max="100"
            onChange={this.onChange}
            value={this.state.quantity}
            id="quantity"
          />
        </OrderDetails>
        <OrderDetails>
          <TitleItem htmlFor="size">Size</TitleItem>
          <SizeOptions onChange={this.onChange}>
            <option value="1">1 inch</option>
            <option value="2">1 inch</option>
            <option value="3">1 inch</option>
          </SizeOptions>
        </OrderDetails>
        <OrderDetails>
          <TitleItem htmlFor="totalPrice">Total</TitleItem>
          <p>
            {this.state.totalPrice}
          </p>
        </OrderDetails>
        <OrderDetails marginTop="3em" marginBottom="0">
          <Button onClick={this.sendOrder} width="100%">
            {' '}Order{' '}
          </Button>
        </OrderDetails>
      </Box>
    );
  }
}

export default OrderBox;
