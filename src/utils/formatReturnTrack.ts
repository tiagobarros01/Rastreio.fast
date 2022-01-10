import type { DefaultTrack } from 'src/@types/DefaultTrack';
import type {
  Track, Event,
} from 'src/@types/Track';

export const formatReturnTrack = (track: DefaultTrack): Track => {
  const objectEvents = track.eventos.map((event) => {
    const eventFormatted: Event = {
      date: event.data,
      hour: event.hora,
      locale: event.local,
      status: event.status,
      subStatus: event.subStatus,
    };

    return eventFormatted;
  });

  const formattedTrack: Track = {
    events: objectEvents,
    amount: track.quantidade,
    code: track.codigo,
    host: track.host,
    last: track.ultimo,
    service: track.servico,
    time: track.time,
  };

  return formattedTrack;
};
