'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function JournalPage() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  const handleAddTask = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/parse-task', {
        method: 'POST',
        body: JSON.stringify({ input }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Server Error: ${res.status} – ${errorText}`);
      }

      const data = await res.json();

      if (!data.todos || !Array.isArray(data.todos)) {
        throw new Error('Invalid response format');
      }

      setTasks([...tasks, ...data.todos]);
      setDate(data.date || '');
      setInput('');
    } catch (err) {
      console.error('Failed to parse task:', err);
      setError(err.message || 'Unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-8 bg-gradient-to-b from-white to-teal-100 text-gray-900">
      <motion.section
        className="max-w-2xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h1 className="text-4xl font-bold text-teal-700 mb-6">📝 Journal - AI To-Do List</h1>
        <p className="text-lg text-gray-700 mb-4">
          Describe what you need to do in plain language. We'll convert it into structured tasks.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g., finish report by 3pm"
            className="px-4 py-2 border rounded w-full sm:w-auto"
          />
          <button
            onClick={handleAddTask}
            disabled={loading}
            className="px-6 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
          >
            {loading ? 'Parsing...' : 'Add Task'}
          </button>
        </div>

        {error && (
          <div className="text-red-600 mb-4">
            <p>{error}</p>
          </div>
        )}

        {date && (
          <div className="mb-6 text-left">
            <h2 className="text-xl font-semibold text-teal-800">Tasks for {date}</h2>
          </div>
        )}

        <ul className="space-y-4">
          {tasks.map((task, idx) => (
            <li key={idx} className="bg-white p-4 rounded shadow text-left">
              <p><strong>Task:</strong> {task.task}</p>
              <p><strong>Time:</strong> {task.time}</p>
              <p><strong>Category:</strong> {task.category}</p>
              <p><strong>Priority:</strong> {task.priority}</p>
            </li>
          ))}
        </ul>
      </motion.section>
    </main>
  );
}
