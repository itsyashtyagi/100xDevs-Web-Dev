import { useRef } from "react";

export const useDebounce = (originalFn) => {
  const debounceRef = useRef();

  const fn = () => {
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(originalFn, 3000);
  };

  return fn;
};
