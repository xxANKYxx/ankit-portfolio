export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-6">

      <h1 className="text-4xl font-bold">Ankit Kumar</h1>
      <p className="text-gray-600 mt-2">
        C++ Developer | Software Engineer at Siemens
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-2">
          Software developer working on industrial automation systems.
          Experienced in C++, debugging large systems and backend
          engineering.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Projects</h2>

        <div className="mt-4">
          <h3 className="font-semibold">Multithreaded Log Processor</h3>
          <p>High performance log analysis engine written in C++.</p>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold">In-Memory Key Value Store</h3>
          <p>Redis-like data store implemented using C++.</p>
        </div>

      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Skills</h2>

        <p className="mt-2">
          C++ | STL | Multithreading | System Design | SQL | Git
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p>Email: ankidarm7@gmail.com</p>
      </section>

    </main>
  )
}