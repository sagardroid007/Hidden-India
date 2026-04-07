import { Link } from '@tanstack/react-router'
import { MapPin, Instagram, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0f1f0f] text-[#a89880] mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#e07b39] rounded-full flex items-center justify-center">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-[#f5efe0]">
                Hidden<span className="text-[#e07b39]">India</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Curating India's lesser-known wonders — places that travel guides
              overlook and algorithms never find. Discover the real India, one
              hidden gem at a time.
            </p>
            <p className="text-xs text-[#7a6a55]">
              Created with love by{' '}
              <span className="text-[#e07b39] font-semibold">Sagar Vasishta</span>
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-[#f5efe0] font-semibold mb-3 text-sm uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/locations" className="hover:text-[#f5efe0] transition-colors">
                  All Locations
                </Link>
              </li>
              <li>
                <Link to="/locations" className="hover:text-[#f5efe0] transition-colors">
                  Northeast India
                </Link>
              </li>
              <li>
                <Link to="/locations" className="hover:text-[#f5efe0] transition-colors">
                  Himalayan Hideaways
                </Link>
              </li>
              <li>
                <Link to="/locations" className="hover:text-[#f5efe0] transition-colors">
                  Heritage Trails
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#f5efe0] transition-colors">
                  About HiddenIndia
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[#f5efe0] font-semibold mb-3 text-sm uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-3 mb-4">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#1a2e1a] flex items-center justify-center hover:bg-[#e07b39] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#c9b99a]" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-[#1a2e1a] flex items-center justify-center hover:bg-[#e07b39] transition-colors"
              >
                <Twitter className="w-4 h-4 text-[#c9b99a]" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-[#1a2e1a] flex items-center justify-center hover:bg-[#e07b39] transition-colors"
              >
                <Youtube className="w-4 h-4 text-[#c9b99a]" />
              </a>
            </div>
            <p className="text-xs">
              Share your hidden discoveries
              <br />
              <span className="text-[#e07b39]">#HiddenIndia</span>
            </p>
          </div>
        </div>

        <div className="border-t border-[#1a2e1a] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#5a4a38]">
          <p>© 2025 HiddenIndia. All rights reserved.</p>
          <p>
            Crafted with ♥ by{' '}
            <span className="text-[#e07b39]">Sagar Vasishta</span> — for the
            roads less travelled
          </p>
        </div>
      </div>
    </footer>
  )
}
