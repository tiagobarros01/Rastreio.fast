/* eslint-disable no-unused-vars */
import React, { createContext, ReactNode, useState } from 'react';

import api from '../services/api';

interface TrackingProviderProps {
  children: ReactNode
}

interface TrackingContextData {
  code: string;
  setCode: (code: string) => void;
  getTrackingData: () => void;
  dateHour: string;
}

const initialContext = {
  code: 'OO135195662BR',
  setCode: () => {},
  getTrackingData: () => {},
  dateHour: '',
};

const TrackingContext = createContext<TrackingContextData>(initialContext);

function TrackingProvider({ children }: TrackingProviderProps) {
  const [code, setCode] = useState(initialContext.code);
  const [dateHour, setDateHour] = useState(initialContext.dateHour);

  async function getTrackingData() {
    try {
      const { data, status } = await api.get(`v1?codigo=${code}`);

      setDateHour(data.map((item: any) => item.dataHora).join(' '));

      console.log('status:', status);
      console.log(data);
      console.log(data.map((item: any) => item.dataHora).join(' | '));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TrackingContext.Provider value={{
      code, getTrackingData, setCode, dateHour,
    }}
    >
      {children}
    </TrackingContext.Provider>
  );
}

export { TrackingContext, TrackingProvider };
