import React, { useState } from 'react';

import { DataCEPProps } from '../@types/InfoCEPProps';
import { CEPInput } from '../components/Input/index';
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
  const [CEPData, setCEPData] = useState<DataCEPProps | null>(null);
  const [CEPCode, setCEPCode] = useState<string>('');

  async function handleSearchCEP(cep: string): Promise<void> {
    const { data } = await cepAPI.get<DataProps>(`${cep}/json/`);

    setCEPData({
      cep: data.cep,
      neighborhood: data.bairro,
      complement: data.complemento,
      street: data.logradouro,
      locale: data.localidade,
      fu: data.uf,
    });
  }

  return (
    <Container>
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
        <div>
          {CEPData?.cep}
          {CEPData?.fu}
          {CEPData?.street}
          {CEPData?.locale}
          {CEPData?.neighborhood}
        </div>
      </CEPContainer>
    </Container>
  );
}
