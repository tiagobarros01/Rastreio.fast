import React, { FormEvent, useState } from 'react';

import { DataCEPProps } from '~/@types/DataCEPProps';
import { DataCEP } from '~/components/DataCEP';
import { CEPInput } from '~/components/Input';
import { Loader } from '~/components/Loader';
import { useTheme } from '~/hooks/useTheme';
import { cepAPI } from '~/services/api';
import { useToast } from '~/utils/useToast';

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
  const [CEPData, setCEPData] = useState<DataCEPProps | null>(null);
  const [CEPCode, setCEPCode] = useState('');

  const handleSearchCEP = async (cep: string): Promise<void> => {
    if (CEPCode.length !== 8) {
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
  };

  if (!CEPData && isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      {!CEPData && !isLoading ? (
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
              onChange={(event: FormEvent<HTMLInputElement>) => setCEPCode(event.target.value)}
              required
            />
            <button type="button" onClick={() => handleSearchCEP(CEPCode)}>
              Search
            </button>
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
  );
};
