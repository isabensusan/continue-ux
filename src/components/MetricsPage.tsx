import ContentLayout from './ContentLayout'
import ActivityChart from './ActivityChart'
import AgentStatsTable from './AgentStatsTable'

const MetricsPage = () => {
  return (
    <ContentLayout title="Metrics">
      <ActivityChart />
      <AgentStatsTable />
    </ContentLayout>
  )
}

export default MetricsPage
