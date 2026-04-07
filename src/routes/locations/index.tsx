import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { MapPin, Star, Search, Filter } from 'lucide-react'
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

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          className={`w-3.5 h-3.5 ${
            n <= Math.round(rating)
              ? 'fill-[#e07b39] text-[#e07b39]'
              : 'fill-[#e8ddd0] text-[#e8ddd0]'
          }`}
        />
      ))}
      <span className="text-xs font-semibold text-[#5a4030] ml-1">{rating}</span>
    </div>
  )
}

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
      <div className="bg-white rounded-2xl border border-[#e8ddd0] p-5 mb-8 shadow-sm">
        {/* Search bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a89880]" />
          <input
            type="text"
            placeholder="Search by name, state, or keyword…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-3 bg-[#faf6f0] border border-[#e8ddd0] rounded-xl text-sm text-[#2d2010] placeholder-[#a89880] focus:outline-none focus:ring-2 focus:ring-[#e07b39]/30"
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
                className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                  category === cat
                    ? 'bg-[#e07b39] text-white border-[#e07b39]'
                    : 'bg-white text-[#7a6050] border-[#e8ddd0] hover:border-[#e07b39] hover:text-[#e07b39]'
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
            className="text-xs font-medium border border-[#e8ddd0] rounded-full px-3 py-1.5 bg-white text-[#7a6050] focus:outline-none focus:ring-2 focus:ring-[#e07b39]/30"
          >
            {STATES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>

          {/* Season select */}
          <select
            value={season}
            onChange={(e) => setSeason(e.target.value)}
            className="text-xs font-medium border border-[#e8ddd0] rounded-full px-3 py-1.5 bg-white text-[#7a6050] focus:outline-none focus:ring-2 focus:ring-[#e07b39]/30"
          >
            {SEASONS.map((s) => (
              <option key={s}>{s}</option>
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
            <Link
              key={loc.id}
              to="/locations/$locationId"
              params={{ locationId: loc.id }}
              className="group bg-white rounded-2xl overflow-hidden border border-[#e8ddd0] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category badge */}
                <span className="absolute top-3 left-3 bg-[#1a2e1a]/80 text-[#f5efe0] text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
                  {loc.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-[#2d2010] leading-tight">
                    {loc.name}
                  </h3>
                </div>

                <div className="flex items-center gap-1 text-[#7a6050] text-xs mb-3">
                  <MapPin className="w-3 h-3 flex-shrink-0" />
                  <span>{loc.state} · {loc.region}</span>
                </div>

                <p className="text-sm text-[#5a4030] leading-relaxed line-clamp-2 mb-4">
                  {loc.shortDescription}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {loc.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#f5efe0] text-[#7a6050] text-xs px-2 py-0.5 rounded-full border border-[#e8ddd0]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer row */}
                <div className="flex items-center justify-between pt-3 border-t border-[#f0e8de]">
                  <StarRating rating={loc.rating} />
                  <span className="text-xs text-[#a89880]">
                    Best: {loc.bestSeason.split(',')[0]}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
