import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { MapPin, Search, Filter } from 'lucide-react'
import { LocationCard } from '@/components/LocationCard'
import locations from '@/data/locations'

export const Route = createFileRoute('/locations/')({
  component: LocationsPage,
})

const CATEGORIES = ['All', 'Nature', 'Heritage', 'Adventure', 'Spiritual']
const STATES = [
  'All States',
  ...Array.from(new Set(locations.map((l) => l.state))).sort(),
]
const SEASONS = ['All Seasons', 'Summer', 'Monsoon', 'Winter', 'Spring']


function LocationsPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [state, setState] = useState('All States')
  const [season, setSeason] = useState('All Seasons')

  const filtered = locations.filter((loc) => {
    const matchSearch =
      search === '' ||
      loc.name.toLowerCase().includes(search.toLowerCase()) ||
      loc.state.toLowerCase().includes(search.toLowerCase()) ||
      loc.shortDescription.toLowerCase().includes(search.toLowerCase())
    const matchCategory = category === 'All' || loc.category === category
    const matchState = state === 'All States' || loc.state === state
    const matchSeason =
      season === 'All Seasons' ||
      loc.bestSeason.toLowerCase().includes(season.toLowerCase())
    return matchSearch && matchCategory && matchState && matchSeason
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#2d2010] mb-4">
          Explore <span className="text-[#e07b39]">Hidden India</span>
        </h1>
        <p className="text-lg text-[#7a6050] max-w-xl mx-auto">
          {locations.length} lesser-known destinations across India, curated for
          the independent traveller.
        </p>
      </div>

      {/* Search & Filters */}
      <div className="bg-white/40 backdrop-blur-md rounded-3xl border border-white/40 p-6 mb-10 shadow-xl shadow-black/5">
        {/* Search bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#a89880]" />
          <input
            type="text"
            placeholder="Search by name, state, or keyword…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-5 py-4 bg-white/50 backdrop-blur-sm border border-white/60 rounded-2xl text-base font-medium text-[#2d2010] placeholder-[#a89880] focus:outline-none focus:ring-2 focus:ring-[#e07b39]/30 transition-all shadow-inner"
          />
        </div>

        {/* Filter row */}
        <div className="flex flex-wrap gap-3 items-center">
          <div className="flex items-center gap-1 text-sm text-[#7a6050] font-medium">
            <Filter className="w-4 h-4" /> Filter:
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`text-xs font-bold px-4 py-2 rounded-full border transition-all duration-300 ${
                  category === cat
                    ? 'bg-[#e07b39] text-white border-[#e07b39] shadow-lg shadow-[#e07b39]/30 scale-105'
                    : 'bg-white/50 backdrop-blur-sm text-[#7a6050] border-white/60 hover:border-[#e07b39] hover:text-[#e07b39]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* State select */}
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="text-xs font-bold border border-white/60 rounded-full px-4 py-2 bg-white/50 backdrop-blur-sm text-[#7a6050] focus:outline-none focus:ring-2 focus:ring-[#e07b39]/30 transition-all hover:border-[#e07b39]"
          >
            {STATES.map((s) => (
              <option key={s} className="bg-white">{s}</option>
            ))}
          </select>

          {/* Season select */}
          <select
            value={season}
            onChange={(e) => setSeason(e.target.value)}
            className="text-xs font-bold border border-white/60 rounded-full px-4 py-2 bg-white/50 backdrop-blur-sm text-[#7a6050] focus:outline-none focus:ring-2 focus:ring-[#e07b39]/30 transition-all hover:border-[#e07b39]"
          >
            {SEASONS.map((s) => (
              <option key={s} className="bg-white">{s}</option>
            ))}
          </select>

          {(search || category !== 'All' || state !== 'All States' || season !== 'All Seasons') && (
            <button
              onClick={() => {
                setSearch('')
                setCategory('All')
                setState('All States')
                setSeason('All Seasons')
              }}
              className="text-xs text-[#e07b39] font-semibold hover:underline"
            >
              Clear all
            </button>
          )}
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-[#7a6050] mb-6">
        Showing <strong>{filtered.length}</strong> location{filtered.length !== 1 ? 's' : ''}
      </p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-2xl mb-2">🗺️</p>
          <p className="text-lg font-semibold text-[#5a4030]">No locations found</p>
          <p className="text-sm text-[#7a6050] mt-1">Try adjusting your filters or search term</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((loc) => (
            <LocationCard key={loc.id} location={loc} />
          ))}
        </div>
      )}
    </div>
  )
}
