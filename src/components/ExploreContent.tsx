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

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-7xl mx-auto p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Explore Workflows</h1>
          <p className="text-gray-600">
            Discover and configure automated workflows for your development pipeline
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search workflows..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Filter Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Integration Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Integration
              </label>
              <select
                value={selectedIntegration}
                onChange={(e) => setSelectedIntegration(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent capitalize"
              >
                <option value="all">All Integrations</option>
                {integrations.map(integration => (
                  <option key={integration} value={integration} className="capitalize">
                    {integration}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Trigger Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Trigger Type
              </label>
              <select
                value={selectedTrigger}
                onChange={(e) => setSelectedTrigger(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent capitalize"
              >
                <option value="all">All Triggers</option>
                {triggerTypes.map(trigger => (
                  <option key={trigger} value={trigger} className="capitalize">
                    {trigger}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredWorkflows.length} of {workflows.length} workflows
          </div>
        </div>

        {/* Workflow Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorkflows.map(workflow => (
            <div
              key={workflow.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 p-6 flex flex-col"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="text-3xl">{workflow.icon}</div>
                <div className="flex gap-2">
                  <span className={`px-2 py-1 rounded-md text-xs font-medium border capitalize ${getIntegrationColor(workflow.integration)}`}>
                    {workflow.integration}
                  </span>
                </div>
              </div>

              {/* Card Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {workflow.name}
              </h3>

              {/* Card Description */}
              <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-3">
                {workflow.description}
              </p>

              {/* Card Metadata */}
              <div className="space-y-2 mb-4">
                {/* Category Badge */}
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded-md text-xs font-medium ${getCategoryColor(workflow.category)}`}>
                    {workflow.category}
                  </span>
                </div>

                {/* Trigger Info */}
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    {getTriggerIcon(workflow.triggerType)}
                    <span className="capitalize">{workflow.triggerType}</span>
                  </span>
                </div>

                {/* Outcome */}
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Outcome:</span> {workflow.outcome}
                </div>

                {/* Requires Approval Badge */}
                {workflow.requiresApproval && (
                  <div className="flex items-center gap-1 text-xs text-orange-600">
                    <AlertCircle className="w-3 h-3" />
                    <span>Requires Approval</span>
                  </div>
                )}
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-gray-200">
                <button className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                  Configure Workflow
                </button>
              </div>
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
