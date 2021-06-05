/* eslint-disable no-unused-vars */
import React, { createContext, useMemo, useState } from 'react';

import { DataTrack } from '../components/DataTrack/index';
import api from '../services/api';
import history from '../services/history';
import { DataProps } from '../types/DataProps';

interface TrackingProviderProps {
  children: React.ReactNode;
}

interface TrackingContextData {
  trackCode: string;
  dataTrack: DataProps;
  getTrackingData: (code: string) => void;
}

const TrackingContext = createContext({} as TrackingContextData);

function TrackingProvider({ children }: TrackingProviderProps) {
  const [dataTrack, setDataTrack] = useState<DataProps>({
    cidade: '',
    data: '',
    dataHora: '',
    descricao: '',
    uf: '',
  });
  const [trackCode, setTrackCode] = useState<string>('');
  // OO135195662BR
  // LB559365129SE
  // NX150736229BR
  // LB559302234SE

  async function getTrackingData(code: string) {
    const { data } = await api.get(`v1?codigo=${code}`);

    console.log(data);

    try {
      setDataTrack(
        data
          .map(({
            cidade, dataHora, descricao, uf,
          }: DataProps) => (
            <DataTrack
              cidade={cidade}
              dataHora={dataHora}
              descricao={descricao}
              uf={uf}
            />
          ))
          .reverse(),
      );
      setTrackCode(code);
      history.push('/tracks');
    } catch (error) {
      console.debug('Error at:', error);
    }
  }
  const memoizedValue = useMemo(
    () => ({ trackCode, dataTrack, getTrackingData }),
    [trackCode, dataTrack, getTrackingData],
  );

  return (
    <TrackingContext.Provider value={memoizedValue}>
      {children}
    </TrackingContext.Provider>
  );
}

export { TrackingContext, TrackingProvider };
