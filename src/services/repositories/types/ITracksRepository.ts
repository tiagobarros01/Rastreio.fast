import { Track } from 'src/@types/Track';

export interface ITracksRepository {
  getTrack(code: string): Promise<Track>
}
