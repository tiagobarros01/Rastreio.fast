import React, {
 createContext, useMemo,
} from 'react';

import { StoreContextData } from '../@types/StoreContextData';
import { usePersistedState } from '../hooks/usePersistedState';

type StoreProviderProps = {
  children: React.ReactNode;
};

const StoreContext = createContext<StoreContextData>({} as StoreContextData);

function StoreProvider({ children }: StoreProviderProps): JSX.Element {
  const [user, setUser] = usePersistedState<StoreContextData['user']>('@Rastreio.fast:User', null);

  const memoizedValue = useMemo(() => ({
    user, setUser,
  }), [user, setUser]);

  return (
    <StoreContext.Provider value={memoizedValue}>
      {children}
    </StoreContext.Provider>
  );
}

export { StoreContext, StoreProvider };
