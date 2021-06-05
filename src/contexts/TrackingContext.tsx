/* eslint-disable no-unused-vars */
import React, {
  createContext, useMemo, useState,
} from 'react';

import api from '../services/api';
import history from '../services/history';

interface DataProps {
  cidade: string;
  data?: string;
  dataHora: string;
  descricao: string;
  uf: string;
}

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

  async function getTrackingData(code: string) {
    const { data } = await api.get(`v1?codigo=${code}`);

    console.log(data);

    try {
      setDataTrack(
        data.map((item: DataProps) => (
          <div>
            <div>
              <h3>
                <strong>City: </strong>
              </h3>
              <p>{item.cidade}</p>
            </div>
            <div>
              <h3>
                <strong>State: </strong>
              </h3>
              <p>{item.uf}</p>
            </div>
            <div>
              <h3>
                <strong>Date-Hour: </strong>
              </h3>
              <p>{item.dataHora}</p>
            </div>
            <div>
              <h3>
                <strong>Description: </strong>
              </h3>
              <p>{item.descricao}</p>
            </div>
          </div>
        )).reverse(),
      );
      setTrackCode(code);
      history.push('/tracks');
    } catch (error) {
      console.debug('Error at:', error);
    }
  }
  const memoizedValue = useMemo(() => ({
    trackCode, dataTrack, getTrackingData,
  }),
  [trackCode, dataTrack, getTrackingData]);

  return (
    <TrackingContext.Provider value={memoizedValue}>
      {children}
    </TrackingContext.Provider>
  );
}

export { TrackingContext, TrackingProvider };
