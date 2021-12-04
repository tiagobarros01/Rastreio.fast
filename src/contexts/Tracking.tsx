import React, { createContext, useState, useContext } from 'react';

import type { DefaultTrack } from '../@types/DefaultTrack';
import type { Track } from '../@types/Track';
import { trackAPI } from '../services/api';
import { useRoutes } from '../services/useRoutes';
import { formatReturnTrack } from '../utils/formatReturnTrack';

interface ITrackingData {
  getTrackingData(code: string): Promise<void>;
  track?: Track;
  trackCode?: string | string[];
  isLoading: boolean;
}

const TrackingContext = createContext({} as ITrackingData);

export const TrackingProvider: React.FC = ({ children }) => {
  const [track, setTrack] = useState<Track | undefined>({} as Track);
  const [isLoading, setIsLoading] = useState(false);

  const trackCode = track?.object?.map((object) => object.number);

  const getTrackingData = async (code: string) => {
    setIsLoading(true);

    try {
      const { data } = await trackAPI.post<DefaultTrack>('/rastreio', {
        code,
        type: 'LS',
      });

      if (data?.message) {
        throw new Error(data.message);
      }

      const trackOject = data.objeto.map((object) => object);

      if (trackOject[0].categoria.includes('ERRO')) {
        throw new Error(trackOject[0].categoria);
      }

      const formattedTrack = formatReturnTrack(data);

      setTrack(formattedTrack);
      useRoutes('/tracks');
    } catch (err: any) {
      console.log(err.response?.data.message || err.message);
    }

    setIsLoading(false);
  };

  return (
    <TrackingContext.Provider
      value={{
        track,
        isLoading,
        getTrackingData,
        trackCode,
      }}
    >
      {children}
    </TrackingContext.Provider>
  );
};

export const useTrack = (): ITrackingData => {
  const context = useContext(TrackingContext);

  return context;
};
