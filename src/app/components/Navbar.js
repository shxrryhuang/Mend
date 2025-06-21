'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null); // ✅ fixed

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="text-2xl font-bold text-teal-600">Mend</Link>
        <div className="sm:hidden">
          <button onClick={() => setOpen(!open)}>
            <span className="text-2xl">{open ? '✕' : '☰'}</span>
          </button>
        </div>

        <div className={`sm:flex items-center space-x-6 ${open ? 'block' : 'hidden'}`}>
          <Link href="/" className="text-gray-700 hover:text-teal-600">Home</Link>
          <Link href="/hiring" className="text-gray-700 hover:text-teal-600">Hiring</Link>
          <Link href="/journal" className="text-gray-700 hover:text-teal-600">Journal</Link>
          {user ? (
            <>
              <span className="text-gray-700">Hi, {user}</span>
              <button
                onClick={handleLogout}
                className="text-red-600 hover:text-red-800 underline"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-teal-600 hover:underline">Login</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
