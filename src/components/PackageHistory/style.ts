import styled from 'styled-components';

export const PackageContainer = styled.div`
  width: 100%;
  margin-top: 6rem;
`;

export const PackagesHistory = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
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

export const PointContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;

  position: absolute;
  top: -0.5rem;

  div {
    width: 1.2rem;
    height: 1.2rem;
    background: ${(props) => props.theme.colors.yellow};

    color: ${(props) => props.theme.colors.yellow};

    display: flex;
    align-items: center;
    justify-content: center;

    border: 3px solid ${(props) => props.theme.colors.text};

    border-radius: 50%;
  }
`;

export const InfoContainer = styled.div`
  margin-top: 1rem;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;
