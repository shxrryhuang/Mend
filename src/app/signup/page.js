'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Replace this with actual backend call or mock
      const users = JSON.parse(localStorage.getItem('users') || '{}');

      if (users[email]) {
        setError('User already exists');
        return;
      }

      users[email] = { email, password };
      localStorage.setItem('users', JSON.stringify(users));
      router.push('/login');
    } catch (err) {
      setError('Signup failed');
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

      {/* Optional: Placeholder for social sign up (not implemented) */}
      <div className="text-center text-sm text-gray-500">
        Google Sign-in not available in offline app
      </div>
    </div>
  );
}
