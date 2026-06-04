import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { MapPin, Menu, X } from 'lucide-react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-[#1a2e1a]/85 backdrop-blur-xl text-[#f5efe0] sticky top-0 z-50 border-b border-white/10 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-[#e07b39] rounded-full flex items-center justify-center group-hover:bg-[#c96a2a] group-hover:scale-110 transition-all duration-300 shadow-lg shadow-[#e07b39]/20">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <span className="text-xl font-black tracking-tight text-[#f5efe0]">
                Hidden
              </span>
              <span className="text-xl font-black tracking-tight text-[#e07b39]">
                India
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-sm font-bold text-[#c9b99a] hover:text-[#f5efe0] transition-colors relative group"
              activeProps={{ className: 'text-[#f5efe0]' }}
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e07b39] transition-all group-hover:w-full" />
            </Link>
            <Link
              to="/locations"
              className="text-sm font-bold text-[#c9b99a] hover:text-[#f5efe0] transition-colors relative group"
              activeProps={{ className: 'text-[#f5efe0]' }}
            >
              Explore
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e07b39] transition-all group-hover:w-full" />
            </Link>
            <Link
              to="/map"
              className="text-sm font-bold text-[#c9b99a] hover:text-[#f5efe0] transition-colors relative group"
              activeProps={{ className: 'text-[#f5efe0]' }}
            >
              Map
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e07b39] transition-all group-hover:w-full" />
            </Link>
            <Link
              to="/about"
              className="text-sm font-bold text-[#c9b99a] hover:text-[#f5efe0] transition-colors relative group"
              activeProps={{ className: 'text-[#f5efe0]' }}
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e07b39] transition-all group-hover:w-full" />
            </Link>
            <Link
              to="/add-location"
              className="bg-[#e07b39] hover:bg-[#c96a2a] hover:scale-105 text-white text-xs font-black uppercase tracking-widest px-5 py-2.5 rounded-full transition-all shadow-lg shadow-[#e07b39]/30"
            >
              + Add Location
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[#c9b99a] hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu - Glassmorphic overlay */}
      {menuOpen && (
        <div className="md:hidden bg-[#1a2e1a]/95 backdrop-blur-2xl border-t border-white/10 px-4 pb-6 pt-4 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-4">
            <Link
              to="/"
              className="text-[#c9b99a] font-bold hover:text-white py-2 border-b border-white/5"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/locations"
              className="text-[#c9b99a] font-bold hover:text-white py-2 border-b border-white/5"
              onClick={() => setMenuOpen(false)}
            >
              Explore
            </Link>
            <Link
              to="/map"
              className="text-[#c9b99a] font-bold hover:text-white py-2 border-b border-white/5"
              onClick={() => setMenuOpen(false)}
            >
              Map
            </Link>
            <Link
              to="/about"
              className="text-[#c9b99a] font-bold hover:text-white py-2 border-b border-white/5"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/add-location"
              className="bg-[#e07b39] text-white text-xs font-black uppercase tracking-widest px-6 py-3 rounded-full w-full text-center mt-2 shadow-lg shadow-[#e07b39]/20"
              onClick={() => setMenuOpen(false)}
            >
              + Add Location
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
