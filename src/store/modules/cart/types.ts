export interface IProduct {
  id: number;
  title: string;
  price: number;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  items: Array<ICartItem>;
}

export interface IAction {
  type: string;
  payload: {
    product: IProduct;
  };
}
