import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { MapPin, ArrowLeft, Navigation, Star } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import locations from '@/data/locations'

export const Route = createFileRoute('/map')({
  component: MapPage,
  validateSearch: (search: Record<string, unknown>) => {
    return {
      select: (search.select as string) || locations[0].id,
    }
  },
})

function MapPage() {
  const { select } = Route.useSearch()
  const selectedLocation = locations.find((l) => l.id === select) || locations[0]
  const [activeId, setActiveId] = useState(selectedLocation.id)

  const active = locations.find((l) => l.id === activeId) || selectedLocation

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-64px)] bg-[#f5efe0]">
      {/* Sidebar */}
      <div className="w-full md:w-80 lg:w-96 bg-white border-r border-[#e8ddd0] flex flex-col shadow-xl z-10">
        <div className="p-4 border-b border-[#e8ddd0] bg-[#faf6f0]">
          <Link
            to="/locations"
            className="flex items-center gap-2 text-sm font-bold text-[#7a6050] hover:text-[#e07b39] transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Gallery
          </Link>
          <h1 className="text-xl font-black text-[#2d2010] flex items-center gap-2">
            <Navigation className="w-5 h-5 text-[#e07b39]" />
            Interactive Map
          </h1>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {locations.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setActiveId(loc.id)}
              className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex gap-4 ${
                activeId === loc.id
                  ? 'bg-[#e07b39]/5 border-[#e07b39] shadow-md ring-1 ring-[#e07b39]/20'
                  : 'bg-white border-[#e8ddd0] hover:border-[#e07b39]/50 hover:bg-[#faf6f0]'
              }`}
            >
              <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border border-black/5">
                <img src={loc.image} alt={loc.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-[#2d2010] truncate text-sm">
                  {loc.name}
                </h3>
                <div className="flex items-center gap-1 text-[#7a6050] text-[10px] uppercase font-bold mt-1">
                  <MapPin className="w-3 h-3" />
                  {loc.state}
                </div>
                <div className="flex items-center gap-1 mt-1 text-[#e07b39]">
                  <Star className="w-3 h-3 fill-current" />
                  <span className="text-[10px] font-black">{loc.rating}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Map Content */}
      <div className="flex-1 relative bg-[#e8ddd0] overflow-hidden">
        {/* Glassmorphic Info Panel */}
        <div className="absolute top-6 left-6 right-6 md:right-auto md:w-96 bg-white/60 backdrop-blur-xl border border-white/40 p-6 rounded-3xl shadow-2xl z-20 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="flex items-center gap-2 text-[#e07b39] text-xs font-black uppercase tracking-widest mb-2">
            <MapPin className="w-4 h-4" />
            {active.state} · {active.region}
          </div>
          <h2 className="text-2xl font-black text-[#2d2010] mb-3 leading-tight">
            {active.name}
          </h2>
          <p className="text-sm text-[#5a4030] leading-relaxed mb-6 font-medium">
            {active.shortDescription}
          </p>
          <div className="flex gap-3">
            <Link
              to="/locations/$locationId"
              params={{ locationId: active.id }}
              className="flex-1 bg-[#2d2010] text-white text-center py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#000] transition-colors shadow-lg"
            >
              Full Details
            </Link>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${active.name}, ${active.state}, India`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#e07b39] text-white text-center py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#c96a2a] transition-colors shadow-lg"
            >
              Open in App
            </a>
          </div>
        </div>

        {/* Interactive Embed */}
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://maps.google.com/maps?q=${encodeURIComponent(`${active.name}, ${active.state}, India`)}&t=k&z=12&ie=UTF8&iwloc=&output=embed`}
          allowFullScreen
          className="w-full h-full grayscale-[0.2] contrast-[1.1]"
          title={active.name}
        ></iframe>
        
        {/* Note: In a real app, you'd use a real API key. 
            For this demo, Google Maps Embed will work but might show a "Development Only" warning 
            if a key is missing. As a fallback, we use the search link above. */}
            
        <div className="absolute bottom-6 right-6 bg-[#1a2e1a] text-[#f5efe0] px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-2xl z-20">
          Interactive Satellite View
        </div>
      </div>
    </div>
  )
}
