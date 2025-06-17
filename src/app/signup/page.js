'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      router.push('/login');
    } else {
      const data = await res.json();
      setError(data.error || 'Signup failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 space-y-6">
      <form onSubmit={handleSignup} className="space-y-4 bg-white p-6 shadow rounded">
        <h2 className="text-xl font-bold text-center">Sign Up</h2>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Sign Up
        </button>
      </form>

      {/* Sign up with Google button */}
      <div className="text-center">
        <p className="text-gray-500 mb-2">or</p>
        <button
          onClick={() => signIn('google')}
          className="w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600"
        >
          Sign up with Google
        </button>
      </div>
    </div>
  );
}