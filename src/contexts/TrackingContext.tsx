/* eslint-disable no-unused-vars */
import React, { createContext, ReactNode, useState } from 'react';

import api from '../services/api';

interface TrackingProviderProps {
  children: ReactNode
}

interface TrackingContextData {
  signed: boolean;
  code: string;
  setCode: (code: string) => void;
  getTrackingData: () => void;
}

const initialContext = {
  signed: false,
  code: '',
  setCode: () => {},
  getTrackingData: () => {},
};

const TrackingContext = createContext<TrackingContextData>(initialContext);

function TrackingProvider({ children }: TrackingProviderProps) {
  const [code, setCode] = useState('OO135195662BR');
  const signed = true;

  async function getTrackingData() {
    try {
      const { data, status } = await api.get(`v1?codigo=${code}`);

      console.log('status:', status);
      console.log(data.map((item: any) => item.data).join(' | '));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TrackingContext.Provider value={{
      signed, code, getTrackingData, setCode,
    }}
    >
      {children}
    </TrackingContext.Provider>
  );
}

export { TrackingContext, TrackingProvider };
