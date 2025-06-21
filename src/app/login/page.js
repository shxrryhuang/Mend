'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users') || '{}');
    const user = users[email];

    if (!user || user.password !== password) {
      setError('Invalid email or password');
      return;
    }

    // Store active user session
    if (remember) {
      localStorage.setItem('user', email);
    } else {
      sessionStorage.setItem('user', email);
    }

    router.push('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md space-y-4 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center">Sign In</h2>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

        <label className="flex items-center space-x-2 text-sm">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="w-4 h-4"
          />
          <span>Remember me</span>
        </label>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Log In
        </button>
      </form>

      <div className="w-full max-w-md text-center text-sm text-gray-500">
        Google login not available in offline app
      </div>
    </div>
  );
}
