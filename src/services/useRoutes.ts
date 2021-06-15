import history from './history';

export function useRoutes(route: string): void {
  return history.push(route);
}
