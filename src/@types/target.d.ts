/* eslint-disable react/no-typos */
import 'react';

declare module 'react' {
  export interface EventTarget {
    name: string;
    value: string;
  }
}
