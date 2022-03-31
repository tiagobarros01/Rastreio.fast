import { CEP } from 'src/pages/SearchCEP';

import { HttpClient } from '../httpClient';
import { ICepsRepository } from './types/ICepsRepository';

class CepsRepository implements ICepsRepository {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient('https://viacep.com.br/ws');
  }

  async getCEP(cep: string) {
    const { data } = await this.httpClient.get<CEP>(`/${cep}/json`);

    return data;
  }
}

export const cepsRepository = new CepsRepository();
