import Sidebar from '@/components/Sidebar'
import MetricsContent from '@/components/MetricsContent'

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <MetricsContent />
    </div>
  )
}
