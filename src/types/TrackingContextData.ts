import { DataProps } from './DataProps';

export interface TrackingContextData {
  trackCode: string;
  dataTrack: DataProps | null;
  loading: boolean;
  getTrackingData: (code: string) => Promise<void>;
}
