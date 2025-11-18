# Metrics Dashboard

A Next.js metrics dashboard page with a clean, minimal design featuring activity charts and agent statistics.

## Features

- **Two-column layout**: Fixed sidebar + main content area
- **Activity Chart**: Bar chart showing total runs per day over the last 14 days (using Recharts)
- **Agent Statistics Table**: Displays agent slugs, total runs, and PR status breakdown with progress bars
- **Responsive Design**: Sidebar collapses on mobile
- **TypeScript**: Fully typed components
- **Tailwind CSS**: Utility-first styling

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the dashboard.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with Inter font
│   ├── page.tsx         # Main page component
│   └── globals.css      # Global styles
└── components/
    ├── Sidebar.tsx          # Navigation sidebar
    ├── MetricsContent.tsx   # Main content wrapper
    ├── ActivityChart.tsx    # Activity bar chart component
    └── AgentStatsTable.tsx  # Agent statistics table component
```

## Technologies

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Recharts** - Chart visualization
- **Lucide React** - Icon library

## Color Palette

- Sidebar background: `#FFFFFF`
- Active nav item: Gray-100 background with gray-900 text
- Purple bars: `#A78BFA`
- Yellow bars: `#FDE047`
- Card backgrounds: White with border
- Text: Black for headings, `#6B7280` for secondary text
