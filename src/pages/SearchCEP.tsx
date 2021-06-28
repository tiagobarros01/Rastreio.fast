/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';

import { DataCEPProps } from '../@types/DataCEPProps';
import { DataCEP } from '../components/DataCEP';
import { CEPInput } from '../components/Input';
import { Loader } from '../components/Loader';
import { cepAPI } from '../services/api';
import { Container, Title, CEPContainer } from '../styles/pages/SearchCEP';

type DataProps = {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  localidade: string;
  logradouro: string;
  uf: string;
}

export default function SearchCEP(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [CEPData, setCEPData] = useState<DataCEPProps | null>(null);
  const [CEPCode, setCEPCode] = useState<string>('');

  console.log(isLoading);

  async function handleSearchCEP(cep: string): Promise<void> {
    setIsLoading(true);

    try {
      const { data } = await cepAPI.get<DataProps>(`${cep}/json/`);

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
