'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-12 space-y-24">
      {/* Hero Section */}
      <motion.section
        className="text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h1 className="text-5xl font-bold mb-4">Mend AI </h1>
        <p className="text-lg text-gray-700">
          Your private, always-there mental health companion.
        </p>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-semibold mb-4">About Mend AI</h2>

        <p className="mb-4 text-lg">
          Sometimes you just need to let it out—no judgment, no pressure. That’s what Therapy AI is for.
        </p>
        <p className="mb-4 text-lg">
          It listens when no one else is around, helps you untangle your thoughts, and reminds you that you’re not alone.
        </p>
        <p className="mb-4 text-lg">
          Whether you're feeling overwhelmed, stuck, or just need a safe space, it's here—day or night.
        </p>
        <p className="mb-4 text-lg">
          Built with empathy and privacy at its core, Therapy AI is support that never leaves your side.
        </p>

        <h3 className="text-2xl font-semibold mt-10 mb-4">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-800">
          <li>AI-powered journaling and reflection prompts</li>
          <li>Emotion tracking and visualization</li>
          <li>Guided CBT-based exercises</li>
          <li>Mood check-ins and goal reminders</li>
          <li>Secure, anonymous usage</li>
        </ul>
      </motion.section>
    </main>
  );
}
