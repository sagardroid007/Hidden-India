import { Link, createFileRoute } from '@tanstack/react-router'
import { MapPin, Star, Shield, Users, Compass, Sun, Navigation, Camera } from 'lucide-react'
import locations from '@/data/locations'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const featuredLocations = locations.slice(0, 3)

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#1a2e1a] overflow-hidden min-h-[88vh] flex items-center">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: 'url(https://picsum.photos/seed/india-landscape/1600/900)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1f0f]/85 via-[#1a2e1a]/65 to-[#3a1a08]/75" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center w-full">
          <div className="inline-flex items-center gap-2 bg-[#e07b39]/20 border border-[#e07b39]/40 text-[#f0c080] text-sm font-medium px-4 py-2 rounded-full mb-8">
            <Compass className="w-4 h-4" />
            Anti-Tourist Travel Platform for India
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#f5efe0] leading-tight mb-6">
            India Beyond
            <br />
            <span className="text-[#e07b39]">the Obvious</span>
          </h1>

          <p className="text-xl sm:text-2xl text-[#c9b99a] max-w-2xl mx-auto leading-relaxed mb-10">
            Forget the Taj Mahal. Discover the India that most travellers never find —
            hidden valleys, ancient gorges, living root bridges, and monasteries lost in time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/locations"
              className="bg-[#e07b39] hover:bg-[#c96a2a] text-white font-bold px-8 py-4 rounded-full text-lg transition-colors inline-flex items-center gap-2 justify-center"
            >
              <MapPin className="w-5 h-5" /> Explore Hidden Spots
            </Link>
            <Link
              to="/about"
              className="border-2 border-[#c9b99a]/50 hover:border-[#f5efe0] text-[#f5efe0] font-bold px-8 py-4 rounded-full text-lg transition-colors inline-flex items-center gap-2 justify-center"
            >
              Our Mission
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-16">
            {[
              { label: 'Hidden Spots', value: '10+' },
              { label: 'Indian States', value: '9' },
              { label: 'Community Reviews', value: '1,700+' },
              { label: 'Happy Explorers', value: '50K+' },
            ].map(({ label, value }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-bold text-[#e07b39]">{value}</div>
                <div className="text-sm text-[#c9b99a] mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#f5efe0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#2d2010] mb-4">
              Why <span className="text-[#e07b39]">HiddenIndia</span>?
            </h2>
            <p className="text-lg text-[#7a6050] max-w-xl mx-auto">
              We do the hard work so you find the magic — not the crowds.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Verified Hidden Spots',
                desc: 'Every location is personally vetted to ensure it remains genuinely off the tourist trail.',
              },
              {
                icon: Users,
                title: 'Community Reviews',
                desc: 'Honest reviews from independent travellers who have actually been there — no paid placements.',
              },
              {
                icon: Navigation,
                title: 'How to Reach Guide',
                desc: 'Practical, up-to-date transport directions including public transport for every location.',
              },
              {
                icon: Sun,
                title: 'Best Season Guide',
                desc: 'Know exactly when to go — and when to avoid — for the best experience at each destination.',
              },
              {
                icon: Compass,
                title: 'Travel Tips',
                desc: "Local knowledge and insider tips you won't find in any guidebook — from people who know.",
              },
              {
                icon: Camera,
                title: 'Photography Spots',
                desc: 'Curated viewpoints and golden-hour times for capturing each location at its most spectacular.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-[#e8ddd0] hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-[#e07b39]/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#e07b39]" />
                </div>
                <h3 className="text-lg font-bold text-[#2d2010] mb-2">{title}</h3>
                <p className="text-sm text-[#7a6050] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-[#2d2010] mb-3">Editor's Picks</h2>
              <p className="text-[#7a6050]">Three places to start your hidden India journey</p>
            </div>
            <Link
              to="/locations"
              className="hidden sm:inline-flex items-center gap-1 text-[#e07b39] font-semibold hover:underline"
            >
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredLocations.map((loc) => (
              <Link
                key={loc.id}
                to="/locations/$locationId"
                params={{ locationId: loc.id }}
                className="group block bg-[#faf6f0] rounded-2xl overflow-hidden border border-[#e8ddd0] hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1 text-[#7a6050] text-sm mb-2">
                    <MapPin className="w-3 h-3" />
                    {loc.name}, {loc.state}
                  </div>
                  <p className="text-sm text-[#5a4030] line-clamp-2 leading-relaxed">
                    {loc.shortDescription}
                  </p>
                  <div className="flex items-center gap-1 mt-3">
                    <Star className="w-4 h-4 fill-[#e07b39] text-[#e07b39]" />
                    <span className="text-sm font-semibold text-[#2d2010]">{loc.rating}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/locations"
              className="bg-[#1a2e1a] hover:bg-[#0f1f0f] text-[#f5efe0] font-bold px-8 py-4 rounded-full inline-flex items-center gap-2 transition-colors"
            >
              Explore All Hidden Spots →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#e07b39] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Know a Hidden Gem?</h2>
          <p className="text-[#fde8d4] text-lg mb-8">
            Help other travellers discover the India that guidebooks ignore. Share a
            location and join the community of independent explorers.
          </p>
          <Link
            to="/locations"
            className="bg-white text-[#e07b39] font-bold px-8 py-4 rounded-full text-lg hover:bg-[#fde8d4] transition-colors inline-block"
          >
            + Add a Hidden Location
          </Link>
        </div>
      </section>
    </div>
  )
}
