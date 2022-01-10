export interface Evento {
  status: string;
  local: string;
  data: string;
  hora: string;
  subStatus: string[];
}
export interface DefaultTrack {
  codigo: string;
  host: string;
  eventos: Evento[];
  time: number;
  quantidade: number;
  servico: string;
  ultimo: Date;
}
