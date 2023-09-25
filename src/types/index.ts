type Coordinates = [number, number];

export type Activity = {
  id: string;
  name: string;
  category: string;
  position: Coordinates;
  startTime: string;
  endTime: string;
};
