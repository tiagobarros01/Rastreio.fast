import React, { InputHTMLAttributes, useCallback } from 'react';

import { Input } from './style';

export const CEPInput: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  value,
  onChange = () => null,
  ...rest
}) => {
  const onlyNumbers = useCallback(
    (str: string) => str.replace(/[^0-9]/g, ''),
    [],
  );

  const handleChange = useCallback(
    (event) => {
      onChange({
        ...event,
        target: {
          ...event.target,
          value: onlyNumbers(event.target.value),
        },
      });
    },
    [onChange, onlyNumbers],
  );
  return (
    <Input
      mask="99999-999"
      value={value}
      onChange={handleChange}
      placeholder="Ex.: 09090-090"
      {...rest}
    />
  );
};
