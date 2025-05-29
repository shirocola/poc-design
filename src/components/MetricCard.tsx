import React from 'react';
import { MetricCardProps } from '../types';
import './MetricCard.css';

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, isPositive, icon }) => {
  return (
    <div className="metric-card">
      <div className="metric-card-header">
        <h3 className="metric-card-title">{title}</h3>
        {icon && <div className="metric-card-icon">{icon}</div>}
      </div>
      <div className="metric-card-content">
        <div className="metric-value">{value}</div>
        {change && (
          <div className={`metric-change ${isPositive ? 'positive' : 'negative'}`}>
            <span className="change-indicator">{isPositive ? '↗' : '↘'}</span>
            <span className="change-text">{change}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MetricCard;