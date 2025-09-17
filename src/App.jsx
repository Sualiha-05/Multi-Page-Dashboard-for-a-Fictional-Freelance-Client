import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Overview from './pages/Overview'
import Projects from './pages/Projects'
import Profile from './pages/Profile'

export default function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Layout */}
      <div className="flex-1 flex flex-col">
        <Header onMenu={() => setSidebarOpen(s => !s)} />

        <main className="p-4 md:p-6 transition-all duration-300">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}
