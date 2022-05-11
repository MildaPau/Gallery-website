export type Sculpture = {
  id: string,
  img: string,
  title: string,
  year: number,
  dimensions: string,
  price: number,
};

export type State = {
  sculptures: Sculpture[],
};

export type Action = {
  type: string,
  payload: any,
};
