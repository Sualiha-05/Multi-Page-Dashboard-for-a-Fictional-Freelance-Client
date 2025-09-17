import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const mockNotifications = [
  { id: 1, text: 'Proposal sent to Acme Co.', time: '2h' },
  { id: 2, text: 'Payment received: $1,200', time: '1d' },
  { id: 3, text: 'Task overdue: Design Review', time: '3d' },
]

export default function Header({ onMenu }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white/80 backdrop-blur border-b p-3 flex items-center justify-between md:pl-72 shadow-sm">
      {/* Left */}
      <div className="flex items-center gap-3">
        <button
          className="md:hidden p-2 rounded hover:bg-gray-200 transition"
          onClick={onMenu}
          aria-label="menu"
        >
          ☰
        </button>
        <h1 className="text-xl font-bold text-indigo-700">Dashboard</h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setOpen(s => !s)}
            className="p-2 rounded-full hover:bg-indigo-100 transition relative"
          >
            🔔
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-80 bg-white border rounded-xl shadow-lg z-20"
              >
                <div className="p-3 border-b font-medium">Notifications</div>
                <ul className="p-2 max-h-60 overflow-y-auto">
                  {mockNotifications.map(n => (
                    <li
                      key={n.id}
                      className="p-2 hover:bg-gray-50 rounded transition"
                    >
                      <div className="text-sm">{n.text}</div>
                      <div className="text-xs text-gray-400">{n.time} ago</div>
                    </li>
                  ))}
                </ul>
                <div className="p-2 text-center text-sm text-indigo-600 hover:bg-indigo-50 rounded-b cursor-pointer">
                  View all
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Profile */}
        <Link
          to="/profile"
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-indigo-100 transition"
        >
          <motion.div
            className="w-9 h-9 rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 text-white flex items-center justify-center font-bold"
            whileHover={{ scale: 1.1 }}
          >
            SR
          </motion.div>
          <div className="hidden sm:block text-sm font-medium text-gray-700">
            Sualiha
          </div>
        </Link>
      </div>
    </header>
  )
}
