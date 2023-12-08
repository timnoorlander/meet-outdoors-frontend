import { Coordinates } from "@/types";

export function getCurrentLocation() {
  return new Promise<Coordinates>((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not supported by your browser"));
    }

    function onSuccess(position: GeolocationPosition) {
      resolve({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    }

    function onError(err: GeolocationPositionError) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
      reject(err);
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError, {
      timeout: 5000,
    });
  });
}
