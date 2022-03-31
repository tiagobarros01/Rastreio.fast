import { CEP } from 'src/pages/SearchCEP';

export interface ICepsRepository {
  getCEP(cep: string): Promise<CEP>
}
