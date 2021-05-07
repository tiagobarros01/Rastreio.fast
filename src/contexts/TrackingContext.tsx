/* eslint-disable no-unused-vars */
import React, { createContext, ReactNode, useState } from 'react';

import api from '../services/api';

interface TrackingProviderProps {
  children: ReactNode;
}

interface TrackingContextData {
  code: string;
  setCode: (code: string) => void;
  dataTrack: any;
  getTrackingData: () => void;
}

const TrackingContext = createContext({} as TrackingContextData);

function TrackingProvider({ children }: TrackingProviderProps) {
  const [code, setCode] = useState('');
  // OO135195662BR
  const [dataTrack, setDataTrack] = useState();

  async function getTrackingData() {
    try {
      (async () => {
        const { data } = await api.get(`v1?codigo=${code}`);

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
      })();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TrackingContext.Provider
      value={{
        code,
        setCode,
        dataTrack,
        getTrackingData,
      }}
    >
      {children}
    </TrackingContext.Provider>
  );
}

export { TrackingContext, TrackingProvider };
