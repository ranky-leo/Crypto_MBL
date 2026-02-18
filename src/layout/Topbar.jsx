import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-8 h-[88px] flex items-center justify-between">

        {/* Brand */}
        <Link to="/" className="flex items-center gap-4">

          {/* Logo Mark */}
          <div className="w-11 h-11 rounded-md bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-md">
            <span className="text-black font-black tracking-tight text-sm">
              CB
            </span>
          </div>

          {/* Brand Text */}
          <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            CoinBattle
          </span>

        </Link>


        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-sm text-slate-400">
          <span className="hover:text-cyan-400 cursor-pointer transition">Articles</span>
          <span className="hover:text-cyan-400 cursor-pointer transition">Topics</span>
          <span className="hover:text-cyan-400 cursor-pointer transition">Rankings</span>
          <span className="hover:text-cyan-400 cursor-pointer transition">Live</span>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-6 text-sm">
          <Link to="/login" className="text-slate-400 hover:text-cyan-400 transition">
            Login
          </Link>

          <Link
            to="/register"
            className="px-6 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold hover:opacity-90 transition"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </header>
  );
}
