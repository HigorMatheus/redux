import { Reducer } from 'redux';
import produce from 'immer';
import { IAction, ICartState } from './types';
const INITIAL_STATE: ICartState = {
  items: [],
};
const cart: Reducer<ICartState, IAction> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'ADD_PRODUCT_TO_CART': {
        const { product } = action.payload;
        const productInCarIndex = draft.items.findIndex(
          (item) => item.product.id === product.id
        );
        if (productInCarIndex >= 0) {
          draft.items[productInCarIndex].quantity++;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }
        break;
      }
      default: {
        return draft;
      }
    }
  });
};
export default cart;
