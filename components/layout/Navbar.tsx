export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        <h1 className="text-2xl font-bold text-white">
          FunLegacy
        </h1>

        <nav className="flex gap-8 text-gray-300">
          <a href="#">Start</a>
          <a href="#">Fahrzeuge</a>
          <a href="#">Team</a>
          <a href="#">News</a>
          <a href="#">Downloads</a>
        </nav>

        <button className="rounded-xl bg-green-500 px-5 py-2 text-white hover:bg-green-600 transition">
          Login
        </button>
      </div>
    </header>
  );
}