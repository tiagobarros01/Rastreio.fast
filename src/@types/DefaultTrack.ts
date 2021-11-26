export interface DefaultTrack {
  objeto: typeObject[];
  pesquisa: string;
  quantidade: string;
  resultado: string;
  versao: string;
}

export interface typeObject {
  categoria: string;
  evento: Event[];
  nome: string;
  numero: string;
  sigla: string;
}

export interface Event {
  cepDestino: string;
  criacao: string;
  data: string;
  dataPostagem: string;
  descricao: string;
  diasUteis: string;
  hora: string;
  prazoGuarda: string;
  recebedor?: unknown;
  status: string;
  tipo: string;
  unidade: Unit;
  detalheOEC?: Details;
  destino?: Destiny[];
  detalhe?: string;
}

export interface Destiny {
  bairro: string;
  cidade: string;
  codigo: string;
  endereco: Address;
  local: string;
  uf: string;
}

export interface Address {
  bairro: string;
  cep: string;
  codigo: string;
  latitude?: string;
  localidade: string;
  logradouro: string;
  longitude?: string;
  numero: string;
  uf: string;
  complemento?: string;
}

export interface Details {
  carteiro: string;
  distrito: string;
  lista: string;
  unidade: string;
}

export interface Unit {
  cidade: string;
  codigo: string;
  endereco: Address;
  local: string;
  sto: string;
  tipounidade: string;
  uf: string;
}
