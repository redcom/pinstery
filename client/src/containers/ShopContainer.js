// @flow
import type { State, CartListType } from '../store/CommonStoreTypes';

import React from 'react';
import { connect } from 'react-redux';
import { Wrapper, CartItem, CartList } from '../components';
import { ErrorContainer } from '../containers';
import { deleteItem } from '../actions/CartActions';

const CartContainer = (
  {
    cartItems = [],
    dispatch,
  }: {
    cartItems: CartListType,
    dispatch: Function,
  },
) => {
  const onDelete = id => () => { dispatch(deleteItem(id)); };

  return (
    <Wrapper>
      <CartList>
        {cartItems.map(item => (
          <CartItem key={item.id} onDelete={onDelete(item.id)} {...item} />
        ))}
      </CartList>
      <ErrorContainer />
    </Wrapper>
  );
};

export default connect((state: State) => ({ cartItems: state.cartItems }))(CartContainer);
