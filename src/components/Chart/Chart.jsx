import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
	const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
	let totalMaximum = 0;
	dataPointsValues.forEach((expense) => {
		totalMaximum += expense;
	});
	return (
		<div className='chart'>
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={totalMaximum}
					label={dataPoint.label}
				/>
			))}
		</div>
	);
};

export default Chart;
