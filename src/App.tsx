import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MetricCard from './components/MetricCard';
import Chart from './components/Chart';
import { SidebarItem, ChartData } from './types';
import './App.css';

const App: React.FC = () => {
  const sidebarItems: SidebarItem[] = [
    { id: '1', label: 'Dashboard', active: true, icon: '📊' },
    { id: '2', label: 'Analytics', icon: '📈' },
    { id: '3', label: 'Users', icon: '👥' },
    { id: '4', label: 'Products', icon: '📦' },
    { id: '5', label: 'Orders', icon: '🛒' },
    { id: '6', label: 'Settings', icon: '⚙️' },
  ];

  const chartData: ChartData[] = [
    { label: 'Jan', value: 45 },
    { label: 'Feb', value: 52 },
    { label: 'Mar', value: 48 },
    { label: 'Apr', value: 61 },
    { label: 'May', value: 55 },
    { label: 'Jun', value: 67 },
  ];

  const revenueData: ChartData[] = [
    { label: 'Q1', value: 12500 },
    { label: 'Q2', value: 15800 },
    { label: 'Q3', value: 18200 },
    { label: 'Q4', value: 21400 },
  ];

  return (
    <div className="app">
      <Header />
      <div className="app-layout">
        <Sidebar items={sidebarItems} />
        <main className="main-content">
          <div className="dashboard-header">
            <h1 className="dashboard-title">Dashboard Overview</h1>
            <p className="dashboard-subtitle">Welcome to your dashboard</p>
          </div>
          
          <div className="metrics-grid">
            <MetricCard
              title="Total Revenue"
              value="$45,231"
              change="+20.1%"
              isPositive={true}
              icon="💰"
            />
            <MetricCard
              title="Active Users"
              value="2,345"
              change="+12.5%"
              isPositive={true}
              icon="👤"
            />
            <MetricCard
              title="Orders"
              value="1,234"
              change="-3.2%"
              isPositive={false}
              icon="📋"
            />
            <MetricCard
              title="Conversion Rate"
              value="3.24%"
              change="+0.8%"
              isPositive={true}
              icon="🎯"
            />
          </div>

          <div className="charts-grid">
            <div className="chart-wrapper">
              <Chart title="Monthly Sales" data={chartData} type="bar" />
            </div>
            <div className="chart-wrapper">
              <Chart title="Quarterly Revenue" data={revenueData} type="bar" />
            </div>
          </div>

          <div className="additional-content">
            <div className="content-card">
              <h3 className="content-title">Recent Activity</h3>
              <div className="activity-list">
                <div className="activity-item">
                  <span className="activity-icon">🔔</span>
                  <div className="activity-content">
                    <p className="activity-text">New order received from Customer #1234</p>
                    <span className="activity-time">2 minutes ago</span>
                  </div>
                </div>
                <div className="activity-item">
                  <span className="activity-icon">📊</span>
                  <div className="activity-content">
                    <p className="activity-text">Monthly report generated</p>
                    <span className="activity-time">1 hour ago</span>
                  </div>
                </div>
                <div className="activity-item">
                  <span className="activity-icon">👤</span>
                  <div className="activity-content">
                    <p className="activity-text">New user registered</p>
                    <span className="activity-time">3 hours ago</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="content-card">
              <h3 className="content-title">Quick Stats</h3>
              <div className="stats-list">
                <div className="stat-item">
                  <span className="stat-label">Total Customers</span>
                  <span className="stat-value">12,345</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Active Products</span>
                  <span className="stat-value">234</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Pending Orders</span>
                  <span className="stat-value">56</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Support Tickets</span>
                  <span className="stat-value">12</span>
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