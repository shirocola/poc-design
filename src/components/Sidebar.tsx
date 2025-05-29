import React from 'react';
import { SidebarItem } from '../types';
import './Sidebar.css';

interface SidebarProps {
  items: SidebarItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <ul className="sidebar-menu">
          {items.map((item) => (
            <li key={item.id} className={`sidebar-item ${item.active ? 'active' : ''}`}>
              <a href="#" className="sidebar-link">
                {item.icon && <span className="sidebar-icon">{item.icon}</span>}
                <span className="sidebar-label">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;