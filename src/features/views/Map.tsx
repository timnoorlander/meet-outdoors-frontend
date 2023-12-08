import L, { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import styled from "styled-components";
import { useQuery } from "react-query";
import { MapActivity } from "./components/MapActivity";
import { useEffect } from "react";
import { getActivities } from "../activities/utils/api";
import { GenericError } from "@/components/layout/GenericError";

const position: LatLngExpression = [55.6761, 12.5683];

export function Map() {
  const query = useQuery("activities", getActivities);

  if (query.isError) {
    return <GenericError />;
  }

  return (
    <Container>
      <MapContainer
        style={{ width: "100%", height: "100%" }}
        center={position}
        zoom={11}
        scrollWheelZoom={true}
        zoomControl={false}
      >
        <MapHudConfiguration />
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {query.data?.map((activity) => (
          <MapActivity key={activity.id} activity={activity} />
        ))}
      </MapContainer>
    </Container>
  );
}

function MapHudConfiguration() {
  const map = useMap();

  useEffect(() => {
    if (document.querySelector(".leaflet-control-zoom")) {
      return;
    }

    L.control
      .zoom({
        position: "bottomright",
      })
      .addTo(map);
  }, [map]);

  return null;
}

const Container = styled.div`
  height: 100%;
  width: 100vw;
`;
