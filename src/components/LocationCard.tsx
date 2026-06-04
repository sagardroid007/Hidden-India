import { Link } from '@tanstack/react-router'
import { MapPin, Star, ArrowUpRight, Map as MapIcon } from 'lucide-react'
import { Location } from '@/data/locations'

interface LocationCardProps {
  location: Location
}

const categoryColors = {
  Nature: {
    bg: 'bg-emerald-500/80',
    text: 'text-emerald-50',
    border: 'border-emerald-400/30',
    glow: 'shadow-emerald-500/20',
  },
  Heritage: {
    bg: 'bg-amber-600/80',
    text: 'text-amber-50',
    border: 'border-amber-400/30',
    glow: 'shadow-amber-500/20',
  },
  Adventure: {
    bg: 'bg-orange-500/80',
    text: 'text-orange-50',
    border: 'border-orange-400/30',
    glow: 'shadow-orange-500/20',
  },
  Spiritual: {
    bg: 'bg-indigo-500/80',
    text: 'text-indigo-50',
    border: 'border-indigo-400/30',
    glow: 'shadow-indigo-500/20',
  },
}

export function LocationCard({ location }: LocationCardProps) {
  const colors = categoryColors[location.category] || categoryColors.Nature

  return (
    <Link
      to="/locations/$locationId"
      params={{ locationId: location.id }}
      className="group relative block bg-white/40 backdrop-blur-md rounded-3xl overflow-hidden border border-white/40 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/10"
    >
      {/* Image Container */}
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={location.image}
          alt={location.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

        {/* Category Badge - Glassmorphism */}
        <span className={`absolute top-4 left-4 ${colors.bg} ${colors.text} ${colors.border} backdrop-blur-md text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-full border shadow-lg ${colors.glow} z-10`}>
          {location.category}
        </span>

        {/* Actions Overlay */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
          {/* Map Button - Now points to our internal Map page */}
          <Link
            to="/map"
            search={{ select: location.id }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white/20 backdrop-blur-md border border-white/30 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 hover:bg-[#e07b39] hover:border-[#e07b39] shadow-lg"
            title="View on Interactive Map"
          >
            <MapIcon className="w-4 h-4 text-white" />
          </Link>

          {/* Details Arrow */}
          <div className="bg-white/20 backdrop-blur-md border border-white/30 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 delay-75">
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative">
        {/* Location & Rating Header */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5 text-[#e07b39] font-bold text-xs uppercase tracking-tight">
            <MapPin className="w-3.5 h-3.5" />
            <span>{location.state}</span>
          </div>
          <div className="flex items-center gap-1 bg-white/60 backdrop-blur-sm px-2 py-0.5 rounded-lg border border-white/50">
            <Star className="w-3.5 h-3.5 fill-[#e07b39] text-[#e07b39]" />
            <span className="text-xs font-black text-[#2d2010]">{location.rating}</span>
          </div>
        </div>

        <h3 className="text-xl font-extrabold text-[#2d2010] leading-tight mb-2 group-hover:text-[#e07b39] transition-colors duration-300">
          {location.name}
        </h3>

        <p className="text-sm text-[#7a6050] leading-relaxed line-clamp-2 mb-5 font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          {location.shortDescription}
        </p>

        {/* Tags - Minimalist Glassmorphism */}
        <div className="flex flex-wrap gap-2 mb-5">
          {location.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="bg-white/50 backdrop-blur-sm text-[#7a6050] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border border-white/60 group-hover:border-[#e07b39]/30 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer / Best Season */}
        <div className="flex items-center justify-between pt-4 border-t border-black/5">
          <span className="text-[10px] font-bold text-[#a89880] uppercase tracking-tighter">
            Best Time to Visit
          </span>
          <span className="text-[11px] font-black text-[#5a4030]">
            {location.bestSeason.split(',')[0]}
          </span>
        </div>
      </div>

      {/* Mini-Map Section - Appears on Hover */}
      <Link
        to="/map"
        search={{ select: location.id }}
        className="absolute inset-x-4 bottom-4 h-24 bg-white/60 backdrop-blur-xl rounded-2xl border border-white/60 shadow-inner overflow-hidden opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-150 flex items-center justify-center"
      >
        <div className="absolute inset-0 opacity-40 grayscale contrast-125 mix-blend-multiply">
           <img 
             src={`https://picsum.photos/seed/${location.id}-map/400/200?blur=2`} 
             alt="Map Preview" 
             className="w-full h-full object-cover"
           />
        </div>
        <div className="relative flex flex-col items-center gap-1">
          <div className="w-8 h-8 bg-[#e07b39] rounded-full flex items-center justify-center animate-bounce shadow-lg shadow-[#e07b39]/40">
            <MapPin className="w-4 h-4 text-white" />
          </div>
          <span className="text-[10px] font-black text-[#2d2010] uppercase tracking-widest">
            Interactive Map
          </span>
        </div>
      </Link>

      {/* Subtle bottom highlight on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#e07b39] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </Link>
  )
}
