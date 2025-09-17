import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js'
import { motion } from 'framer-motion'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

const summary = [
  { title: 'Total Projects', value: 12, color: 'from-indigo-500 to-purple-500' },
  { title: 'Earnings (YTD)', value: '$24,500', color: 'from-pink-500 to-red-500' },
  { title: 'Tasks Due', value: 4, color: 'from-green-500 to-teal-500' },
]

const earningsData = {
  labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug'],
  datasets: [{
    label: 'Earnings',
    data: [1200,1500,2000,1800,2400,2000,2300,2200],
    backgroundColor: 'rgba(99, 102, 241, 0.7)',
  }]
}

const recentActivity = [
  'Sent invoice to Beta Ltd.',
  'Completed milestone for Project X',
  'Client meeting — Acme Co.',
]

export default function Overview(){
  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {summary.map((s,i) => (
          <motion.div
            key={s.title}
            whileHover={{ scale: 1.05 }}
            className={`bg-gradient-to-r ${s.color} text-white p-6 rounded-2xl shadow-lg`}
          >
            <div className="text-sm">{s.title}</div>
            <div className="text-3xl font-extrabold mt-2">{s.value}</div>
          </motion.div>
        ))}
      </div>

      {/* Chart + Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg"
        >
          <h3 className="font-semibold mb-3 text-indigo-600">Monthly Earnings</h3>
          <div style={{height: '260px'}}>
            <Bar data={earningsData} />
          </div>
        </motion.div>

        {/* Activity */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-white p-6 rounded-xl shadow-lg"
        >
          <h3 className="font-semibold mb-3 text-indigo-600">Recent Activity</h3>
          <ul className="space-y-3 text-sm">
            {recentActivity.map((r,i) => (
              <li key={i} className="p-3 rounded-lg hover:bg-indigo-50 transition">{r}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  )
}
