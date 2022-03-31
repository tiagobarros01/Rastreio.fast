import React, { FormEvent, useState } from 'react';

import { ICEPProps } from 'src/@types/CEP';
import { Button } from 'src/components/Button';
import { CEPInput } from 'src/components/CEPInput';
import { DashboardBase } from 'src/components/DashboardBase';
import { DataCEP } from 'src/components/DataCEP';
import { useTheme } from 'src/contexts/Theme';
import { cepsRepository } from 'src/services/repositories/CepsRepository';
import { useToast } from 'src/utils/useToast';

import { Container, Title, CEPContainer } from './styles';

export type CEP = {
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
  const [CEPInputValue, setCEPInputValue] = useState('');

  const handleSearchCEP = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (CEPInputValue.length !== 8) {
      useToast({
        message: 'CEP Incompleto!',
        type: 'error',
        background: theme.title === 'light' ? '#353230' : '#ddd',
        color: theme.title === 'light' ? '#eee' : '#222',
      });

      return;
    }

    setIsLoading(true);

    try {
      const cep = await cepsRepository.getCEP(CEPInputValue);

      if (cep.erro) {
        useToast({
          message: 'CEP Inválido',
          type: 'error',
          background: theme.title === 'light' ? '#353230' : '#ddd',
          color: theme.title === 'light' ? '#eee' : '#222',
        });

        setIsLoading(false);

        return;
      }

      setCEPData({
        cep: cep.cep,
        neighborhood: cep.bairro,
        complement: cep.complemento,
        street: cep.logradouro,
        locale: cep.localidade,
        fu: cep.uf,
      });
    } catch (error) {
      console.debug(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DashboardBase>
      <Container>
        {!CEPData ? (
          <>
            <Title>
              <h1>
                Busca
                <span>CEP</span>
              </h1>
            </Title>

            <CEPContainer onSubmit={handleSearchCEP}>
              <CEPInput
                required
                value={CEPInputValue}
                onChange={(newValue) => setCEPInputValue(newValue.target.value)}
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
