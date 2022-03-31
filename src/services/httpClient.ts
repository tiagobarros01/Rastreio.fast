import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export class HttpClient {
  baseURL?: string;

  constructor(baseURL = 'https://api.linketrack.com') {
    this.baseURL = baseURL;
  }

  async get<T = unknown>(path: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    const result = await axios.get<T>(`${this.baseURL}${path}`, config);

    return result;
  }
}
