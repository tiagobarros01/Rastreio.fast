import React, {
  createContext, useState, useContext, useMemo,
} from 'react';
import { useNavigate } from 'react-router-dom';

import { usePersistedState } from 'src/hooks/usePersistedState';

import type { DefaultTrack } from '../@types/DefaultTrack';
import type { Track } from '../@types/Track';
import { trackAPI } from '../services/api';
import { formatReturnTrack } from '../utils/formatReturnTrack';
import { sleep } from '../utils/sleep';

interface ITrackingData {
  getTrackingData(code: string): Promise<void>;
  track?: Track;
  trackCode?: string;
  isLoading: boolean;
  trackCodeList: string[];
  setTrackCodeList: React.Dispatch<React.SetStateAction<string[]>>;
}

const TrackingContext = createContext({} as ITrackingData);

export const TrackingProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();

  const [trackCodeList, setTrackCodeList] = usePersistedState<string[]>(
    '@Rastreio.fast:tracks',
    [],
  );

  const [track, setTrack] = useState<Track>({} as Track);
  const [isLoading, setIsLoading] = useState(false);

  const trackCode = useMemo(() => {
    return track?.code;
  }, [track?.code]);

  const getTrackingData = async (code: string) => {
    setIsLoading(true);

    await sleep(2000);

    try {
      const { data } = await trackAPI.get<DefaultTrack>('', {
        params: {
          codigo: code.trim(),
        },
      });

      const formattedTrack = formatReturnTrack(data);

      setTrack(formattedTrack);
      navigate('/tracks');
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
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
        trackCodeList,
        setTrackCodeList,
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
