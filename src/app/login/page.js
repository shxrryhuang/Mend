'use client';

import { useState, useEffect } from 'react';

export default function AuthPage() {
  const [mode, setMode] = useState('login');

  if (process.env.NEXT_PUBLIC_MODE !== 'desktop-only') {
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
    return null;
  }

  useEffect(() => {
    const form = document.getElementById('authForm');
    if (!form) return;

    const handleSubmit = (e) => {
      e.preventDefault();

      if (mode === 'login') {
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const storedEmail = localStorage.getItem('user_email');
        const storedPass = localStorage.getItem('user_pass');

        if (
          (storedEmail && storedPass && email === storedEmail && password === storedPass) ||
          (email === 'user@example.com' && password === 'pass123')
        ) {
          localStorage.setItem('auth', 'true');
          if (window.electronAPI) {
            window.electronAPI.authSuccess();
          } else {
            window.location.href = '/journal';
          }
        } else {
          alert('Invalid credentials');
        }
      } else {
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirm = document.getElementById('confirmPassword').value;

        if (!firstName || !lastName || !email || !password || !confirm) {
          alert('Please fill out all fields');
          return;
        }
        if (password !== confirm) {
          alert('Passwords do not match');
          return;
        }

        localStorage.setItem('user_email', email);
        localStorage.setItem('user_pass', password);
        alert('Signup successful! You can now log in.');
        setMode('login');
      }
    };

    form.addEventListener('submit', handleSubmit);
    return () => form.removeEventListener('submit', handleSubmit);
  }, [mode]);

  return (
    <main className="min-h-screen p-8 bg-teal-50">
      <div className="max-w-md mx-auto space-y-6">
        <h1 className="text-2xl font-bold mb-6 text-center">{mode === 'login' ? 'Login' : 'Sign Up'}</h1>
        <form id="authForm" className="space-y-4">
          {mode === 'signup' && (
            <>
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                className="w-full px-4 py-2 border rounded"
                required
              />
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                className="w-full px-4 py-2 border rounded"
                required
              />
            </>
          )}
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded"
            required
          />
          {mode === 'signup' && (
            <input
              type="password"
              id="confirmPassword"
              placeholder="Retype Password"
              className="w-full px-4 py-2 border rounded"
              required
            />
          )}
          {mode === 'login' && (
            <label className="flex items-center space-x-2 text-sm">
              <input type="checkbox" defaultChecked className="w-4 h-4" />
              <span>Remember me</span>
            </label>
          )}
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700"
          >
            {mode === 'login' ? 'Log In' : 'Sign Up'}
          </button>
        </form>

        <div className="bg-teal-600 p-4 rounded text-center">
          <button
            onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
            className="text-white hover:underline text-sm"
          >
            {mode === 'login' ? 'Sign Up' : 'Log In'}
          </button>
        </div>
      </div>
    </main>
  );
}
