import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const links = [
  { to: '/', label: 'Overview' },
  { to: '/projects', label: 'Projects' },
  { to: '/profile', label: 'Profile Settings' },
]

export default function Sidebar({ isOpen }) {
  return (
    <motion.aside
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 80 }}
      className="bg-white/80 backdrop-blur border-r w-64 p-4 hidden md:block shadow-lg"
    >
      <div className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-pink-500 text-transparent bg-clip-text mb-8">
        FreelanceAdmin
      </div>

      <nav className="space-y-3">
        {links.map(l => (
          <NavLink
            key={l.to}
            to={l.to}
            end
            className={({ isActive }) =>
              `block py-2 px-4 rounded-lg transition-colors duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md'
                  : 'text-gray-700 hover:bg-indigo-100'
              }`
            }
          >
            {l.label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-10 text-sm text-gray-500">© Freelance Client</div>
    </motion.aside>
  )
}
