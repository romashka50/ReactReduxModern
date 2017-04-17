import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import { sum, round } from 'lodash';

function avarage(data) {
  return round(sum(data) / data.length);
}

export default (props) => {
  const { color = 'blue', data = [], width = 80, height = 20, units = '' } = props;

  return (
    <div>
      <Sparklines width={width} height={height} data={data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type="mean" />
      </Sparklines>
      <div>{avarage(data)} ({ units })</div>
    </div>
  );
};
