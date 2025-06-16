'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });
    if (result?.ok) router.push('/');
    else setError('Invalid credentials');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md space-y-4 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center">Sign In</h2>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full p-2 border"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full p-2 border"
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          Log In
        </button>
      </form>

      <div className="w-full max-w-md">
        <button
          onClick={() => signIn('google')}
          className="w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
