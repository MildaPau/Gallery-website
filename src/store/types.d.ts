export type State = {
  sculptures: Sculpture[],
  cart: CartItem[],
};

export type Action = {
  type: string,
  payload: any,
};
