import cartItems from '../cartItems';


import { ADD_CART_ITEM, REMOVE_CART_ITEM } from '../../constants/ActionTypes';

describe('cartItems() -> reducer: ADD_CART_ITEM', () => {
  test('store contain newly addedd item', () => {
    const state = [];
    const action = {
      type: ADD_CART_ITEM,
      item: { id: 1, quantity: 1 },
    };
    const actual = cartItems(state, action);
    const expected = [
      {
        ...action.item,
      },
    ];

    expect(actual).toEqual(expected);
  });

  test('added item is prepend to the store', () => {
    const state = [{}, {}];
    const action = {
      type: ADD_CART_ITEM,
      item: { id: 2, quantity: 2 },
    };
    const actual = cartItems(state, action);
    const expected = { ...action.item };

    expect(actual[0]).toEqual(expected);
  });

  test('added existing item does not modify the store size, but the item itself', () => {
    const state = [{}, {}];
    const action = {
      type: ADD_CART_ITEM,
      item: { id: 2, quantity: 2 },
    };
    const actual = cartItems(state, action);
    expect(actual.length).toEqual(3);

    action.item.quantity += 1;

    const secondActual = cartItems(state, action);
    const secondExpected = { ...action.item };

    expect(secondActual[0]).toEqual(secondExpected);
    expect(secondActual.length).toEqual(3);
  });
});

describe('cartItems() -> reducer: REMOVE_CART_ITEM', () => {
  test('corresponding item is deleted from the store', () => {
    const state = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const action = { type: REMOVE_CART_ITEM, id: 2 };
    const actual = cartItems(state, action);
    const expected = [{ id: 1 }, { id: 3 }];

    expect(actual).toEqual(expected);
  });

  test('no item is deleted if item is not found', () => {
    const state = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const action = { type: REMOVE_CART_ITEM, id: 8 };
    const actual = cartItems(state, action);
    const expected = [{ id: 1 }, { id: 2 }, { id: 3 }];

    expect(actual).toEqual(expected);
  });

  test('the store is immutable', () => {
    const state = [{ id: 1 }];
    const action = { type: REMOVE_CART_ITEM, id: 8 };
    const actual = cartItems(state, action);
    const expected = [{ id: 1 }];

    expect(actual).toEqual(expected);
    expect(actual).not.toBe(state);
  });
});

describe('cartItems() -> reducer: default', () => {
  test('store is not changed when no action matches', () => {
    const state = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const action = { type: 'NOTHING', id: 2, quantity: 1 };
    const actual = cartItems(state, action);
    const expected = state;

    expect(actual).toEqual(expected);
    expect(actual).toBe(expected);
  });
});
