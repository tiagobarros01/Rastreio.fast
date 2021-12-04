import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Container, StackIcon, ListContainer, List,
} from './style';

export const NavigationMobile = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  return (
    <Container onClick={() => setIsVisible((prevState) => !prevState)}>
      <StackIcon size={32} />

      {isVisible && (
        <ListContainer>
          <List>
            <li>
              <button
                type="button"
                onClick={() => navigate('/integrations')}
                onKeyPress={() => navigate('/integrations')}
              >
                Integrações
              </button>
            </li>

            <li>
              <button
                type="button"
                onClick={() => navigate('/searchcep')}
                onKeyPress={() => navigate('/searchcep')}
              >
                Busca CEP
              </button>
            </li>
          </List>
        </ListContainer>
      )}
    </Container>
  );
};
