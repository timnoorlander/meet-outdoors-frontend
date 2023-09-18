import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import styled from "styled-components";
import { activities } from "../../activities";
import { MapActivity } from "./components/MapActivity";

const position: LatLngExpression = [55.6761, 12.5683];

export function MapView() {
  return (
    <Container>
      <MapContainer
        style={{ width: "100%", height: "100%" }}
        center={position}
        zoom={11}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {activities.map((activity) => (
          <MapActivity key={activity.id} activity={activity} />
        ))}
      </MapContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100vw;
`;
