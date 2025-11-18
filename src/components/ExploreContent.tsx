'use client'

import { useState, useMemo } from 'react'
import { Search, Clock, Webhook, RefreshCw, AlertCircle } from 'lucide-react'
import workflowsData from '../../mock-data/workflows.json'

interface Workflow {
  id: string
  integration: string
  name: string
  description: string
  triggerType: string
  triggerDetails: string | { webhook?: string; cron?: string }
  category: string
  outcome: string
  icon: string
  requiresApproval?: boolean
  action?: string
  metrics?: string
}

const ExploreContent = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedIntegration, setSelectedIntegration] = useState<string>('all')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedTrigger, setSelectedTrigger] = useState<string>('all')

  const workflows: Workflow[] = workflowsData.workflows

  // Get unique values for filters
  const integrations = useMemo(() => {
    return Array.from(new Set(workflows.map(w => w.integration)))
  }, [])

  const categories = useMemo(() => {
    return Array.from(new Set(workflows.map(w => w.category)))
  }, [])

  const triggerTypes = useMemo(() => {
    return Array.from(new Set(workflows.map(w => w.triggerType)))
  }, [])

  // Filter workflows
  const filteredWorkflows = useMemo(() => {
    return workflows.filter(workflow => {
      const matchesSearch = workflow.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           workflow.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           workflow.integration.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesIntegration = selectedIntegration === 'all' || workflow.integration === selectedIntegration
      const matchesCategory = selectedCategory === 'all' || workflow.category === selectedCategory
      const matchesTrigger = selectedTrigger === 'all' || workflow.triggerType === selectedTrigger

      return matchesSearch && matchesIntegration && matchesCategory && matchesTrigger
    })
  }, [workflows, searchQuery, selectedIntegration, selectedCategory, selectedTrigger])

  const getTriggerIcon = (triggerType: string) => {
    switch (triggerType) {
      case 'webhook':
        return <Webhook className="w-4 h-4" />
      case 'cron':
        return <Clock className="w-4 h-4" />
      case 'hybrid':
        return <RefreshCw className="w-4 h-4" />
      default:
        return <AlertCircle className="w-4 h-4" />
    }
  }

  const getIntegrationColor = (integration: string) => {
    switch (integration) {
      case 'sentry':
        return 'bg-purple-100 text-purple-700 border-purple-200'
      case 'snyk':
        return 'bg-blue-100 text-blue-700 border-blue-200'
      case 'github':
        return 'bg-gray-100 text-gray-700 border-gray-200'
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Immediate Response':
        return 'bg-red-50 text-red-700'
      case 'Scheduled Analysis':
        return 'bg-green-50 text-green-700'
      case 'Triage':
        return 'bg-yellow-50 text-yellow-700'
      default:
        return 'bg-gray-50 text-gray-700'
    }
  }

  const getTriggerBadgeStyle = (triggerType: string) => {
    switch (triggerType) {
      case 'cron':
        return 'bg-[#ece9fc] text-[#4f3eaa]'
      case 'webhook':
        return 'bg-[#fce9e9] text-[#aa3e3e]'
      case 'hybrid':
        return 'bg-[#e9f5fc] text-[#3e6eaa]'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  const getTriggerLabel = (triggerType: string) => {
    switch (triggerType) {
      case 'cron':
        return 'Scheduled'
      case 'webhook':
        return 'Immediate'
      case 'hybrid':
        return 'Hybrid'
      default:
        return triggerType
    }
  }

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-7xl mx-auto p-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-xl font-semibold text-gray-900 mb-1">Try these Workflows</h1>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
          {/* Search Bar */}
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search workflows..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Filter Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Integration Filter */}
            <select
              value={selectedIntegration}
              onChange={(e) => setSelectedIntegration(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent capitalize"
            >
              <option value="all">All Integrations</option>
              {integrations.map(integration => (
                <option key={integration} value={integration} className="capitalize">
                  {integration}
                </option>
              ))}
            </select>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            {/* Trigger Type Filter */}
            <select
              value={selectedTrigger}
              onChange={(e) => setSelectedTrigger(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent capitalize"
            >
              <option value="all">All Triggers</option>
              {triggerTypes.map(trigger => (
                <option key={trigger} value={trigger} className="capitalize">
                  {trigger}
                </option>
              ))}
            </select>
          </div>

          {/* Results Count */}
          <div className="mt-3 text-xs text-gray-500">
            {filteredWorkflows.length} {filteredWorkflows.length === 1 ? 'workflow' : 'workflows'}
          </div>
        </div>

        {/* Workflow Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredWorkflows.map(workflow => (
            <div
              key={workflow.id}
              className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 border-gray-200 hover:shadow-md transition-shadow cursor-pointer relative"
            >
              {/* Trigger Badge - Top Right */}
              <div className="absolute top-4 right-4">
                <div className={`inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-[11px] px-2 py-0.5 ${getTriggerBadgeStyle(workflow.triggerType)}`}>
                  {getTriggerLabel(workflow.triggerType)}
                </div>
              </div>

              {/* Icon Circle */}
              <div className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center mb-3">
                {getTriggerIcon(workflow.triggerType)}
              </div>

              {/* Card Title */}
              <h3 className="font-medium text-sm mb-2">
                {workflow.name}
              </h3>

              {/* Card Description */}
              <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                {workflow.description}
              </p>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredWorkflows.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No workflows found matching your filters</p>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedIntegration('all')
                setSelectedCategory('all')
                setSelectedTrigger('all')
              }}
              className="mt-4 px-4 py-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ExploreContent
