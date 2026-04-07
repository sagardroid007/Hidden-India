import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { MapPin, Star, Clock, ArrowLeft, CheckCircle, Lightbulb, Navigation } from 'lucide-react'
import locations from '@/data/locations'
import type { Review } from '@/data/locations'

export const Route = createFileRoute('/locations/$locationId')({
  component: LocationDetail,
  loader: ({ params }) => {
    const loc = locations.find((l) => l.id === params.locationId)
    if (!loc) throw new Error('Location not found')
    return loc
  },
})

function StarPicker({
  value,
  onChange,
}: {
  value: number
  onChange: (n: number) => void
}) {
  const [hovered, setHovered] = useState(0)
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          onMouseEnter={() => setHovered(n)}
          onMouseLeave={() => setHovered(0)}
          className="p-0.5"
        >
          <Star
            className={`w-6 h-6 transition-colors ${
              n <= (hovered || value)
                ? 'fill-[#e07b39] text-[#e07b39]'
                : 'fill-[#e8ddd0] text-[#e8ddd0]'
            }`}
          />
        </button>
      ))}
    </div>
  )
}

function LocationDetail() {
  const loc = Route.useLoaderData()

  const [reviews, setReviews] = useState<Review[]>(loc.reviews)
  const [form, setForm] = useState({ name: '', rating: 0, text: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name.trim() || !form.rating || !form.text.trim()) return
    const newReview: Review = {
      id: Date.now(),
      name: form.name.trim(),
      rating: form.rating,
      text: form.text.trim(),
      date: new Date().toISOString().split('T')[0],
    }
    setReviews((prev) => [newReview, ...prev])
    setForm({ name: '', rating: 0, text: '' })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const avgRating =
    reviews.length > 0
      ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)
      : loc.rating.toFixed(1)

  return (
    <div>
      {/* Hero */}
      <div className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
        <img
          src={loc.heroImage}
          alt={loc.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f0f]/80 via-transparent to-transparent" />

        {/* Back link */}
        <Link
          to="/locations"
          className="absolute top-6 left-6 flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> All Locations
        </Link>

        {/* Hero title */}
        <div className="absolute bottom-8 left-0 right-0 px-6 sm:px-10">
          <div className="max-w-5xl mx-auto">
            <span className="bg-[#e07b39] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-3 inline-block">
              {loc.category}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
              {loc.name}
            </h1>
            <div className="flex items-center gap-2 mt-2 text-[#f0e0c8]">
              <MapPin className="w-4 h-4" />
              <span className="font-medium">{loc.state}</span>
              <span className="opacity-60">·</span>
              <span className="opacity-80">{loc.region}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column — main info */}
          <div className="lg:col-span-2 space-y-10">
            {/* Quick stats */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white border border-[#e8ddd0] rounded-xl px-4 py-3 shadow-sm">
                <Star className="w-5 h-5 fill-[#e07b39] text-[#e07b39]" />
                <div>
                  <div className="font-bold text-[#2d2010]">{avgRating}</div>
                  <div className="text-xs text-[#7a6050]">{reviews.length} reviews</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white border border-[#e8ddd0] rounded-xl px-4 py-3 shadow-sm">
                <Clock className="w-5 h-5 text-[#e07b39]" />
                <div>
                  <div className="text-xs text-[#7a6050]">Best Season</div>
                  <div className="font-semibold text-sm text-[#2d2010]">{loc.bestSeason}</div>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {loc.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-[#e07b39]/10 text-[#c96a2a] text-sm font-medium px-3 py-1 rounded-full border border-[#e07b39]/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Full description */}
            <section>
              <h2 className="text-2xl font-bold text-[#2d2010] mb-4">About this place</h2>
              <p className="text-[#4a3020] leading-relaxed">{loc.fullDescription}</p>
            </section>

            {/* Things to do */}
            <section>
              <h2 className="text-2xl font-bold text-[#2d2010] mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-[#e07b39]" /> Things to Do
              </h2>
              <ul className="space-y-2">
                {loc.thingsToDo.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#4a3020]">
                    <span className="w-6 h-6 rounded-full bg-[#e07b39]/10 text-[#e07b39] text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* How to reach */}
            <section>
              <h2 className="text-2xl font-bold text-[#2d2010] mb-4 flex items-center gap-2">
                <Navigation className="w-6 h-6 text-[#e07b39]" /> How to Reach
              </h2>
              <ul className="space-y-3">
                {loc.howToReach.map((step, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 bg-[#f5efe0] border border-[#e8ddd0] rounded-xl px-4 py-3 text-sm text-[#4a3020]"
                  >
                    <MapPin className="w-4 h-4 text-[#e07b39] flex-shrink-0 mt-0.5" />
                    {step}
                  </li>
                ))}
              </ul>
            </section>

            {/* Tips */}
            <section>
              <h2 className="text-2xl font-bold text-[#2d2010] mb-4 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-[#e07b39]" /> Tips for Travellers
              </h2>
              <ul className="space-y-2">
                {loc.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#4a3020]">
                    <span className="text-[#e07b39] mt-0.5">→</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right column — sidebar */}
          <div className="space-y-6">
            {/* Map placeholder */}
            <div className="bg-[#e8ddd0] rounded-2xl overflow-hidden aspect-square flex items-center justify-center border border-[#d4c8bc]">
              <div className="text-center text-[#7a6050] p-6">
                <MapPin className="w-10 h-10 mx-auto mb-2 text-[#e07b39]" />
                <p className="font-semibold">{loc.name}</p>
                <p className="text-sm">{loc.state}</p>
              </div>
            </div>

            {/* Quick info card */}
            <div className="bg-white border border-[#e8ddd0] rounded-2xl p-5 shadow-sm">
              <h3 className="font-bold text-[#2d2010] mb-4">Quick Info</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-[#a89880] text-xs uppercase tracking-wide">State</dt>
                  <dd className="font-semibold text-[#2d2010] mt-0.5">{loc.state}</dd>
                </div>
                <div>
                  <dt className="text-[#a89880] text-xs uppercase tracking-wide">Region</dt>
                  <dd className="font-semibold text-[#2d2010] mt-0.5">{loc.region}</dd>
                </div>
                <div>
                  <dt className="text-[#a89880] text-xs uppercase tracking-wide">Category</dt>
                  <dd className="font-semibold text-[#2d2010] mt-0.5">{loc.category}</dd>
                </div>
                <div>
                  <dt className="text-[#a89880] text-xs uppercase tracking-wide">Best Season</dt>
                  <dd className="font-semibold text-[#2d2010] mt-0.5 leading-relaxed">{loc.bestSeason}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-14 border-t border-[#e8ddd0] pt-12">
          <h2 className="text-3xl font-bold text-[#2d2010] mb-8">
            Traveller Reviews
            <span className="text-lg font-normal text-[#7a6050] ml-2">
              ({reviews.length})
            </span>
          </h2>

          {/* Add Review Form */}
          <div className="bg-[#f5efe0] border border-[#e8ddd0] rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-bold text-[#2d2010] mb-4">Share Your Experience</h3>
            {submitted && (
              <div className="bg-[#1a2e1a] text-[#f5efe0] rounded-xl px-4 py-3 text-sm mb-4 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#7ec87e]" />
                Review submitted! Thank you for sharing.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#5a4030] mb-1">
                  Your Name <span className="text-[#e07b39]">*</span>
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="e.g. Priya Sharma"
                  className="w-full border border-[#d4c8bc] rounded-xl px-4 py-2.5 text-sm bg-white text-[#2d2010] placeholder-[#a89880] focus:outline-none focus:ring-2 focus:ring-[#e07b39]/30"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#5a4030] mb-1">
                  Rating <span className="text-[#e07b39]">*</span>
                </label>
                <StarPicker value={form.rating} onChange={(n) => setForm((f) => ({ ...f, rating: n }))} />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#5a4030] mb-1">
                  Your Review <span className="text-[#e07b39]">*</span>
                </label>
                <textarea
                  value={form.text}
                  onChange={(e) => setForm((f) => ({ ...f, text: e.target.value }))}
                  placeholder="Tell us about your experience at this hidden gem…"
                  rows={4}
                  className="w-full border border-[#d4c8bc] rounded-xl px-4 py-2.5 text-sm bg-white text-[#2d2010] placeholder-[#a89880] focus:outline-none focus:ring-2 focus:ring-[#e07b39]/30 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={!form.name || !form.rating || !form.text}
                className="bg-[#e07b39] hover:bg-[#c96a2a] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold px-6 py-2.5 rounded-xl transition-colors"
              >
                Submit Review
              </button>
            </form>
          </div>

          {/* Reviews list */}
          {reviews.length === 0 ? (
            <p className="text-[#7a6050] text-center py-8">
              No reviews yet — be the first to share your experience!
            </p>
          ) : (
            <div className="space-y-4">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white border border-[#e8ddd0] rounded-2xl p-5 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#e07b39]/15 flex items-center justify-center text-[#e07b39] font-bold text-sm flex-shrink-0">
                        {review.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-bold text-[#2d2010] text-sm">{review.name}</p>
                        <p className="text-xs text-[#a89880]">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5 flex-shrink-0">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <Star
                          key={n}
                          className={`w-4 h-4 ${
                            n <= review.rating
                              ? 'fill-[#e07b39] text-[#e07b39]'
                              : 'fill-[#e8ddd0] text-[#e8ddd0]'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-[#4a3020] leading-relaxed">{review.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
