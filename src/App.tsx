import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MetricCard from './components/MetricCard';
import Chart from './components/Chart';
import { ChartData, SidebarItem } from './types';
import './App.css';

const App: React.FC = () => {
  const sidebarItems: SidebarItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊', active: true },
    { id: 'sales', label: 'Sales', icon: '💰' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
    { id: 'customers', label: 'Customers', icon: '👥' },
    { id: 'products', label: 'Products', icon: '📦' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  const chartData: ChartData[] = [
    { label: 'Jan', value: 485000 },
    { label: 'Feb', value: 432000 },
    { label: 'Mar', value: 578000 },
    { label: 'Apr', value: 654000 },
    { label: 'May', value: 612000 },
    { label: 'Jun', value: 689000 },
    { label: 'Jul', value: 742000 },
    { label: 'Aug', value: 698000 },
    { label: 'Sep', value: 756000 },
    { label: 'Oct', value: 821000 },
    { label: 'Nov', value: 789000 },
    { label: 'Dec', value: 892000 },
  ];

  const revenueData: ChartData[] = [
    { label: 'Q1', value: 1495000 },
    { label: 'Q2', value: 1955000 },
    { label: 'Q3', value: 2196000 },
    { label: 'Q4', value: 2502000 },
  ];

  return (
    <div className="app">
      <Header />
      <div className="app-layout">
        <Sidebar items={sidebarItems} />
        <main className="main-content">
          <div className="dashboard-header">
            <h1 className="dashboard-title">Sales YTD Dashboard</h1>
            <p className="dashboard-subtitle">Year-to-date sales performance overview</p>
          </div>
          
          <div className="metrics-grid">
            <MetricCard
              title="YTD Revenue"
              value="$2,847,500"
              change="+18.3%"
              isPositive={true}
              icon="💰"
            />
            <MetricCard
              title="YTD Sales"
              value="5,234"
              change="+12.7%"
              isPositive={true}
              icon="📈"
            />
            <MetricCard
              title="Average Order Value"
              value="$544"
              change="+5.2%"
              isPositive={true}
              icon="🎯"
            />
            <MetricCard
              title="Sales Conversion"
              value="3.8%"
              change="-0.3%"
              isPositive={false}
              icon="⚡"
            />
          </div>

          <div className="charts-grid">
            <div className="chart-wrapper">
              <Chart title="Monthly Sales YTD" data={chartData} type="bar" />
            </div>
            <div className="chart-wrapper">
              <Chart title="Quarterly Revenue" data={revenueData} type="bar" />
            </div>
          </div>

          <div className="additional-content">
            <div className="content-card">
              <h3 className="content-title">Recent Sales Activity</h3>
              <div className="activity-list">
                <div className="activity-item">
                  <span className="activity-icon">💰</span>
                  <div className="activity-content">
                    <p className="activity-text">Large order completed - $45,230</p>
                    <span className="activity-time">2 minutes ago</span>
                  </div>
                </div>
                <div className="activity-item">
                  <span className="activity-icon">📊</span>
                  <div className="activity-content">
                    <p className="activity-text">Monthly sales target achieved</p>
                    <span className="activity-time">1 hour ago</span>
                  </div>
                </div>
                <div className="activity-item">
                  <span className="activity-icon">🎯</span>
                  <div className="activity-content">
                    <p className="activity-text">New sales lead qualified</p>
                    <span className="activity-time">3 hours ago</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="content-card">
              <h3 className="content-title">Sales Metrics</h3>
              <div className="stats-list">
                <div className="stat-item">
                  <span className="stat-label">Active Deals</span>
                  <span className="stat-value">42</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Pipeline Value</span>
                  <span className="stat-value">$1.2M</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">This Month</span>
                  <span className="stat-value">$684K</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Target Progress</span>
                  <span className="stat-value">87%</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;