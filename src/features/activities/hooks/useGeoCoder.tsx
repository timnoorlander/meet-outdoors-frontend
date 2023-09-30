import H from "@here/maps-api-for-javascript";
import { useEffect, useState } from "react";

// TODO: Create singleton for HERE initialization.
const platform = new H.service.Platform({
  apikey: import.meta.env.VITE_HERE_API_KEY,
});
const service = platform.getSearchService();

type HereAPIGeoCodingResult = {
  items: { title: string }[];
};

export function useGeoCoder(searchInput: string) {
  const [searchResults, setSearchResults] = useState<string[]>([]);

  useEffect(() => {
    if (!searchInput.length) {
      return;
    }

    const successCallback = (result: HereAPIGeoCodingResult) => {
      setSearchResults(result.items.map((item) => item.title));
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
