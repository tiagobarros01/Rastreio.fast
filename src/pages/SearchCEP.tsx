/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';

import { DataCEPProps } from '../@types/DataCEPProps';
import { DataCEP } from '../components/DataCEP';
import { CEPInput } from '../components/Input';
import { Loader } from '../components/Loader';
import { useTheme } from '../hooks/useTheme';
import { cepAPI } from '../services/api';
import { Container, Title, CEPContainer } from '../styles/pages/SearchCEP';
import { useToast } from '../utils/useToast';

type DataProps = {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  localidade: string;
  logradouro: string;
  uf: string;

  erro?: boolean;
}

export default function SearchCEP(): JSX.Element {
  const { theme } = useTheme();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [CEPData, setCEPData] = useState<DataCEPProps | null>(null);
  const [CEPCode, setCEPCode] = useState<string>('');

  async function handleSearchCEP(cep: string): Promise<void> {
    setIsLoading(true);

    try {
      const { data } = await cepAPI.get<DataProps>(`${cep}/json/`);

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
  }

  return (
    <Container>
      {CEPData === null && !isLoading ? (
        <>
          <Title>
            <h1>
              Search
              <span>CEP</span>
            </h1>
          </Title>
          <CEPContainer>
            <CEPInput
              value={CEPCode}
              onChange={(event) => setCEPCode(event.target.value)}
              required
            />
            <button type="button" onClick={() => handleSearchCEP(CEPCode)}>
              Search
            </button>
          </CEPContainer>
        </>
      ) : CEPData === null && isLoading ? <Loader /> : (
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
  );
}
