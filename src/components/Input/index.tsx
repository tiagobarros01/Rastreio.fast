import React, { useCallback } from 'react';
import { Props } from 'react-input-mask';

import { Input } from './style';

export const CEPInput: React.FC<Partial<Props>> = ({
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
      {...rest}
      mask="99999-999"
      value={value}
      onChange={handleChange}
      placeholder="Ex.: 09090-090"
    />
  );
};
