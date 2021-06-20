import {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

export function usePersistedState<T>(
  key: string, initialState: T,
): Response<T> {
  const [state, setState] = useState<T>(() => {
    const storagedValue = localStorage.getItem(key);

    if (storagedValue) {
      return JSON.parse(storagedValue);
    }
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
