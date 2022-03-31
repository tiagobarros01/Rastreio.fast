import { DefaultTrack } from 'src/@types/DefaultTrack';
import { formatReturnTrack } from 'src/utils/formatReturnTrack';

import { HttpClient } from '../httpClient';
import { ITracksRepository } from './types/ITracksRepository';

const { REACT_APP_TRACK_USER, REACT_APP_TRACK_TOKEN } = process.env;

class TracksRepository implements ITracksRepository {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient();
  }

  async getTrack(code: string) {
    const { data } = await this.httpClient.get<DefaultTrack>(
      `/track/json?user=${REACT_APP_TRACK_USER}&token=${REACT_APP_TRACK_TOKEN}`,
      {
        params: {
          codigo: code.trim(),
        },
      },
    );

    return formatReturnTrack(data);
  }
}

export const tracksRepository = new TracksRepository();
