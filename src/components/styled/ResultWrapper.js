import styled from 'styled-components';

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: ${
    props => props.reverse ? 'row-reverse' : 'row'
  };
  flex-wrap: wrap;
`;

export default ResultWrapper;