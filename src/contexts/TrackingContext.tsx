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
  getTrackingData: () => void;
  dateHour: string;
  description: string,
  uf: string,
  city: string,
}

const initialContext = {
  code: 'OO135195662BR',
  setCode: () => {},
  getTrackingData: () => {},
  dateHour: '',
  description: '',
  uf: '',
  city: '',
};

const TrackingContext = createContext<TrackingContextData>(initialContext);

function TrackingProvider({ children }: TrackingProviderProps) {
  const [code, setCode] = useState(initialContext.code);
  const [dateHour, setDateHour] = useState(initialContext.dateHour);
  const [description, setDescription] = useState(initialContext.description);
  const [uf, setUf] = useState(initialContext.uf);
  const [city, setCity] = useState(initialContext.city);

  async function getTrackingData() {
    try {
      const { data, status } = await api.get(`v1?codigo=${code}`);

      for (let i = 0; i < data.length; i++) {
        const cities = data.map((item: any) => item.cidade)[i];
        const ufs = data.map((item: any) => item.uf)[i];
        const dateHours = data.map((item: any) => item.dataHora)[i];
        const descriptions = data.map((item: any) => item.descricao)[i];

        setDateHour(dateHours);
        setDescription(descriptions);
        setUf(ufs);
        setCity(cities);

        console.log(
          cities, ufs, dateHours, descriptions,
        );
      }

      console.log('status:', status);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TrackingContext.Provider value={{
      code,
      getTrackingData,
      setCode,
      dateHour,
      description,
      uf,
      city,
    }}
    >
      {children}
    </TrackingContext.Provider>
  );
}

export { TrackingContext, TrackingProvider };
