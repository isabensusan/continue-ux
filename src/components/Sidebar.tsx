'use client'

import { usePathname } from 'next/navigation'
import { 
  Compass, 
  Inbox, 
  Workflow, 
  ChartLine, 
  Plug, 
  UserPlus, 
  CreditCard, 
  LifeBuoy,
  ChevronsUpDown,
  CircleUserRound,
  PanelLeft,
  Plus
} from 'lucide-react'

const Sidebar = () => {
  const pathname = usePathname()
  return (
    <div className="flex flex-col w-[213px]">
      {/* Header */}
      <div className="flex items-center justify-between h-[56px] px-4">
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <div className="min-w-0 flex-1">
            <button 
              className="inline-flex items-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 py-2 w-full max-w-[240px] justify-between border-0 shadow-none hover:bg-transparent bg-transparent hover:text-foreground focus:ring-0 focus:ring-offset-0 text-muted-foreground px-0"
              type="button"
            >
              <div className="flex items-center min-w-0 flex-1 overflow-hidden">
                <div className="flex items-center space-x-2">
                  <CircleUserRound className="w-4 h-4 text-gray-500" />
                  <span className="truncate hidden sm:inline text-gray-500">Personal</span>
                </div>
              </div>
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </button>
          </div>
        </div>
        <div className="flex gap-2 ml-2">
          <button 
            className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground w-[14px] h-[14px] p-0"
            title="Collapse sidebar"
          >
            <PanelLeft className="w-[14px] h-[14px] text-gray-500" />
          </button>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="relative overflow-hidden flex-1">
        <div className="h-full w-full rounded-[inherit] overflow-hidden overflow-y-auto">
          <div>
            <nav className="px-2 py-2 space-y-1">
              {/* New Task Button */}
              <button 
                className="inline-flex items-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-white border border-zinc-700 hover:border-zinc-600 w-full justify-center gap-0.5 p-1.5 h-auto font-normal text-sm bg-[#262626] text-white hover:bg-[#333333] rounded-lg"
                type="button"
              >
                <Plus className="w-5 h-5" />
                <span>New Task</span>
              </button>

              {/* Home Label */}
              <div className="flex items-center gap-2 pl-3 pr-2 py-1 pt-4">
                <p className="text-xs font-medium leading-4 text-gray-500">Home</p>
              </div>

              {/* Explore */}
              <a className="block" href="/explore">
                <button className={`inline-flex items-center whitespace-nowrap rounded-xl ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground w-full justify-start gap-2 px-2 py-1.5 h-auto text-sm ${pathname === '/explore' ? 'bg-gray-100 font-medium' : 'font-normal'}`}>
                  <span className={`w-4 h-4 flex items-center justify-center ${pathname === '/explore' ? 'text-gray-900' : 'text-gray-600'}`}>
                    <Compass className="w-4 h-4" />
                  </span>
                  <span className={pathname === '/explore' ? 'text-gray-900' : 'text-gray-700'}>Explore</span>
                </button>
              </a>

              {/* Inbox */}
              <a className="block" href="/inbox">
                <button className={`inline-flex items-center whitespace-nowrap rounded-xl ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground w-full justify-start gap-2 px-2 py-1.5 h-auto text-sm ${pathname === '/inbox' ? 'bg-gray-100 font-medium' : 'font-normal'}`}>
                  <span className={`w-4 h-4 flex items-center justify-center ${pathname === '/inbox' ? 'text-gray-900' : 'text-gray-600'}`}>
                    <Inbox className="w-4 h-4" />
                  </span>
                  <span className={pathname === '/inbox' ? 'text-gray-900' : 'text-gray-700'}>Inbox</span>
                </button>
              </a>

              {/* Workflows */}
              <a className="block" href="/workflows">
                <button className={`inline-flex items-center whitespace-nowrap rounded-xl ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground w-full justify-start gap-2 px-2 py-1.5 h-auto text-sm ${pathname === '/workflows' ? 'bg-gray-100 font-medium' : 'font-normal'}`}>
                  <span className={`w-4 h-4 flex items-center justify-center ${pathname === '/workflows' ? 'text-gray-900' : 'text-gray-600'}`}>
                    <Workflow className="w-4 h-4" />
                  </span>
                  <span className={pathname === '/workflows' ? 'text-gray-900' : 'text-gray-700'}>Workflows</span>
                </button>
              </a>

              {/* Metrics */}
              <a className="block" href="/metrics">
                <button className={`inline-flex items-center whitespace-nowrap rounded-xl ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground w-full justify-start gap-2 px-2 py-1.5 h-auto text-sm ${pathname === '/metrics' || pathname === '/' ? 'bg-gray-100 font-medium' : 'font-normal'}`}>
                  <span className={`w-4 h-4 flex items-center justify-center ${pathname === '/metrics' || pathname === '/' ? 'text-gray-900' : 'text-gray-600'}`}>
                    <ChartLine className="w-4 h-4" />
                  </span>
                  <span className={pathname === '/metrics' || pathname === '/' ? 'text-gray-900' : 'text-gray-700'}>Metrics</span>
                </button>
              </a>

              {/* Integrations */}
              <a className="block" href="/integrations">
                <button className={`inline-flex items-center whitespace-nowrap rounded-xl ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground w-full justify-start gap-2 px-2 py-1.5 h-auto text-sm ${pathname === '/integrations' ? 'bg-gray-100 font-medium' : 'font-normal'}`}>
                  <span className={`w-4 h-4 flex items-center justify-center ${pathname === '/integrations' ? 'text-gray-900' : 'text-gray-600'}`}>
                    <Plug className="w-4 h-4" />
                  </span>
                  <span className={pathname === '/integrations' ? 'text-gray-900' : 'text-gray-700'}>Integrations</span>
                </button>
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="p-2">
        {/* Invite people */}
        <a className="block" href="/organizations/new">
          <button 
            className="inline-flex items-center whitespace-nowrap rounded-xl ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground w-full justify-start gap-2 px-2 py-1.5 h-auto font-normal text-sm text-gray-500"
            title="Invite people"
          >
            <UserPlus className="w-4 h-4" />
            <span>Invite people</span>
          </button>
        </a>

        {/* Billing */}
        <a className="block" href="/settings/billing">
          <button 
            className="inline-flex items-center whitespace-nowrap rounded-xl ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground w-full justify-start gap-2 px-2 py-1.5 h-auto font-normal text-sm text-gray-500"
            title="Billing"
          >
            <CreditCard className="w-4 h-4" />
            <span>Billing</span>
          </button>
        </a>

        {/* Documentation */}
        <a 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block" 
          href="https://docs.continue.dev"
        >
          <button 
            className="inline-flex items-center whitespace-nowrap rounded-xl ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground w-full justify-start gap-2 px-2 py-1.5 h-auto font-normal text-sm text-gray-500"
            title="Documentation"
          >
            <LifeBuoy className="w-4 h-4 -translate-x-[2px]" />
            <span>Documentation</span>
          </button>
        </a>
      </div>
    </div>
  )
}

export default Sidebar
