import { User } from './User';

export type StoreContextData = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};
