'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

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
          <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>

          {session?.user ? (
            <>
              <span className="text-gray-700">Hi, {session.user.email}</span>
              <button
                onClick={() => signOut()}
                className="text-red-600 hover:text-red-800 underline"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-blue-600 hover">Login</Link>
              <Link href="/signup" className="text-blue-600 hover">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
