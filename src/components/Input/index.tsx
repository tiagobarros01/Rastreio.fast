import React, { InputHTMLAttributes } from 'react';

import { Input } from './style';

export const CEPInput: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => (
  <Input {...props} placeholder="Ex.: 09090-090" />
);
