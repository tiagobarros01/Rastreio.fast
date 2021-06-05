import React from 'react';

import { DataProps } from '../../types/DataProps';

export function DataTrack({
  cidade, dataHora, descricao, uf,
}: DataProps) {
  return (
    <div>
      {cidade ? (
        <div>
          <h3>
            <strong>City/Country: </strong>
          </h3>
          <p>{cidade}</p>
        </div>
      ) : (
        <div>
          <h3>
            <strong>City/Country: </strong>
          </h3>
          <p>There&apos;s no information ❗</p>
        </div>
      )}

      {uf ? (
        <div>
          <h3>
            <strong>State: </strong>
          </h3>
          <p>{uf}</p>
        </div>
      ) : (
        <div>
          <h3>
            <strong>State: </strong>
          </h3>
          <p>There&apos;s no information ❗</p>
        </div>
      )}
      {dataHora ? (
        <div>
          <h3>
            <strong>Date-Hour: </strong>
          </h3>
          <p>{dataHora}</p>
        </div>
      ) : (
        <div>
          <h3>
            <strong>Date-Hour: </strong>
          </h3>
          <p>There&apos;s no information ❗</p>
        </div>
      )}
      {descricao ? (
        <div>
          <h3>
            <strong>Description: </strong>
          </h3>
          <p>{descricao}</p>
        </div>
      ) : (
        <div>
          <h3>
            <strong>Description: </strong>
          </h3>
          <p>There&apos;s no information ❗</p>
        </div>
      )}
    </div>
  );
}
