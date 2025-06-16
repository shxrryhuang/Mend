'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HiringPage() {
  return (
    <main className="min-h-screen px-6 py-24 bg-gradient-to-b from-white to-green-100 text-gray-900 space-y-20">
      {/* Hero Section */}
      <motion.section
        className="text-center max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h1 className="text-4xl font text-teal-700 mb-6">Seeking to provide additional support?</h1>
        <p className="text-lg text-gray-700">
          We're on a mission to make mental health support accessible, personal, and AI-powered. If you’re passionate about tech that helps people feel better, we’d love to hear from you.
        </p>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="text-center max-w-xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl font-semibold mb-4"></h2>
        <p className="text-gray-700 mb-6">
         Drop us a line at{' '}
          <a href="mailto:careers@mendai.app" className="text-teal-600 underline">
            careers@mendai.app
          </a>
          .
        </p>
        <a
          href="mailto:careers@mendai.app"
          className="inline-block px-6 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition"
        >
          Apply Now
        </a>
      </motion.section>
    </main>
  );
}
