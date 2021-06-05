import { FiCheckCircle } from 'react-icons/fi';
import styled from 'styled-components';

export const PackageContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 20vh);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PackagesHistory = styled.div`
  h1 {
    display: flex;
    align-items: center;
  }

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
`;

export const CheckIcon = styled(FiCheckCircle)`
  color: ${(props) => props.theme.colors.green};
  margin-left: 1rem;
`;

export const LineHistoryContainer = styled.div`
  width: 85%;
  height: 3rem;
  margin-top: 3rem;

  position: relative;
`;

export const LineHistory = styled.div`
  height: 0.3rem;

  background: ${(props) => props.theme.colors.yellow};
`;

export const InfoContainer = styled.div`
  margin-top: 1rem;

  overflow-y: scroll;
  overflow-x: hidden;

  height: 20rem;

  display: flex;

  background: ${(props) => props.theme.colors.primary};
  filter: brightness(1.2);


  div {
    padding: .5rem;
    border-radius: 10px;
  }
`;
