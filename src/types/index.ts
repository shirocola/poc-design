export interface DashboardData {
  title: string;
  value: string | number;
  change?: string;
  isPositive?: boolean;
}

export interface ChartData {
  label: string;
  value: number;
}

export interface MetricCardProps {
  title: string;
  value: string | number;
  change?: string;
  isPositive?: boolean;
  icon?: React.ReactNode;
}

export interface SidebarItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
}