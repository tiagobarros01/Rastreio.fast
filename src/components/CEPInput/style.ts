import InputMask from 'react-input-mask';

import styled from 'styled-components';

import { Input as InputBase } from 'src/components/Form/Input';

export const Input = styled(InputBase).attrs(() => ({
  as: InputMask,
}))``;
