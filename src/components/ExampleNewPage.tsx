import ContentLayout from './ContentLayout'

// Example of a new page using the ContentLayout
const ExampleNewPage = () => {
  return (
    <ContentLayout 
      title="Dashboard"
      actions={
        // Optional: Add action buttons in the header
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add New
        </button>
      }
    >
      {/* Add your page content here */}
      <div className="p-4 bg-gray-50 rounded-lg">
        <p className="text-gray-600">Your content goes here</p>
      </div>
      
      {/* You can add multiple sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">Section 1</h3>
          <p className="text-gray-600">Content</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">Section 2</h3>
          <p className="text-gray-600">Content</p>
        </div>
      </div>
    </ContentLayout>
  )
}

export default ExampleNewPage
