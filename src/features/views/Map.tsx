import L from "leaflet";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import styled from "styled-components";
import { useQuery } from "react-query";
import { MapActivity } from "./components/MapActivity";
import { useEffect } from "react";
import { getActivities } from "../activities/utils/api";
import { GenericError } from "@/components/layout/GenericError";
import { Coordinates } from "@/types";
import { getCurrentLocation } from "../activities/utils/map";

const copenhagenCoordinates: Coordinates = { lat: 55.6761, lng: 12.5683 };
const defaultPosition = copenhagenCoordinates;
const defaultZoom = 12;

export function Map() {
  const activitiesQuery = useQuery("activities", getActivities);
  const userPositionQuery = useQuery("userPosition", getCurrentLocation);

  if (activitiesQuery.isError) {
    return <GenericError />;
  }

  return (
    <Container>
      <MapContainer
        style={{ width: "100%", height: "100%" }}
        center={[defaultPosition.lat, defaultPosition.lng]}
        zoom={defaultZoom}
        scrollWheelZoom={true}
        zoomControl={false}
      >
        <RecenterAutomatically
          lat={userPositionQuery.data?.lat ?? defaultPosition.lat}
          lng={userPositionQuery.data?.lng ?? defaultPosition.lng}
        />
        <MapHudConfiguration />
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        {activitiesQuery.data?.map((activity) => (
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

function RecenterAutomatically({ lat, lng }: Coordinates) {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng]);
  }, [lat, lng, map]);
  return null;
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
