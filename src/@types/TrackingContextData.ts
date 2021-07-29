import { DataProps } from './DataProps';

export interface TrackingContextData {
  trackCode: string;
  trackCodeList: string[];
  setTrackCodeList: React.Dispatch<React.SetStateAction<string[]>>;
  dataTrack: any | null | string;
  loading: boolean;
  error: boolean;
  getTrackingData: (code: string) => Promise<void>;
  handleSetToList: (prevState: string[], code: string) => string[];
}
