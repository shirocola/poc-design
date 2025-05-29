import React from 'react';
import { ChartData } from '../types';
import './Chart.css';

interface ChartProps {
  title: string;
  data: ChartData[];
  type?: 'bar' | 'line';
}

const Chart: React.FC<ChartProps> = ({ title, data, type = 'bar' }) => {
  const maxValue = Math.max(...data.map(item => item.value));

  return (
    <div className="chart-container">
      <h3 className="chart-title">{title}</h3>
      <div className="chart">
        {type === 'bar' && (
          <div className="bar-chart">
            {data.map((item, index) => (
              <div key={index} className="bar-item">
                <div 
                  className="bar" 
                  style={{ height: `${(item.value / maxValue) * 100}%` }}
                  title={`${item.label}: ${item.value}`}
                />
                <span className="bar-label">{item.label}</span>
              </div>
            ))}
          </div>
        )}
        {type === 'line' && (
          <div className="line-chart">
            <div className="line-chart-placeholder">
              <span>Line Chart: {data.length} data points</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chart;