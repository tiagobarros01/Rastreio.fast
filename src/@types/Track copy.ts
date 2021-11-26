export interface Track {
  object: typeObject[];
  search: string;
  quantity: string;
  result: string;
  version: string;
}

export interface typeObject {
  category: string;
  event: Event[];
  name: string;
  number: string;
  initials: string;
}

export interface Event {
  zipCodeDestination: string;
  creation: string;
  date: string;
  postDate: string;
  description: string;
  workingDays: string;
  hour: string;
  termGuard: string;
  receiver?: unknown;
  status: string;
  type: string;
  unit: Unit;
  OECDetails?: Details;
  destination?: Destiny[];
  details?: string;
}

export interface Destiny {
  neighborhood: string;
  city: string;
  code: string;
  address: Address;
  locale: string;
  uf: string;
}

export interface Address {
  neighborhood: string;
  zipCode: string;
  code: string;
  latitude?: string;
  localidade: string;
  longitude?: string;
  publicPlace: string;
  number: string;
  uf: string;
  complement?: string;
}

export interface Details {
  postman: string;
  district: string;
  list: string;
  unit: string;
}

export interface Unit {
  city: string;
  code: string;
  address: Address;
  local: string;
  sto: string;
  unitType: string;
  uf: string;
}
