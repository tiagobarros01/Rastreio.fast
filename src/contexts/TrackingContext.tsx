/* eslint-disable no-shadow */
import axios from 'axios';
import React, {
 createContext, useCallback, useMemo, useState,
} from 'react';
import { v4 } from 'uuid';

import { DataProps } from '../@types/DataProps';
import { TrackingContextData } from '../@types/TrackingContextData';
import { DataTrack } from '../components/DataTrack/index';
import { usePersistedState } from '../hooks/usePersistedState';
import { useRoutes } from '../services/useRoutes';

interface TrackingProviderProps {
  children: React.ReactNode;
}

const TrackingContext = createContext<TrackingContextData>(
  {} as TrackingContextData,
);

function TrackingProvider({ children }: TrackingProviderProps): JSX.Element {
  const [dataTrack, setDataTrack] = useState<string[] | null | JSX.Element[][]>(
    null,
  );
  const [trackCode, setTrackCode] = useState<string>('');
  const [trackCodeList, setTrackCodeList] = usePersistedState<string[]>(
    '@Rastreio.fast:TrackCodeList',
    [],
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleSetToList = useCallback(
    (prevState: string[], code: string): string[] => {
      const res = prevState.some((item) => item === code);

      if (!res) {
        return [...prevState, code];
      }
      return [...prevState];
    },
    [],
  );

  const getTrackingData = useCallback(async (code: string) => {
    setLoading(true);
    setDataTrack(null);
    const { data }: { data: DataProps } = await axios({
      method: 'post',
      url: 'https://correios.contrateumdev.com.br/api/rastreio',
      data: {
        code,
        type: 'LS',
      },
    });

    try {
      const res = data.objeto.map(({ evento }) => evento
      .map(({
        descricao, unidade, data, hora,
      }, index) => (
        <DataTrack
          key={v4()}
          data={data}
          descricao={descricao}
          unidade={unidade}
          hora={hora}
          length={Number(evento.length - 1 === index)}
        />
      )));

      setDataTrack(res);

      useRoutes('/tracks');
      setTrackCode(code.toUpperCase());
      setLoading(false);
      setError(false);
    } catch (err) {
      setLoading(false);
      setError(true);
      setDataTrack(data.objeto.map(({ categoria }) => categoria));
      useRoutes('/error');

      setTimeout(() => {
        useRoutes('/');
      }, 6000);
    }
  }, []);

  const memoizedValue = useMemo<TrackingContextData>(
    () => ({
      trackCode,
      trackCodeList,
      dataTrack,
      loading,
      getTrackingData,
      error,
      setTrackCodeList,
      handleSetToList,
    }),
    [
      trackCode,
      trackCodeList,
      dataTrack,
      loading,
      setTrackCodeList,
      handleSetToList,
      error,
      getTrackingData,
    ],
  );

  return (
    <TrackingContext.Provider value={memoizedValue}>
      {children}
    </TrackingContext.Provider>
  );
}

export { TrackingContext, TrackingProvider };
