import React from 'react'
import Sidebar from "../shared/Sidebar"

export default function Dashboard() {
  return (
    <div className="flex bg-gray-800 h-screen ">
      <Sidebar />
      <main className="ml-64 p-8 flex-1">
        {/* Your main dashboard content goes here */}
        <h2>Welcome to your Dashboard</h2>
      </main>
    </div>
  )
}
