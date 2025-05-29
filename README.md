# Dashboard POC Design

A modern React TypeScript dashboard implementation with responsive design and interactive components.

## Features

- **Modern Layout**: Clean header, sidebar navigation, and main content area
- **Metrics Dashboard**: Key performance indicators with trend indicators
- **Data Visualization**: Interactive bar charts for sales and revenue data
- **Activity Feed**: Real-time notifications and updates
- **Responsive Design**: Mobile-friendly layout that adapts to different screen sizes
- **TypeScript**: Full type safety throughout the application
- **Component Architecture**: Reusable, well-structured React components

## Components

### Core Components
- `Header`: Navigation bar with user profile
- `Sidebar`: Navigation menu with icons and active states
- `MetricCard`: Reusable cards for displaying KPIs
- `Chart`: Data visualization component (bar charts)

### Layout Structure
```
App
├── Header
└── App Layout
    ├── Sidebar
    └── Main Content
        ├── Metrics Grid (4 cards)
        ├── Charts Grid (2 charts)
        └── Additional Content
            ├── Recent Activity
            └── Quick Stats
```

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shirocola/poc-design.git
cd poc-design
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the dashboard in your browser.

### Available Scripts

- `npm start`: Runs the app in development mode
- `npm run build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm run eject`: Ejects from Create React App (irreversible)

## Technology Stack

- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Type-safe JavaScript with enhanced developer experience
- **CSS3**: Modern styling with flexbox and grid layouts
- **Create React App**: Zero-configuration React setup

## Design Principles

### TypeScript Guidelines
- All components use proper TypeScript interfaces
- Functional components with React.FC typing
- Props interfaces defined for all components
- Type-safe event handlers and state management

### CSS Architecture
- Component-scoped CSS files
- Consistent color palette and spacing
- Responsive design patterns
- Hover states and smooth transitions

### Component Design
- Single responsibility principle
- Reusable and composable components
- Props-based customization
- Consistent naming conventions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Make your changes following the TypeScript and React guidelines
4. Commit your changes (`git commit -m 'Add new feature'`)
5. Push to the branch (`git push origin feature/new-feature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License.