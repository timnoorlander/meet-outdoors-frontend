export type Position = {
  lat: number;
  lng: number;
};

export type GeoCoderResult = {
  label: string;
  position: Position;
};
