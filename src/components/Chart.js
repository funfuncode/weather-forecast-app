import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const chart = (props) => {

  const data = props.tempData || props.pressData || props.humidData;

  const average = (data) => {
    return data.reduce( (total, current) => {return total + current}, 0) / data.length;
  }

  return (
    <div>
    <Sparklines data={data} width={300} height={100}>
      <SparklinesLine style={{ stroke: props.color, strokeWidth: "1", fill: "none" }}/>
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
    <div className="text-center">{average(data)}{props.units}</div>
    </div>
  );
}

export default chart;
