type Coordinates = [number, number];

export type Activity = {
  id: string;
  title: string;
  category: string;
  position: Coordinates;
  startTime: string;
  endTime: string;
};
