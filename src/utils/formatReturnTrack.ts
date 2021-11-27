import type { DefaultTrack } from '../@types/DefaultTrack';
import type {
  Track, typeObject, Event, Destiny,
 } from '../@types/Track';

export const formatReturnTrack = (track: DefaultTrack): Track => {
  const trackingObject = track.objeto.map((object) => {
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
    quantity: track.quantidade,
    result: track.resultado,
    version: track.versao,
    search: track.pesquisa,
  };

  return formattedTrack;
};
