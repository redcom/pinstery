// @flow

import React from 'react';
import styled from 'styled-components';
import { Button } from '../components';

import {
  defaultFontSize,
  defaultSpaceBetweenElements,
  grey,
} from '../styles/vars';

const Box = styled.div`border: 1px solid ${grey};`;

const Label = styled.label`
  padding: ${defaultSpaceBetweenElements};
  font-size: ${defaultFontSize};
  font-weight: bold;
  width: 15%;
`;

const OrderBox = ({
  id = 0,
  addToCart = Function,
}: {
  id: number,
  addToCart: Function,
}) => {
  let quantity;

  const onChange = evt => {
    quantity = evt.target.value;
  };

  const sendOrder = () => {
    addToCart({ id, quantity });
  };

  return (
    <Box>
      <Label htmlFor="quantity">Quantity</Label>
      <input
        type="number"
        required="true"
        max="100"
        onChange={onChange}
        value={quantity}
        id="quantity"
        placeholder="1"
      />
      <Button onClick={sendOrder}> Order </Button>
    </Box>
  );
};

export default OrderBox;
