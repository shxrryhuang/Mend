'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(false)
  const [typedText, setTypedText] = useState('')
  const fullText = 'Welcome to Mend'

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
      Here, you will have a safe space to explore, reflect, and to focus on becoming the best version of yourself. </p>
    </main>
  )
}