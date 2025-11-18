'use client'

interface AgentStat {
  slug: string
  totalRuns: number
  prStatus: number
}

const agentStats: AgentStat[] = [
  {
    slug: 'continuedev/update-changelog',
    totalRuns: 4,
    prStatus: 4,
  },
  {
    slug: 'continuedev/github-pr-agent',
    totalRuns: 1,
    prStatus: 1,
  },
]

const AgentStatsTable = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
      <h2 className="font-semibold mb-6">Agent Statistics</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-normal text-gray-500">Agent Slug</th>
              <th className="text-left py-3 px-4 text-sm font-normal text-gray-500">Total Runs</th>
              <th className="text-left py-3 px-4 text-sm font-normal text-gray-500">PR Status Breakdown</th>
            </tr>
          </thead>
          <tbody>
            {agentStats.map((stat, index) => (
              <tr key={stat.slug} className={index !== agentStats.length - 1 ? 'border-b border-gray-200' : ''}>
                <td className="py-4 px-4 text-sm font-mono">{stat.slug}</td>
                <td className="py-4 px-4 text-sm">{stat.totalRuns}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-yellow-bar h-8 rounded-md relative">
                      <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-gray-700">
                        {stat.prStatus}
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AgentStatsTable
