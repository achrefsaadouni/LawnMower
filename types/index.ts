export type Mower = {
  xPosition: number;
  yPosition: number;
  cardinalDirection: CardinalDirection;
};

export type Lawn = {
  lawnHight: number;
  lawnWidth: number;
};

export enum CardinalDirection {
  N,
  S,
  W,
  E,
}

export enum Sequence {
  F,
  R,
  L,
}
