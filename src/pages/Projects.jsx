import React, { useState } from 'react'
import { motion } from 'framer-motion'

// Initial mock projects
const initialProjects = [
  { id: 1, name: 'Website Redesign', status: 'In Progress', deadline: '2025-09-20' },
  { id: 2, name: 'Mobile App UI', status: 'Pending', deadline: '2025-10-05' },
  { id: 3, name: 'Analytics Dashboard', status: 'Completed', deadline: '2025-07-15' },
]

export default function Projects() {
  const [projects, setProjects] = useState(initialProjects)
  const [showModal, setShowModal] = useState(false)
  const [form, setForm] = useState({ name: "", status: "Pending", deadline: "" })

  // Handle add project
  const addProject = (e) => {
    e.preventDefault()
    const newProject = {
      id: projects.length + 1,
      ...form,
    }
    setProjects([...projects, newProject])
    setForm({ name: "", status: "Pending", deadline: "" })
    setShowModal(false)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-indigo-700">Projects</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg shadow-md hover:shadow-lg transition"
        >
          + New Project
        </motion.button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-indigo-50">
            <tr>
              <th className="p-3">Project</th>
              <th className="p-3">Status</th>
              <th className="p-3">Deadline</th>
            </tr>
          </thead>
          <tbody>
            {projects.map(p => (
              <motion.tr
                key={p.id}
                whileHover={{ scale: 1.01 }}
                className="border-t hover:bg-indigo-50"
              >
                <td className="p-3">{p.name}</td>
                <td className="p-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    p.status === 'Completed'
                      ? 'bg-green-100 text-green-800'
                      : p.status === 'In Progress'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {p.status}
                  </span>
                </td>
                <td className="p-3">{p.deadline}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-6 w-96 shadow-2xl"
          >
            <h3 className="text-xl font-bold mb-4 text-indigo-700">➕ Add New Project</h3>
            <form onSubmit={addProject} className="space-y-4">
              {/* Project Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
                <input
                  type="text"
                  placeholder="Enter project name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  required
                />
              </div>
              {/* Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  value={form.status}
                  onChange={(e) => setForm({ ...form, status: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                >
                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                </select>
              </div>
              {/* Deadline */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Deadline</label>
                <input
                  type="date"
                  value={form.deadline}
                  onChange={(e) => setForm({ ...form, deadline: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  required
                />
              </div>
              {/* Buttons */}
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md transition"
                >
                  Add Project
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  )
}
