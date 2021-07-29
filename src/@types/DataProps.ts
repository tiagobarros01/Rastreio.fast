export type UnityTrack = {
  data: string;
  descricao: string;
  hora: string;
  status?: string;
  unidade: {
    cidade: string;
    local: string;
    tipounidade: string;
    uf: string;
    endereco: {
      bairro: string;
      localidade: string;
      logradouro: string;
    }
  }
  length: number;
}

type TrackObject = {
  evento: UnityTrack[]
  categoria: string;
}

export type DataProps = {
  objeto: TrackObject[]
  message: string;
}
