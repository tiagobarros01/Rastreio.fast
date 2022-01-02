import React, { FormEvent, useState, useRef } from 'react';

import { ICEPProps } from 'src/@types/CEP';
import { Button } from 'src/components/Button';
import { DashboardBase } from 'src/components/DashboardBase';
import { DataCEP } from 'src/components/DataCEP';
import { CEPInput } from 'src/components/Input';
import { useTheme } from 'src/contexts/Theme';
import { cepAPI } from 'src/services/api';
import { useToast } from 'src/utils/useToast';

import { Container, Title, CEPContainer } from './styles';

type DataProps = {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  localidade: string;
  logradouro: string;
  uf: string;

  erro?: boolean;
};

export const SearchCEP = (): JSX.Element => {
  const { theme } = useTheme();

  const [isLoading, setIsLoading] = useState(false);
  const [CEPData, setCEPData] = useState<ICEPProps | null>(null);

  const codeInputRef = useRef<HTMLInputElement>(null);

  const handleSearchCEP = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    if (codeInputRef.current?.value.length !== 8) {
      useToast({
        message: 'Fill the field(s)!',
        type: 'error',
        background: theme.title === 'light' ? '#353230' : '#ddd',
        color: theme.title === 'light' ? '#eee' : '#222',
      });
      return;
    }

    setIsLoading(true);

    try {
      const { data } = await cepAPI.get<DataProps>(`${codeInputRef.current?.value}/json/`);

      console.log(data.erro);

      if (data.erro) {
        useToast({
          message: 'Invalid CEP',
          type: 'error',
          background: theme.title === 'light' ? '#353230' : '#ddd',
          color: theme.title === 'light' ? '#eee' : '#222',
        });
        setIsLoading(false);

        return;
      }

      setCEPData({
        cep: data.cep,
        neighborhood: data.bairro,
        complement: data.complemento,
        street: data.logradouro,
        locale: data.localidade,
        fu: data.uf,
      });

      setIsLoading(false);
    } catch (error) {
      console.debug(error);
      setIsLoading(false);
    }
  };

  return (
    <DashboardBase>
      <Container>
        {!CEPData && !isLoading ? (
          <>
            <Title>
              <h1>
                Busca
                <span>CEP</span>
              </h1>
            </Title>

            <CEPContainer onSubmit={handleSearchCEP}>
              <input
                required
                ref={codeInputRef}
              />

              <Button isLoading={isLoading} type="submit">
                Buscar
              </Button>
            </CEPContainer>
          </>
        ) : (
          <DataCEP
            cep={CEPData?.cep}
            fu={CEPData?.fu}
            street={CEPData?.street}
            complement={CEPData?.complement}
            locale={CEPData?.locale}
            neighborhood={CEPData?.neighborhood}
          />
        )}
      </Container>
    </DashboardBase>
  );
};
