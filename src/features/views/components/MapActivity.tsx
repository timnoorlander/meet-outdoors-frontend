import { Marker, Popup } from "react-leaflet";
import { isActivityCurrentlyHappening } from "../utils";
import birdWatchingImage from "@/assets/birdwatching.jpg";
import { Activity } from "@/types";
import styled from "styled-components";
import dayjs from "dayjs";

type Props = {
  activity: Activity;
};

export function MapActivity({ activity }: Props) {
  return (
    <Marker
      opacity={isActivityCurrentlyHappening(activity) ? 0.5 : 1}
      position={activity.position}
    >
      <StyledPopup>
        <Thumbnail src={birdWatchingImage} />
        <ThumbnailContent>
          <ThumbnailContentHeader>{activity.title}</ThumbnailContentHeader>
          <span>{dayjs(activity.startTime).format("L LT")}</span>
        </ThumbnailContent>
      </StyledPopup>
    </Marker>
  );
}

const Thumbnail = styled.img`
  display: block;
  width: 300px;
`;

const ThumbnailContent = styled.div`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.xs};
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ThumbnailContentHeader = styled.span`
  font-weight: bold;
`;

const StyledPopup = styled(Popup)`
  // Targetting children classes within React-Leaflet Popup component
  .leaflet-popup-content-wrapper {
    overflow: hidden;
    padding: 0;
    width: auto;
  }

  .leaflet-popup-content {
    margin: 0;
  }

  a.leaflet-popup-close-button {
    font-size: 2rem;
    background-color: white;
    border-radius: 50%;
    top: 8px;
    right: 8px;
  }
`;
