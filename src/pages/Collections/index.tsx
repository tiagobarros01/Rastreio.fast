import React from 'react';

import { DashboardBase } from 'src/components/DashboardBase';
import { Spinner } from 'src/components/Spinner';
import { useTheme } from 'src/contexts/Theme';
import { useTrack } from 'src/contexts/Tracking';
import { useToast } from 'src/utils/useToast';

import {
  Container,
  Title,
  ListContainer,
  TrashIcon,
  WithoutList,
  SpinnerContainer,
} from './styles';

export const Collections = (): JSX.Element => {
  const {
    trackCodeList, getTrackingData, setTrackCodeList, isLoading,
  } = useTrack();
  const { theme } = useTheme();

  const handleTrack = (code: string) => {
    getTrackingData(code);
  };

  const handleRemoveTrack = (code: string) => {
    setTrackCodeList((prevState) => prevState.filter((item) => item !== code));

    useToast({
      message: 'Removido da sua coleção',
      type: 'error',
      icon: '🗑️',
      duration: 2500,
      background: theme.title === 'light' ? '#353230' : '#ddd',
      color: theme.title === 'light' ? '#eee' : '#222',
    });
  };

  return (
    <DashboardBase>
      <Container>
        <Title>
          <h1>Salvos</h1>
        </Title>

        <ListContainer>
          {trackCodeList.length !== 0 ? (
            <ul>
              {trackCodeList.map((code, index) => (
                <li key={`CodeItem - ${index}`}>
                  <p>{index + 1}</p>

                  <button type="button" onClick={() => handleTrack(code)}>
                    {code}
                  </button>

                  {isLoading ? (
                    <SpinnerContainer>
                      <Spinner />
                    </SpinnerContainer>
                  ) : <TrashIcon onClick={() => handleRemoveTrack(code)} />}
                </li>
              ))}
            </ul>
          ) : (
            <WithoutList>
              <p>Você ainda não tem rastreios salvos</p>
            </WithoutList>
          )}
        </ListContainer>
      </Container>
    </DashboardBase>
  );
};
