'use client'

import React from 'react'

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Mend AI</h1>
          <p className="mb-4 text-lg">
            Mend is a modern AI companion  is here when you need someone to talk to—even if it’s just to get your thoughts out.
          </p>

          <p className="mb-4 text-lg">
            It helps you reflect, check in with yourself, and feel a little more in control of your day.
          </p>

          <p className="mb-4 text-lg">
            Think of it as a gentle companion between therapy sessions or during hard moments.
          </p>

          <p className="mb-4 text-lg">
            Built with care, it’s private, supportive, and always ready to listen.
          </p>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>AI-powered journaling and reflection prompts</li>
            <li>Emotion tracking and visualization</li>
            <li>Guided CBT-based exercises</li>
            <li>Mood check-ins and goal reminders</li>
            <li>Secure, anonymous usage</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
