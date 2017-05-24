// @flow

// Stores
export type CartItemType = {
  id: number,
  description: string,
  quantity?: number,
  price: number,
  discount?: number, /* percentage discount*/
  isNew?: Boolean, /* item is new */
  media?: string, /* absolute path to item image. Can be served by a CDN */
  image: string,
};

export type CartListType = Array<CartItemType>;

export type ErrorsType = Object;

// State
export type State = {
  cartItems: CartListType,
  error: ErrorsType,
};
