type Coordinates = [number, number];

export type Activity = {
  id: string;
  title: string;
  category: string;
  description: string;
  position: Coordinates;
  startTime: string;
  endTime: string;
};
