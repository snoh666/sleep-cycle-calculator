import React from 'react';
import styled from 'styled-components';
import { AreaChart, Area, XAxis } from 'recharts';

const Chart = ({ data }) => {
  return (
    <ChartWrapper>
      <AreaChart
        width={window.innerWidth}
        height={150}
        data={data}
        margin={{ left: 30, right: 30, top: 30 }}
      >
        <defs>
          <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#1e3799' stopOpacity={1} />
            <stop offset='95%' stopColor='#6a89cc' stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type='monotone'
          dataKey='uv'
          stroke='#8884d8'
          fillOpacity={0.8}
          fill='url(#colorUv)'
        />
        <XAxis dataKey='name' />
      </AreaChart>
    </ChartWrapper>
  );
};

export default Chart;

const ChartWrapper = styled.div`
  font-size: 0.9rem;
`;
