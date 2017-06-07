// @flow

// Stores
export type ShopItemType = {
  id: number,
  description: string,
  price: number,
  discount?: number /* percentage discount*/,
  isNew?: Boolean /* item is new */,
  image: string,
};

export type CartItemType = {
  id: number,
  quantity: number,
};

export type ShopListType = Array<ShopItemType>;
export type CartListType = Array<CartItemType>;

export type ErrorsType = Object;

// State
export type State = {
  shopItems: ShopListType,
  cartItems: CartListType,
  error: ErrorsType,
};
