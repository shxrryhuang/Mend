'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Document, Packer, Paragraph, TextRun } from 'docx';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function JournalPage() {
  const [input, setInput] = useState('');
  const [folders, setFolders] = useState({});
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
      const newDate = data.date || new Date().toISOString().split('T')[0];
      const existingTasks = folders[newDate] || [];

      setFolders({
        ...folders,
        [newDate]: [...existingTasks, ...data.todos],
      });
      setDate(newDate);
      setInput('');
    } catch (err) {
      console.error('Failed to parse task:', err);
      setError(err.message || 'Unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const exportFolder = async (folderDate) => {
    const tasks = folders[folderDate];
  
    const paragraphs = tasks.map((task, index) => {
      return new Paragraph({
        children: [
          new TextRun({ text: `Task ${index + 1}: ${task.task}`, bold: true }),
          new TextRun({ text: `\nTime: ${task.time}` }),
          new TextRun({ text: `\nCategory: ${task.category}` }),
          new TextRun({ text: `\nPriority: ${task.priority}` }),
          new TextRun({ text: `\n\n` }),
        ],
      });
    });
  
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [new TextRun({ text: `Tasks for ${folderDate}`, bold: true, size: 28 })],
            }),
            ...paragraphs,
          ],
        },
      ],
    });
  
    const blob = await Packer.toBlob(doc);
    const url = URL.createObjectURL(blob);
  
    const link = document.createElement('a');
    link.href = url;
    link.download = `tasks-${folderDate}.docx`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
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

        {error && <p className="text-red-600 mb-4">{error}</p>}

        {Object.keys(folders).sort((a, b) => b.localeCompare(a)).map((folderDate) => (
          <div key={folderDate} className="mb-10 text-left">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-teal-800">Tasks for {folderDate}</h2>
              <button
                onClick={() => exportFolder(folderDate)}
                className="text-sm bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded"
              >
                Export
              </button>
            </div>
            <ul className="space-y-4 mt-4">
              {folders[folderDate].map((task, idx) => (
                <li key={idx} className="bg-white p-4 rounded shadow">
                  <p><strong>Task:</strong> {task.task}</p>
                  <p><strong>Time:</strong> {task.time}</p>
                  <p><strong>Category:</strong> {task.category}</p>
                  <p><strong>Priority:</strong> {task.priority}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.section>
    </main>
  );
}
