import React, { createContext, useMemo, useState } from 'react';

import { DataTrack } from '../components/DataTrack/index';
import api from '../services/api';
import history from '../services/history';
import { DataProps } from '../types/DataProps';
import { TrackingContextData } from '../types/TrackingContextData';

interface TrackingProviderProps {
  children: React.ReactNode;
}

const TrackingContext = createContext({} as TrackingContextData);

function TrackingProvider({ children }: TrackingProviderProps): JSX.Element {
  const [dataTrack, setDataTrack] = useState<DataProps | null>(null);
  const [trackCode, setTrackCode] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  async function getTrackingData(code: string) {
    setLoading(true);
    setDataTrack(null);
    history.push('/tracks');
    const { data } = await api.get(`v1?codigo=${code}`);

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
      console.log(data);
      setTrackCode(code);
      setLoading(false);
    } catch (error) {
      console.debug(' Erro:', data.error, '\n', 'Message:', data.message);
    }
  }
  const memoizedValue = useMemo(
    () => ({
      trackCode,
      dataTrack,
      loading,
      getTrackingData,
    }),
    [trackCode, dataTrack, loading, getTrackingData],
  );

  return (
    <TrackingContext.Provider value={memoizedValue}>
      {children}
    </TrackingContext.Provider>
  );
}

export { TrackingContext, TrackingProvider };
