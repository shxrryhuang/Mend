// src/app/components/Navbar.js
'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="text-2xl font-bold text-blue-600">Logo</Link>
        <div className="sm:hidden">
          <button onClick={() => setOpen(!open)}>
            <span className="text-2xl">{open ? '✕' : '☰'}</span>
          </button>
        </div>
        <div className={`sm:flex space-x-6 ${open ? 'block' : 'hidden'}`}>
          <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link href="/projects" className="text-gray-700 hover:text-blue-600">Projects</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
