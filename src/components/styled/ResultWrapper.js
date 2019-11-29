import styled from 'styled-components';

const ResultWrapper = styled.div`
  max-width: 500px;
  display: flex;
  justify-content: space-around;
  flex-direction: ${
    props => props.reverse ? 'row-reverse' : 'row'
  };
  flex-wrap: wrap;
  @media (max-width: 768px) {
    width: 100%;
  }

`;

export default ResultWrapper;