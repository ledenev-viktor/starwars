import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";

export const useDebounceSearch = (duration: number) => {
  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearchValue, setDebouncedSearchValue] = useState('');

  const debouncedSetSearch = useCallback(
    debounce(value => {
      setDebouncedSearchValue(value);
    }, duration),
    [],
  );

  useEffect(() => {
    debouncedSetSearch(searchValue);
  }, [searchValue, debouncedSetSearch]);

  return { searchValue, setSearchValue, debouncedSearchValue };
};
