'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, TooltipProps } from 'recharts'
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent'

const CustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    const total = payload.reduce((sum, entry) => sum + (entry.value as number || 0), 0)
    
    return (
      <div className="bg-white rounded-xl p-4 shadow-xl border border-gray-100">
        <p className="font-semibold text-sm text-black mb-3">
          {label} · Total: {total}
        </p>
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center justify-between gap-8 mb-2 last:mb-0">
            <div className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-sm" 
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-gray-500 text-sm">
                {entry.name}
              </span>
            </div>
            <span className="font-semibold text-black text-sm">
              {entry.value}
            </span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

const data = [
  { date: 'Nov 4', 'continuedev/update-changelog': 0, 'continuedev/github-pr-agent': 0 },
  { date: 'Nov 5', 'continuedev/update-changelog': 0, 'continuedev/github-pr-agent': 0 },
  { date: 'Nov 6', 'continuedev/update-changelog': 0, 'continuedev/github-pr-agent': 0 },
  { date: 'Nov 7', 'continuedev/update-changelog': 0, 'continuedev/github-pr-agent': 0 },
  { date: 'Nov 8', 'continuedev/update-changelog': 0, 'continuedev/github-pr-agent': 0 },
  { date: 'Nov 9', 'continuedev/update-changelog': 0, 'continuedev/github-pr-agent': 0 },
  { date: 'Nov 10', 'continuedev/update-changelog': 0, 'continuedev/github-pr-agent': 0 },
  { date: 'Nov 11', 'continuedev/update-changelog': 0, 'continuedev/github-pr-agent': 0 },
  { date: 'Nov 12', 'continuedev/update-changelog': 2, 'continuedev/github-pr-agent': 0 },
  { date: 'Nov 13', 'continuedev/update-changelog': 1, 'continuedev/github-pr-agent': 0 },
  { date: 'Nov 14', 'continuedev/update-changelog': 0, 'continuedev/github-pr-agent': 1 },
  { date: 'Nov 15', 'continuedev/update-changelog': 0, 'continuedev/github-pr-agent': 0 },
  { date: 'Nov 16', 'continuedev/update-changelog': 0, 'continuedev/github-pr-agent': 0 },
  { date: 'Nov 17', 'continuedev/update-changelog': 1, 'continuedev/github-pr-agent': 0 },
]

const ActivityChart = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
      <h2 className="font-semibold mb-1">Activity (Last 14 Days)</h2>
      <p className="text-sm text-gray-500 mb-6">Total runs per day from Nov 4 to Nov 17</p>
      
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 10 }}>
          <defs>
            <style>{`
              .recharts-tooltip-cursor {
                fill: #f3f4f6;
              }
              .recharts-legend-item-text {
                color: #9CA3AF !important;
              }
              .recharts-legend-item .recharts-surface {
                border-radius: 2px;
              }
            `}</style>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="date" 
            tick={{ fontSize: 12, fill: '#6B7280' }}
            axisLine={{ stroke: '#e5e7eb' }}
            tickLine={{ stroke: '#e5e7eb' }}
          />
          <YAxis 
            domain={[0, 4]}
            ticks={[0, 1, 2, 3, 4]}
            tick={{ fontSize: 12, fill: '#6B7280' }}
            axisLine={{ stroke: '#e5e7eb' }}
            tickLine={{ stroke: '#e5e7eb' }}
          />
          <Tooltip 
            content={<CustomTooltip />}
            cursor={{ fill: '#f3f4f6' }}
          />
          <Legend 
            wrapperStyle={{ 
              paddingTop: '20px',
              fontSize: '13px'
            }}
            iconType="square"
            iconSize={10}
          />
          <Bar 
            dataKey="continuedev/update-changelog" 
            stackId="a" 
            fill="#A78BFA" 
            radius={[4, 4, 0, 0]}
          />
          <Bar 
            dataKey="continuedev/github-pr-agent" 
            stackId="a" 
            fill="#C4B5FD" 
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ActivityChart
