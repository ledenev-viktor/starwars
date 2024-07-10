import { useEffect, useRef, useState, Dispatch, SetStateAction } from 'react';

type Serialize<T> = (value: T) => string;
type Deserialize<T> = (value: string) => T;

export function useLocalStorageState<T>(
  key: string,
  defaultValue: T | (() => T),
  options: {
    serialize?: Serialize<T>;
    deserialize?: Deserialize<T>;
  } = {},
): [T, Dispatch<SetStateAction<T>>] {
  const { serialize = JSON.stringify, deserialize = JSON.parse } = options;

  const [state, setState] = useState<T>(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      try {
        return deserialize(valueInLocalStorage);
      } catch (error) {
        window.localStorage.removeItem(key);
      }
    }
    return typeof defaultValue === 'function'
      ? (defaultValue as () => T)()
      : defaultValue;
  });

  const prevKeyRef = useRef(key);

  useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    window.localStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);

  return [state, setState];
}
