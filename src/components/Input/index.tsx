import React, { useCallback } from 'react';
import type { Props } from 'react-input-mask';

import { Input } from './style';

const onlyNumbers = (
  (str: string) => str.replace(/[^0-9]/g, ''));

export const CEPInput: React.FC<Partial<Props>> = ({
  value,
  onChange = () => null,
  ...rest
}) => {
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
    [onChange],
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
