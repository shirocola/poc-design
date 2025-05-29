import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dashboard title', () => {
  render(<App />);
  const dashboardElement = screen.getByText(/Sales YTD Dashboard/i);
  expect(dashboardElement).toBeInTheDocument();
});

test('renders metric cards', () => {
  render(<App />);
  const revenueCard = screen.getByText(/YTD Revenue/i);
  const salesCard = screen.getByText(/YTD Sales/i);
  const averageOrderCard = screen.getByText(/Average Order Value/i);
  const conversionCard = screen.getByText(/Sales Conversion/i);
  
  expect(revenueCard).toBeInTheDocument();
  expect(salesCard).toBeInTheDocument();
  expect(averageOrderCard).toBeInTheDocument();
  expect(conversionCard).toBeInTheDocument();
});

test('renders charts', () => {
  render(<App />);
  const monthlySalesChart = screen.getByText(/Monthly Sales YTD/i);
  const quarterlyRevenueChart = screen.getByText(/Quarterly Revenue/i);
  
  expect(monthlySalesChart).toBeInTheDocument();
  expect(quarterlyRevenueChart).toBeInTheDocument();
});

test('renders activity section', () => {
  render(<App />);
  const activitySection = screen.getByText(/Recent Sales Activity/i);
  const salesMetricsSection = screen.getByText(/Sales Metrics/i);
  
  expect(activitySection).toBeInTheDocument();
  expect(salesMetricsSection).toBeInTheDocument();
});