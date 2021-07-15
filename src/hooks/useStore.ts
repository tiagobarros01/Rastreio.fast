import { useContext } from 'react';

import { StoreContextData } from '../@types/StoreContextData';
import { StoreContext } from '../contexts/StoreContext';

export function useStore(): StoreContextData {
  const ctx = useContext(StoreContext);

  return ctx;
}
