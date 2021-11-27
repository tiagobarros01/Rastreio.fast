export interface DefaultTrack {
  objeto: Objeto[];
  pesquisa: string;
  quantidade: string;
  resultado: string;
  versao: string;
}

interface Objeto {
  categoria: string;
  evento: Evento[];
  nome: string;
  numero: string;
  sigla: string;
}

interface Evento {
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
  postagem: Postagem;
  unidade: Unit;
  detalheOEC: Detalhes;
  destino?: Destino[];
  detalhe?: string;
}

interface Postagem {
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

interface Destino {
  bairro: string;
  cidade: string;
  codigo: string;
  endereco: Endereco;
  local: string;
  uf: string;
}

interface Endereco {
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

interface Detalhes {
  carteiro: string;
  distrito: string;
  lista: string;
  unidade: string;
}

interface Unit {
  cidade: string;
  codigo: string;
  endereco: Endereco;
  local: string;
  sto: string;
  tipounidade: string;
  uf: string;
}
