// @flow

// Stores
export type ShopItemType = {
  id: number,
  title: string,
  description: string,
  price: number,
  discount?: number,
  isNew?: Boolean,
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
