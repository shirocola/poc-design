import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dashboard title', () => {
  render(<App />);
  const dashboardElement = screen.getByText(/Dashboard Overview/i);
  expect(dashboardElement).toBeInTheDocument();
});

test('renders metric cards', () => {
  render(<App />);
  const revenueCard = screen.getByText(/Total Revenue/i);
  const usersCard = screen.getByText(/Active Users/i);
  const ordersCard = screen.getAllByText(/Orders/i)[0]; // Get the first match (metric card)
  const conversionCard = screen.getByText(/Conversion Rate/i);
  
  expect(revenueCard).toBeInTheDocument();
  expect(usersCard).toBeInTheDocument();
  expect(ordersCard).toBeInTheDocument();
  expect(conversionCard).toBeInTheDocument();
});

test('renders charts', () => {
  render(<App />);
  const monthlySalesChart = screen.getByText(/Monthly Sales/i);
  const quarterlyRevenueChart = screen.getByText(/Quarterly Revenue/i);
  
  expect(monthlySalesChart).toBeInTheDocument();
  expect(quarterlyRevenueChart).toBeInTheDocument();
});

test('renders activity section', () => {
  render(<App />);
  const activitySection = screen.getByText(/Recent Activity/i);
  const quickStatsSection = screen.getByText(/Quick Stats/i);
  
  expect(activitySection).toBeInTheDocument();
  expect(quickStatsSection).toBeInTheDocument();
});