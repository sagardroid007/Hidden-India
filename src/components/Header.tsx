import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { MapPin, Menu, X } from 'lucide-react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-[#1a2e1a] text-[#f5efe0] sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-[#e07b39] rounded-full flex items-center justify-center group-hover:bg-[#c96a2a] transition-colors">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <span className="text-xl font-bold tracking-tight text-[#f5efe0]">
                Hidden
              </span>
              <span className="text-xl font-bold tracking-tight text-[#e07b39]">
                India
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-sm font-medium text-[#c9b99a] hover:text-[#f5efe0] transition-colors"
              activeProps={{ className: 'text-[#f5efe0]' }}
            >
              Home
            </Link>
            <Link
              to="/locations"
              className="text-sm font-medium text-[#c9b99a] hover:text-[#f5efe0] transition-colors"
              activeProps={{ className: 'text-[#f5efe0]' }}
            >
              Explore
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-[#c9b99a] hover:text-[#f5efe0] transition-colors"
              activeProps={{ className: 'text-[#f5efe0]' }}
            >
              About
            </Link>
            <Link
              to="/locations"
              className="bg-[#e07b39] hover:bg-[#c96a2a] text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
            >
              + Add Location
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[#c9b99a] hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#142014] border-t border-[#2d4a2d] px-4 pb-4 pt-2">
          <nav className="flex flex-col gap-3">
            <Link
              to="/"
              className="text-[#c9b99a] hover:text-white py-1"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/locations"
              className="text-[#c9b99a] hover:text-white py-1"
              onClick={() => setMenuOpen(false)}
            >
              Explore
            </Link>
            <Link
              to="/about"
              className="text-[#c9b99a] hover:text-white py-1"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/locations"
              className="bg-[#e07b39] text-white text-sm font-semibold px-4 py-2 rounded-full w-fit mt-1"
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
