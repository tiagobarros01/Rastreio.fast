import React, {
  createContext, useCallback, useMemo, useState,
} from 'react';

import { DataProps } from '../@types/DataProps';
import { TrackingContextData } from '../@types/TrackingContextData';
import { DataTrack } from '../components/DataTrack/index';
import { usePersistedState } from '../hooks/usePersistedState';
import { trackAPI } from '../services/api';
import { useRoutes } from '../services/useRoutes';

interface TrackingProviderProps {
  children: React.ReactNode;
}

const TrackingContext = createContext({} as TrackingContextData);

function TrackingProvider({ children }: TrackingProviderProps): JSX.Element {
  const [dataTrack, setDataTrack] = useState<DataProps | null | string>(null);
  const [trackCode, setTrackCode] = useState<string>('');
  const [trackCodeList, setTrackCodeList] = usePersistedState<string[]>(
    '@Rastreio.fast:TrackCodeList',
    [],
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const getTrackingData = useCallback(
    async (code: string) => {
      setLoading(true);
      setDataTrack(null);
      const { data } = await trackAPI.get(`v1?codigo=${String(code)}`);

      try {
        setDataTrack(
          data.map(({
            cidade, dataHora, descricao, uf,
          }: DataProps) => (
            <DataTrack
              cidade={cidade}
              dataHora={dataHora}
              descricao={descricao}
              uf={uf}
            />
          )),
        );
        useRoutes('/tracks');
        setTrackCode(code.toUpperCase());
        setTrackCodeList((prevState: string[]) => [
          ...new Set(prevState),
          code,
        ]);
        setLoading(false);
        setError(false);
      } catch (err) {
        setLoading(false);
        setError(true);
        console.debug(' Erro:', data.error, '\n', 'Message:', data.message);
        setDataTrack(data.message);
        useRoutes('/error'); // if error, redirect to Error page

        setTimeout(() => {
          useRoutes('/'); // Redirect to Homepage
        }, 6000);
      }
    },
    [setTrackCodeList],
  );
  const memoizedValue = useMemo(
    () => ({
      trackCode,
      trackCodeList,
      dataTrack,
      loading,
      getTrackingData,
      error,
    }),
    [trackCode, trackCodeList, dataTrack, loading, error, getTrackingData],
  );

  return (
    <TrackingContext.Provider value={memoizedValue}>
      {children}
    </TrackingContext.Provider>
  );
}

export { TrackingContext, TrackingProvider };
