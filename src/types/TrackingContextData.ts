import { DataProps } from './DataProps';

export interface TrackingContextData {
  trackCode: string;
  dataTrack: DataProps | null | string;
  loading: boolean;
  getTrackingData: (code: string) => Promise<void>;
}
