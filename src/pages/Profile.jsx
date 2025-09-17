import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Profile(){
  const [form, setForm] = useState({
    name: 'Sualiha',
    email: 'sualiha@example.com',
    password: ''
  })

  const onChange = e => setForm({...form, [e.target.name]: e.target.value})
  const onSubmit = e => {
    e.preventDefault()
    alert('Profile saved (mock)')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl bg-white p-8 rounded-2xl shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6 text-indigo-700">Profile Settings</h2>
      <form onSubmit={onSubmit} className="space-y-5">
        <div>
          <label className="block text-sm text-gray-600">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Password</label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={onChange}
            placeholder="••••••"
            className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"
          />
        </div>
        <div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-lg shadow-md"
          >
            Save Changes
          </motion.button>
        </div>
      </form>
    </motion.div>
  )
}
