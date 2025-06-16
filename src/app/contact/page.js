"use client"

import { useState } from 'react'

/*
 * Check if contact form is submitted successfully
 * @param {Object} e - event object
 * @return {void}
 */
export default function ContactPage() {
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const res = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' },
    });

    if (res.ok) {
      setStatus('SUCCESS');
      form.reset();
    } else {
      setStatus('ERROR');
    }
  }

  //contact page
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8 text-gray-700">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      <form
        onSubmit={handleSubmit}
        action="https://formspree.io/f/xyzn1234"
        method="POST"
        className="w-full max-w-md bg-white rounded shadow p-6 space-y-4"
      >
        <label className="block">
          Name
          <input
            type="text"
            name="name"
            required
            className="mt-1 block w-full border-gray-300 rounded px-3 py-2"
          />
        </label>
        <label className="block">
          Email
          <input
            type="email"
            name="email"
            required
            className="mt-1 block w-full border-gray-300 rounded px-3 py-2"
          />
        </label>
        <label className="block">
          Message
          <textarea
            name="message"
            required
            rows="5"
            className="mt-1 block w-full border-gray-300 rounded px-3 py-2"
          />
        </label>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded py-2 hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>

      {status === 'SUCCESS' && (
        <p className="text-green-600 mt-4">Thanks! We'll be in touch.</p>
      )}
      {status === 'ERROR' && (
        <p className="text-red-600 mt-4">
          Oops—something went wrong. Please try again.
        </p>
      )}
    </main>
  );
}
