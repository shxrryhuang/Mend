'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    const email = localStorage.getItem('email');
    setLoggedIn(isLoggedIn);
    setUserEmail(email || '');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('email');
    setLoggedIn(false);
    setUserEmail('');
    router.push('/login');
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
          
          {loggedIn ? (
            <>
              <span className="text-gray-700">Hi, {userEmail}</span>
              <button
                onClick={handleLogout}
                className="text-red-600 hover:text-red-800 underline"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="text-teal-600 hover:underline">Login</Link>
          )}
        </div>
      </div>
    </nav>
  ); 
}
