import { Link } from '@tanstack/react-router'
import { MapPin, Instagram, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0f1f0f]/95 backdrop-blur-2xl text-[#a89880] mt-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#e07b39] rounded-full flex items-center justify-center shadow-lg shadow-[#e07b39]/20">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-black text-[#f5efe0] tracking-tight">
                Hidden<span className="text-[#e07b39]">India</span>
              </span>
            </div>
            <p className="text-base leading-relaxed mb-6 max-w-md font-medium opacity-80">
              Curating India's lesser-known wonders — places that travel guides
              overlook and algorithms never find. Discover the real India, one
              hidden gem at a time.
            </p>
            <p className="text-sm text-[#7a6a55]">
              Created with passion by{' '}
              <span className="text-[#e07b39] font-bold">Sagar Vasishta</span>
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-[#f5efe0] font-black mb-6 text-xs uppercase tracking-[0.2em]">
              Explore
            </h4>
            <ul className="space-y-4 text-sm font-bold">
              <li>
                <Link to="/locations" className="hover:text-[#e07b39] transition-all flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e07b39]/40 group-hover:bg-[#e07b39] transition-all" />
                  All Locations
                </Link>
              </li>
              <li>
                <Link to="/locations" className="hover:text-[#e07b39] transition-all flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e07b39]/40 group-hover:bg-[#e07b39] transition-all" />
                  Northeast India
                </Link>
              </li>
              <li>
                <Link to="/locations" className="hover:text-[#e07b39] transition-all flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e07b39]/40 group-hover:bg-[#e07b39] transition-all" />
                  Himalayan Hideaways
                </Link>
              </li>
              <li>
                <Link to="/locations" className="hover:text-[#e07b39] transition-all flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e07b39]/40 group-hover:bg-[#e07b39] transition-all" />
                  Heritage Trails
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[#f5efe0] font-black mb-6 text-xs uppercase tracking-[0.2em]">
              Connect
            </h4>
            <div className="flex gap-4 mb-6">
              {[
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Youtube, label: 'YouTube' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 hover:bg-[#e07b39] hover:border-[#e07b39] hover:-translate-y-1 transition-all duration-300 shadow-lg"
                >
                  <Icon className="w-5 h-5 text-white/70 group-hover:text-white" />
                </a>
              ))}
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/5">
              <p className="text-xs font-bold leading-relaxed text-[#c9b99a]">
                Share your hidden discoveries
                <br />
                <span className="text-[#e07b39] text-sm font-black">#HiddenIndia</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-[#5a4a38] uppercase tracking-widest">
          <p>© 2025 HiddenIndia. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Crafted for the roads less travelled</span>
            <span className="w-1 h-1 rounded-full bg-[#e07b39]" />
            <span className="text-[#e07b39]">Sagar Vasishta</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
