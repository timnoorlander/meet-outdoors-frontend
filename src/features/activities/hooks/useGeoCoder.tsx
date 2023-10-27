import H from "@here/maps-api-for-javascript";
import { useEffect, useState } from "react";
import { Position, GeoCoderResult } from "../types";

// TODO: Create singleton for HERE initialization.
const platform = new H.service.Platform({
  apikey: import.meta.env.VITE_HERE_API_KEY,
});
const service = platform.getSearchService();

type HereAPIGeoCodingResult = {
  items: { title: string; position: Position }[];
};

export function useGeoCoder(searchInput: string) {
  const [searchResults, setSearchResults] = useState<GeoCoderResult[]>([]);

  useEffect(() => {
    if (!searchInput.length) {
      return;
    }

    const successCallback = (result: HereAPIGeoCodingResult) => {
      setSearchResults(
        result.items.map((item) => ({
          label: item.title,
          position: item.position,
        }))
      );
    };

    const errorCallback = () => {
      console.log("something went wrong");
    };

    service.geocode(
      {
        q: searchInput,
      },
      successCallback,
      errorCallback
    );
  }, [searchInput]);

  return { searchResults };
}
