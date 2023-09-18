import { Marker, Popup } from "react-leaflet";
import { isActivityCurrentlyHappening } from "../utils";
import birdWatchingImage from "@/assets/birdwatching.jpg";
import { Activity } from "@/types";
import styled from "styled-components";

type Props = {
  activity: Activity;
};

export function MapActivity({ activity }: Props) {
  return (
    <Marker
      opacity={isActivityCurrentlyHappening(activity) ? 1 : 0.5}
      position={activity.position}
    >
      <Popup>
        <Thumbnail src={birdWatchingImage} />
        {activity.title}
      </Popup>
    </Marker>
  );
}

const Thumbnail = styled.img`
  display: block;
  width: 200px;
  margin-bottom: 10px;
`;
