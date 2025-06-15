export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8 text-gray-700">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      <form
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
    </main>
  )
}
