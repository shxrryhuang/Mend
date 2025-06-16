'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'


export default function HomePage() {
  const [showIntro, setShowIntro] = useState(false)
  const [typedText, setTypedText] = useState('')
  const fullText = 'Hello there! Welcome :)'

  useEffect(() => {
    setShowIntro(true)
    
    // Typewriter effect
    let index = 0
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1))
      index++
      if (index === fullText.length) clearInterval(interval)
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
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

      {/* 🛎️ Pulse Call-to-Action */}
      <Link href="/projects" scroll={false}>
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg animate-pulse hover:animate-none">
          View My Projects
        </button>
      </Link>
    </main>

    
  )
}
