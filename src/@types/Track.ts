export interface Event {
  status: string;
  locale: string;
  date: string;
  hour: string;
  subStatus: string[];
}
export interface Track {
  code: string;
  host: string;
  events: Event[];
  time: number;
  amount: number;
  service: string;
  last: Date;
}
