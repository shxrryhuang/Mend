'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HomePage() {
  return (
<main className="min-h-screen bg-gradient-to-b from-white-100 to-green-200 text-gray-900 px-6 py-12 space-y-24">
      {/* Hero Section */}
      <motion.section
        className="text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
    <h1 className="text-5xl font-bold text-teal-700 mb-4">Mend AI </h1>  
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
        <h2 className="text-3xl font-semibold text-teal-600 mb-4">start your customized self-discovery journey today 🌱 </h2>

        <p className="mb-4 text-lg">
          Sometimes you just need to let it out—no judgment, no pressure. That’s what Mend AI is for.
        </p>
        <p className="mb-4 text-lg">
          It listens when no one else is around, helps you untangle your thoughts, and reminds you that you’re not alone.
        </p>
        <p className="mb-4 text-lg">
          Whether you're feeling overwhelmed, stuck, or just need a safe space, it's here—day or night.
        </p>
        <p className="mb-4 text-lg">
          Built with empathy and privacy at its core, Mend AI is support that never leaves your side.
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

        {/* Why Mend AI Section */}
        <motion.section
        className="max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        >
        <h2 className="text-3xl font-semibold mb-10 text-center">Why Mend AI?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Box 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Always Available</h3>
            <p className="text-gray-700">
                No waitlists. Mend AI gives you a space to reflect and feel supported anytime—day or night.
            </p>
            </div>

            {/* Box 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2"> Emotionally Grounding</h3>
            <p className="text-gray-700">
                Personalized prompts and mood check-ins help you understand what you're feeling—and why.
            </p>
            </div>

            {/* Box 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Safe & Private</h3>
            <p className="text-gray-700">
                Built with privacy in mind, Mend AI ensures your thoughts stay secure and judgment-free.
            </p>
            </div>

            {/* Box 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">It Gets to Know You</h3>
            <p className="text-gray-700">
                The more you share, the more Mend AI learns how to support you—offering reflections that feel thoughtful, not robotic.
            </p>
            </div>

            {/* Box 5 */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2"> Work Life Balance</h3>
            <p className="text-gray-700">
                Helps to manage work and life tasks simultaneously depending on your needs.
            </p>
            </div>

            {/* Box 6*/}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Offers Real Therapy Services</h3>
            <p className="text-gray-700">
                Allows users to chat with each other anonymously and with real-time professionals
            </p>
            </div>
        </div>
        </motion.section>

        {/* Why Mend AI Section */}
        <motion.section
        className="max-w-3xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        >
        <p className="mb-4 text-lg text-center">
            Finding support shouldn’t depend on availability or affordability. Mend AI is designed to fill in the gaps—providing a private, 24/7 space to process thoughts, build emotional awareness, and feel heard.
        </p>

        <p className="mb-4 text-lg text-center">
            Whether you're in therapy, between sessions, or just need a moment to reflect, Mend AI offers personalized prompts, mood tracking, and compassionate guidance to help you feel more in control—one day at a time.
        </p>

        <p className="mb-4 text-lg text-center">
            It's not about replacing human connection. It's about making sure you always have a safe, supportive place to turn when you need it most.
        </p>
        <p className="mb-4 text-lg text-center">
            Join today and start your journey towards better mental health.
        </p>

        <Link
        href="/signup"
        className="inline-block mt-6 px-6 py-3 bg-teal-600 text-white text-sm font-medium rounded-full hover:bg-teal-700 transition"
        >
        Get Started For Free
        </Link>

        </motion.section>

        {/* ✅ Footer */}
        <footer className="bg-white/60 mt-20 py-6 text-center text-sm text-gray-600 rounded-t-xl shadow-inner">
          <p>© {new Date().getFullYear()} Mend AI. All rights reserved.</p>
          <p className="mt-1 text-xs">Made with 💚 for your peace of mind.</p>
        </footer>
    </main>
  );
}
