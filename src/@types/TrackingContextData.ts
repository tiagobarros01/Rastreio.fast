import { DataProps } from './DataProps';

export interface TrackingContextData {
  trackCode: string;
  trackCodeList: string[];
  dataTrack: DataProps | null | string;
  loading: boolean;
  error: boolean;
  getTrackingData: (code: string) => Promise<void>;
}
