import ActivityChart from './ActivityChart'
import AgentStatsTable from './AgentStatsTable'

export default function MetricsContent() {
  return (
    <div>
      <h1 className="text-xl font-semibold text-gray-900">Metrics</h1>
      <div className="flex-v items-center gap-4 mb-4">
        <ActivityChart />
        <AgentStatsTable />
      </div>
    </div>
  )
}

