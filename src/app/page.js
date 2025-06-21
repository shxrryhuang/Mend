'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HomePage() {
  const [users, setUsers] = useState(0);
  const [journals, setJournals] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

  useEffect(() => {
    const animate = (target, setter, max) => {
      let count = 0;
      const interval = setInterval(() => {
        count++;
        setter(count);
        if (count >= max) clearInterval(interval);
      }, 20);
    };
    animate(users, setUsers, 10000);
    animate(journals, setJournals, 450000);
    animate(satisfaction, setSatisfaction, 97);
  }, []);

  return (
<main className="min-h-screen bg-gradient-to-b from-white-100 to-teal-200 text-gray-900 px-6 py-12 space-y-24">
      {/* Hero Section */}
      <motion.section
        className="text-center flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h1 className="text-5xl font-bold text-teal-700 mb-4">Mend AI</h1>  
        <p className="text-lg text-gray-700 mb-4">
          Your private, always-there mental health companion.
        </p>
        <a
          href="/downloads/mendAI.dmg"
          download
          className="inline-block mt-4 px-6 py-3 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-shadow shadow-md"
        >
          Download for Mac
        </a>
      </motion.section>

      {/* Key features Section */}
      <motion.section
        className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        {/* Key Features List */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold text-teal-600 mb-6">
            Start your customized self-discovery journey today 🌱
          </h2>

          <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-800">
            <li>AI-powered journaling and reflection prompts</li>
            <li>Emotion tracking and visualization</li>
            <li>Guided CBT-based exercises</li>
            <li>Mood check-ins and goal reminders</li>
            <li>Secure, anonymous usage</li>
          </ul>
        </div>

        {/* 2x2 Image Grid */}
        <div className="grid grid-cols-2 gap-4 md:w-1/2">
          {/* Image 1: journaling.gif */}
          <div className="w-full aspect-square rounded-xl overflow-hidden shadow-md">
            <img src="/animations/journaling.gif" alt="Journaling" className="w-full h-full object-cover" />
          </div>
          {/* Image 2: emotions.gif */}
          <div className="w-full aspect-square rounded-xl overflow-hidden shadow-md">
            <img src="/animations/emotions.gif" alt="Emotion tracking" className="w-full h-full object-cover" />
          </div>
          {/* Image 3: growth.gif */}
          <div className="w-full aspect-square rounded-xl overflow-hidden shadow-md">
            <img src="/animations/growth.gif" alt="Growth" className="w-full h-full object-cover" />
          </div>
          {/* Image 4: privacy.gif */}
          <div className="w-full aspect-square rounded-xl overflow-hidden shadow-md">
            <img src="/animations/privacy.gif" alt="Secure" className="w-full h-full object-cover" />
          </div>
        </div>
      </motion.section>
      
        {/* Why Mend AI */}
        <motion.section
          className="max-w-5xl mx-auto py-20 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-semibold mb-10 text-center">Why Mend AI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              ['Always Available', 'No waitlists. Mend AI gives you a space to reflect and feel supported anytime—day or night.'],
              ['Emotionally Grounding', 'Personalized prompts and mood check-ins help you understand what you’re feeling—and why.'],
              ['Safe & Private', 'Built with privacy in mind, Mend AI ensures your thoughts stay secure and judgment-free.'],
              ['It Gets to Know You', 'The more you share, the more Mend AI learns how to support you—offering thoughtful reflections.'],
              ['Work-Life Balance', 'Helps you manage work and personal challenges without burnout.'],
              ['Real Therapy Support', 'Chat with real professionals or peers anonymously when you need more than journaling.'],
            ].map(([title, desc], idx) => (
              <div
                key={idx}
                className="bg-white/50 border-2 border-green-900 rounded-2xl p-6 shadow-md hover:shadow-lg transition backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold text-center text-green-900 mb-2">{title}</h3>
                <p className="text-gray-800 text-center text-gray-700 mb-4">{desc}</p>
              </div>
            ))}
          </div>
        </motion.section>


      {/* FAQ Section */}
      <motion.section
        className="max-w-4xl mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="bg-white p-4 rounded shadow">
            <summary className="cursor-pointer font-medium">Is Mend AI a replacement for therapy?</summary>
            <p className="mt-2 text-gray-600">
              No. Mend AI is a supportive companion that complements real therapy. It offers emotional support, not diagnosis or clinical treatment.
            </p>
          </details>

          <details className="bg-white p-4 rounded shadow">
            <summary className="cursor-pointer font-medium">Is my data private and secure?</summary>
            <p className="mt-2 text-gray-600">
              Yes. We use end-to-end encryption & follow strict privacy standards to keep your data secure and confidential.
            </p>
          </details>

          <details className="bg-white p-4 rounded shadow">
            <summary className="cursor-pointer font-medium">Can I talk to real therapists?</summary>
            <p className="mt-2 text-gray-600">
              Yes. We’re building optional integrations to connect you with licensed professionals when you're ready.
            </p>
          </details>

          <details className="bg-white p-4 rounded shadow">
            <summary className="cursor-pointer font-medium">Is it free to use?</summary>
            <p className="mt-2 text-gray-600">
              Yes, core features are free. We also offer premium features to enhance your experience and support ongoing development.
            </p>
          </details>
        </div>
      </motion.section>


      {/* Final CTA */}
      <motion.section className="max-w-3xl mx-auto text-center py-20 px-4" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp}>
        <div className="text-lg space-y-4 max-w-prose mx-auto">
          <p>Finding support shouldn’t depend on availability or affordability. Mend AI fills in the gaps—offering private, 24/7 reflection and care.</p>
          <p>Whether you're in therapy, between sessions, or just need to pause, Mend AI helps you process and grow.</p>
        </div>
        <Link href="/signup" className="inline-block mt-8 px-8 py-4 bg-teal-600 text-white text-base font-semibold rounded-full hover:bg-teal-700 transition shadow-md">
          Get Started For Free
        </Link>
      </motion.section>

      {/* Email Capture / Waitlist */}
      <motion.section className="max-w-xl mx-auto text-center px-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <h2 className="text-2xl font-semibold mb-4">Join Our Waitlist</h2>
        <p className="mb-4 text-gray-600">Get early access and exclusive mental wellness content.</p>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <input type="email" placeholder="you@example.com" className="px-4 py-2 rounded border border-gray-300 w-full sm:w-auto" />
          <button type="submit" className="px-6 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition">Join</button>
        </form>
      </motion.section>

      {/* Footer with trust signals */}
      <footer className="bg-white/60 mt-20 py-6 text-center text-sm text-gray-600 rounded-t-xl shadow-inner">
        <p>© {new Date().getFullYear()} Mend AI. All rights reserved.</p>
        <p className="mt-1 text-xs">Made with 💚 for your peace of mind.</p>
        <div className="mt-2 flex justify-center gap-4 text-xs text-gray-500">
          <span>HIPAA-Conscious</span>
          <span>Built with Therapists</span>
          <span>Data Encrypted</span>
        </div>
      </footer>
    </main>
  );
}

/**AI idea that will understand your schedule, helps you work around them to boost productivity.
 * Beyond: Time tracking or to-do lists
How it’s better: AI adapts your workflow based on mood, burnout signs, or recent emotional loads.

“You were in 6 draining calls yesterday. Moving deep work block to 2 PM and canceling one sync.”

Treats emotion as a first-class input in productivity.

AI idea that will understand your schedule, helps you work around them to boost 
 */
