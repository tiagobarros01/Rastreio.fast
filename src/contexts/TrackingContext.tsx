import React, {
 createContext, useCallback, useMemo, useState, useEffect,
} from 'react';

import axios from 'axios';
import { trackAPI } from 'src/services/api';
import { v4 as uuidV4 } from 'uuid';

import type { DataProps } from '../@types/DataProps';
import type { DefaultTrack } from '../@types/DefaultTrack';
import type {
 Track, typeObject, Event, Destiny,
} from '../@types/Track';
import type { TrackingContextData } from '../@types/TrackingContextData';
import { DataTrack } from '../components/DataTrack/index';
import { usePersistedState } from '../hooks/usePersistedState';
import { useRoutes } from '../services/useRoutes';

const TrackingContext = createContext<TrackingContextData>(
  {} as TrackingContextData,
);

const TrackingProvider: React.FC = ({ children }) => {
  useEffect(() => {
    (async () => {
      const { data } = await trackAPI.post<DefaultTrack>('/rastreio', {
        code: 'OS076037093BR',
        type: 'LS',
      });

      const trackingObject = data.objeto.map((object) => {
        const eventObject = object.evento.map((event) => {
          const destinyObject = event?.destino?.map((destiny) => {
            const destinyObjectFormatted: Destiny = {
              address: {
                code: destiny.endereco.codigo,
                localidade: destiny.endereco.localidade,
                neighborhood: destiny.endereco.bairro,
                number: destiny.endereco.numero,
                publicPlace: destiny.endereco.logradouro,
                uf: destiny.endereco.uf,
                zipCode: destiny.endereco.cep,
                complement: destiny.endereco?.complemento,
                latitude: destiny.endereco?.latitude,
                longitude: destiny.endereco?.longitude,
              },
              city: destiny.cidade,
              code: destiny.codigo,
              locale: destiny.local,
              neighborhood: destiny.bairro,
              uf: destiny.uf,
            };

            return destinyObjectFormatted;
          });

          const eventObjectFormatted: Event = {
            creation: event.criacao,
            date: event.data,
            description: event.descricao,
            hour: event.hora,
            postDate: event.dataPostagem,
            status: event.status,
            termGuard: event.prazoGuarda,
            type: event.tipo,
            unit: {
              address: {
                code: event.unidade.endereco.codigo,
                localidade: event.unidade.endereco.localidade,
                neighborhood: event.unidade.endereco.bairro,
                number: event.unidade.endereco.numero,
                publicPlace: event.unidade.endereco.logradouro,
                uf: event.unidade.endereco.uf,
                zipCode: event.unidade.endereco.cep,
                complement: event.unidade.endereco?.complemento,
                latitude: event.unidade.endereco?.latitude,
                longitude: event.unidade.endereco?.longitude,
              },
              city: event.unidade.cidade,
              code: event.unidade.codigo,
              local: event.unidade.local,
              sto: event.unidade.sto,
              uf: event.unidade.uf,
              unitType: event.unidade.tipounidade,
            },
            workingDays: event.diasUteis,
            zipCodeDestination: event.cepDestino,
            OECDetails: {
              district: event?.detalheOEC?.distrito,
              list: event?.detalheOEC?.lista,
              postman: event?.detalheOEC?.carteiro,
              unit: event?.detalheOEC?.unidade,
            },
            destination: destinyObject,
            details: event.detalhe,
            post: {
              zipCodeDestination: event?.postagem?.cepdestino,
              postDate: event?.postagem?.datapostagem,
              weight: event?.postagem?.peso,
              treatmentTerm: event?.postagem?.prazotratamento,
              volume: event?.postagem?.volume,
              ar: event?.postagem?.ar,
              mp: event?.postagem?.mp,
              dh: event?.postagem?.dh,
              dateScheduled: event?.postagem?.dataprogramada,
            },
            receiver: event.recebedor,
          };

          return eventObjectFormatted;
        });

        const typeObjectFormatted: typeObject = {
          category: object.categoria,
          event: eventObject,
          initials: object.sigla,
          name: object.nome,
          number: object.numero,
        };

        return typeObjectFormatted;
      });

      const formattedTrack: Track = {
        object: trackingObject,
        quantity: data.quantidade,
        result: data.resultado,
        version: data.versao,
        search: data.pesquisa,
      };

      console.log(formattedTrack);
    })();
  }, []);

  const [dataTrack, setDataTrack] = useState<string[] | null | JSX.Element[][]>(
    null,
  );
  const [trackCode, setTrackCode] = useState('');
  const [trackCodeList, setTrackCodeList] = usePersistedState<string[]>(
    '@Rastreio.fast:TrackCodeList',
    [],
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSetToList = useCallback(
    (prevState: string[], code: string): string[] => {
      const res = prevState.some((item) => item === code);

      if (!res) {
        return [...prevState, code];
      }
      return [...prevState];
    },
    [],
  );

  const getTrackingData = useCallback(async (code: string) => {
    setLoading(true);
    setDataTrack(null);
    const { data }: { data: DataProps } = await axios({
      method: 'post',
      url: 'https://correios.contrateumdev.com.br/api/rastreio',
      data: {
        code,
        type: 'LS',
      },
    });

    try {
      const res = data.objeto.map(({ evento }) => evento
      .map((event, index) => (
        <DataTrack
          key={uuidV4()}
          data={event.data}
          descricao={event.descricao}
          unidade={event.unidade}
          hora={event.hora}
          length={Number(evento.length - 1 === index)}
        />
      )));

      setDataTrack(res);

      useRoutes('/tracks');
      setTrackCode(code.toUpperCase());
      setLoading(false);
      setError(false);
    } catch (err) {
      setLoading(false);
      setError(true);
      setDataTrack(data.objeto.map(({ categoria }) => categoria));
      useRoutes('/error');

      setTimeout(() => {
        useRoutes('/');
      }, 6000);
    }
  }, []);

  const memoizedValue = useMemo<TrackingContextData>(
    () => ({
      trackCode,
      trackCodeList,
      dataTrack,
      loading,
      getTrackingData,
      error,
      setTrackCodeList,
      handleSetToList,
    }),
    [
      trackCode,
      trackCodeList,
      dataTrack,
      loading,
      setTrackCodeList,
      handleSetToList,
      error,
      getTrackingData,
    ],
  );

  return (
    <TrackingContext.Provider value={memoizedValue}>
      {children}
    </TrackingContext.Provider>
  );
};

export { TrackingContext, TrackingProvider };
