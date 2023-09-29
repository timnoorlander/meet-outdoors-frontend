import { useState, useEffect } from "react";

export function useDebounce(value: string, delayInMs: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delayInMs);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delayInMs]);

  return debouncedValue;
}

export default useDebounce;
