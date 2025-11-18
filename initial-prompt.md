
Create a Next.js metrics dashboard page with the following exact layout:

OVERALL LAYOUT:
- Two-column layout: fixed sidebar (left) + main content area (right)
- Clean, minimal design with light gray/white color scheme
- Sans-serif font (likely Inter or similar)

LEFT SIDEBAR (~200px width):
- Light gray background (#F7F7F7 or similar)
- Top section:
  - "Personal" text with icon and dropdown arrow
  - Black "+ New Task" button (full width, rounded corners)
- Navigation menu items (icon + label):
  - Home
  - Explore (compass icon)
  - Inbox (inbox icon)
  - Workflows (workflow icon)
  - Metrics (chart icon) - ACTIVE STATE with darker text
  - Integrations (puzzle piece icon)
- Bottom section (fixed to bottom):
  - Invite people
  - Billing
  - Documentation

MAIN CONTENT AREA:
Header: "Metrics" (large, bold, ~32px)

CARD 1 - Activity Chart:
- Use recharts
- White background, rounded corners, subtle shadow
- Padding: ~24-32px
- Title: "Activity (Last 14 Days)" (bold, ~20px)
- Subtitle: "Total runs per day from Nov 4 to Nov 17" (gray text, ~14px)
- Bar chart:
  - Y-axis: 0 to 4, increments of 1
  - X-axis: Dates from Nov 4 to Nov 17
  - Bars in purple/lavender color (#A78BFA or similar)
  - Stacked bars showing activity on Nov 12, 13, 14, 17
  - Chart height: ~300px
- Legend below chart:
  - Two items with color squares: "continuedev/update-changelog" and "continuedev/github-pr-agent"

CARD 2 - Agent Statistics Table:
- Same card styling as above
- Positioned below Activity card with ~24px gap
- Title: "Agent Statistics" (bold, ~20px)
- Three-column table:
  - Column headers (gray text): "Agent Slug" | "Total Runs" | "PR Status Breakdown"
  - Row 1: "continuedev/update-changelog" | "4" | Yellow progress bar (100% filled) with "4" label
  - Row 2: "continuedev/github-pr-agent" | "1" | Yellow progress bar (100% filled) with "1" label
- Progress bars: bright yellow (#FDE047 or similar), rounded, full width of column

TECHNICAL REQUIREMENTS:
- Use Tailwind CSS for styling
- Implement the chart using Recharts library
- Make responsive (sidebar collapses on mobile)
- Use TypeScript
- Component-based architecture (Sidebar, MetricsCard, BarChart, StatsTable components)
- Mock data for the metrics

COLORS:
- Sidebar background: #F7F7F7
- Active nav item: darker gray/black
- Purple bars: #A78BFA
- Yellow bars: #FDE047
- Card backgrounds: white
- Text: black for headings, #6B7280 for secondary text