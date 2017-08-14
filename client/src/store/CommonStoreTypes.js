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
  size?: number,
};

export type CartItemType = {
  id: number,
  quantity: number,
  size: number,
};

export type AdminType = {
  isAdmin: boolean,
  isAuth: boolean,
  url: string,
  token: string,
  images: Object,
  publishProducts: Array<Object>,
  categories: Array<Object>,
};

export type ShopListType = Array<ShopItemType>;
export type CartListType = Array<CartItemType>;

export type ErrorsType = ?Object;

// State
export type State = {
  shopItems: ShopListType,
  cartItems: CartListType,
  admin: AdminType,
  error: ErrorsType,
};
