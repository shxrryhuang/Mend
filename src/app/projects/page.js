export default function ProjectsPage() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal website built with Next.js and Tailwind CSS",
      link: "https://github.com/yourusername/portfolio"
    },
    {
      title: "Chat App",
      description: "A real-time chat application using Socket.io and React",
      link: "https://github.com/yourusername/chat-app"
    },
    {
      title: "E‑commerce Store",
      description: "An online store with cart, product pages, and Stripe checkout",
      link: "https://github.com/yourusername/ecommerce-store"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ title, description, link }) => (
          <div key={link} className="bg-white rounded shadow p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-700 mb-4">{description}</p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
