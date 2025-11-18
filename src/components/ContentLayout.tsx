import { ReactNode } from 'react'




interface ContentLayoutProps {
  title: string
  children: ReactNode
  actions?: ReactNode
}

const ContentLayout = ({ title, children, actions }: ContentLayoutProps) => {
  return (
    <main className="flex-1 overflow-auto rounded-xl m-2 bg-white shadow-sm border-[0.5px] border-gray-200">
      <div className="p-3 sm:p-4 lg:p-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 mb-4">
            <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
          </div>
          {actions && <div>{actions}</div>}
        </div>
        <div className="space-y-6">
          {children}
        </div>
      </div>
    </main>
  )
}

export default ContentLayout
