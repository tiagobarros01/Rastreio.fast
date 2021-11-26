export interface DefaultTrack {
  objeto: typeObject[];
  pesquisa: string;
  quantidade: string;
  resultado: string;
  versao: string;
}

interface typeObject {
  categoria: string;
  evento: Event[];
  nome: string;
  numero: string;
  sigla: string;
}

interface Event {
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
  postagem?: Post;
  unidade: Unit;
  detalheOEC?: Details;
  destino?: Destiny[];
  detalhe?: string;
}

interface Post {
  ar: string;
  cepdestino: string;
  datapostagem: string;
  dataprogramada: string;
  dh: string;
  mp: string;
  peso: string;
  prazotratamento: string;
  volume: string;
}

interface Destiny {
  bairro: string;
  cidade: string;
  codigo: string;
  endereco: Address;
  local: string;
  uf: string;
}

interface Address {
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

interface Details {
  carteiro: string;
  distrito: string;
  lista: string;
  unidade: string;
}

interface Unit {
  cidade: string;
  codigo: string;
  endereco: Address;
  local: string;
  sto: string;
  tipounidade: string;
  uf: string;
}
