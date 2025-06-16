export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg text-gray-700 max-w-2xl">
        I'm a software engineer based in New York City. I specialize in building modern web applications using React, Next.js, and Tailwind CSS.
      </p>
      <p className="mt-4 text-gray-700 max-w-2xl">
        Currently, I'm focused on creating clean, scalable UI components and solving challenging problems in user experience and performance.
      </p>
      <ul className="mt-6 list-disc pl-5 text-gray-700">
        <li>📍 New York City</li>
        <li>💡 React, Next.js, Tailwind CSS</li>
        <li>🚀 AI Software Engineer at Lockheed Martin  </li>
        <li>💻 Passionate about full-stack development and clean UI</li>
      </ul>
    </div>
  );
}
