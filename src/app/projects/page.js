export default function ProjectsPage() {
  const projects = [
    {
      title: "Portfolio 🌸 ",
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
    }, 
   {
    title: "Blog App",
      description: "A blog application with user authentication and post management",
      link: "https://github.com/yourusername/blog-app"
    }, 
    {
      title: "Movie App",
      description: "A movie recommendation app with user authentication and movie search",
      link: "https://github.com/yourusername/movie-app"
    },
    {
      title: "To-Do List",
      description: "A simple to-do list application with user authentication and task management",
      link: "https://github.com/yourusername/todo-list"
    },
    {
      title: "Image Gallery",
      description: "A photo gallery application with user authentication and image management",
      link: "https://github.com/yourusername/image-gallery"
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
              Check me out!
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
