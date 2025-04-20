interface Coordinates {
  x: number;
  y: number;
}

export interface Token {
  name: string;
  symbol: string;
  address: string;
  lpAddress: string;
  decimals: number;
  images: {
    icon: string;
    biome: Coordinates;
    building: {
      1: Coordinates;
      2: Coordinates;
      3: Coordinates;
    };
  };
}
