// @flow

// Stores
export type CartItemType = {
  id: number,
  description: string,
  quantity: number,
  price: number
};

export type CartListType = Array<CartItemType>;

export type ErrorsType = Object;

// State
export type State = {
  cartItems: CartListType,
  error: ErrorsType,
};
