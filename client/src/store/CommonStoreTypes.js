// @flow

// Stores
export type Link = {
  id: number,
  url: string,
  shortUrl: string,
};

export type CartItemType = {
  id: number,
  description: string,
  quantity: number,
  price: number
};

export type CartListType = Array<CartItemType>;

export type Links = Array<Link>;

export type ErrorsType = Object;

// State
export type State = {
  links: Links,
  cartItems: CartListType,
  error: ErrorsType,
};
