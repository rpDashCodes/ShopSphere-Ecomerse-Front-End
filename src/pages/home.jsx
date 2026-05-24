import Navbar from "../components/NavBar";

function Landing() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar/>
      {/* Hero Section */}
      <section className="flex flex-1 items-center justify-center bg-linear-to-r from-indigo-600 to-purple-600 text-white">
        <div className="text-center px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Elevate Your Shopping Experience
          </h1>
          <p className="mt-6 text-lg text-gray-200">
            Discover premium products curated just for you.
            Quality. Style. Performance.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 text-gray-500 text-sm">
        © 2026 ShopSphere. All rights reserved.
      </footer>

    </div>
  );
}

export default Landing;