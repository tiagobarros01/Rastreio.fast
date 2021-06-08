import history from './history';

export function useRoutes(route: string) {
  return history.push(route);
}
