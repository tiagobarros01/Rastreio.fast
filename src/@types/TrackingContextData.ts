import { DataProps } from './DataProps';

export interface TrackingContextData {
  trackCode: string;
  trackCodeList: string[];
  setTrackCodeList: React.Dispatch<React.SetStateAction<string[]>>;
  dataTrack: DataProps | null | string | JSX.Element[] | undefined;
  loading: boolean;
  error: boolean;
  getTrackingData: (code: string) => Promise<void>;
  handleSetToList: (prevState: string[], code: string) => string[];
}
