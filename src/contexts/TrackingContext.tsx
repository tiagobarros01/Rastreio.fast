/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import React, { createContext, ReactNode, useState } from 'react';

import api from '../services/api';

interface TrackingProviderProps {
  children: ReactNode
}

interface TrackingContextData {
  code: string;
  setCode: (code: string) => void;
  dataTrack: any;
  getTrackingData: () => void;
}

const TrackingContext = createContext({} as TrackingContextData);

function TrackingProvider({ children }: TrackingProviderProps) {
  const [code, setCode] = useState('OO135195662BR');
  const [dataTrack, setDataTrack] = useState();

  async function getTrackingData() {
    try {
      (async () => {
        const { data } = await api.get(`v1?codigo=${code}`);

        setDataTrack(data.map((item: any) => (
          <div>
            <p>
              <strong>City: </strong>
              {item.cidade}
              <br />
              <strong>State: </strong>
              {item.uf}
              <br />
              <strong>Date-hour: </strong>
              {item.dataHora}
              <br />
              <strong>Description: </strong>
              {item.descricao}
            </p>
          </div>
        )));
      })();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TrackingContext.Provider value={{
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
