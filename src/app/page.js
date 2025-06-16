'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(false)
  const [typedText, setTypedText] = useState('')
  const fullText = 'Hello there! Welcome :)'

  useEffect(() => {
    setShowIntro(true)
    let index = 0
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1))
      index++
      if (index === fullText.length) clearInterval(interval)
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8 space-y-12">
        {/* ✍️ Typewriter Heading */}
        <h1 className="text-5xl font-bold">
          {typedText}
          <span className="border-r-2 animate-pulse inline-block ml-1" />
        </h1>

        {/* 💡 Fade-in intro */}
        <p
          className={`max-w-xl text-gray-700 text-center transition-opacity duration-1000 ${
            showIntro ? 'opacity-100' : 'opacity-0'
          }`}
        >
          I’m Sherry, a software engineer passionate about building modern web apps with Next.js and Tailwind CSS.
        </p>

        {/* 🛎️ Pulse Call-to-Action
        <Link href="/about" scroll={false}>
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg animate-pulse hover:animate-none">
            Learn About Me
          </button>
        </Link> */}
      </main>

      {/* 📖 About Section */}
      <section
        id="about"
        className="min-h-screen bg-gray flex flex-col items-center justify-center p-8 space-y-4"
      >
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="text-lg text-gray-700 max-w-2xl text-center">
          I'm currently a software engineer based in New York City. I build modern web apps.
        </p>
        <p className="mt-4 text-gray-700 max-w-2xl text-center">
        Currently, I'm focused on creating clean, scalable UI components and solving challenging problems in user experience and performance.
        </p>
        <ul className="list-disc pl- text-gray-700 space-y-2">
          <li>📍 New York City</li>
          <li>💼 AI Software Engineer at Lockheed Martin</li>
          <li>💻 Passionate about full-stack development</li>
        </ul>
      </section>
    </>
  )
}