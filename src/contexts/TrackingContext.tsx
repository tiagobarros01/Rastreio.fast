/* eslint-disable no-unused-vars */
import React, {
  createContext, useMemo, useState,
} from 'react';

import api from '../services/api';
import history from '../services/history';

interface TrackingProviderProps {
  children: React.ReactNode;
}

interface TrackingContextData {
  dataTrack: any;
  getTrackingData: (code: string) => void;
}

const TrackingContext = createContext({} as TrackingContextData);

function TrackingProvider({ children }: TrackingProviderProps) {
  // OO135195662BR
  const [dataTrack, setDataTrack] = useState();

  async function getTrackingData(code: string) {
    try {
      (async () => {
        const { data } = await api.get(`v1?codigo=${code}`);

        try {
          setDataTrack(
            data.map((item: any) => (
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
            )),
          );
          history.push('/tracks');
        } catch (error) {
          console.debug('Error at:', error);
        }
      })();
    } catch (error) {
      console.debug(error);
    }
  }
  const memoizedValue = useMemo(() => ({
    dataTrack, getTrackingData,
  }),
  [dataTrack, getTrackingData]);

  return (
    <TrackingContext.Provider value={memoizedValue}>
      {children}
    </TrackingContext.Provider>
  );
}

export { TrackingContext, TrackingProvider };
