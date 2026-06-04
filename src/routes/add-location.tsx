import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { MapPin, Compass, Anchor, CheckCircle2, ChevronRight, ScrollText, Crosshair, ThermometerSun, CloudRain } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import locations, { type Location } from '@/data/locations'

export const Route = createFileRoute('/add-location')({
  component: AddLocationPage,
})

function AddLocationPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  
  const [formData, setFormData] = useState({
    name: '',
    state: '',
    description: '',
    image: '',
    season: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    setTimeout(() => {
      const newLoc: Location = {
        id: formData.name.toLowerCase().replace(/[^a-z0-9]/g, '-') + '-' + Date.now(),
        name: formData.name,
        state: formData.state,
        region: 'Unknown',
        image: formData.image || 'https://picsum.photos/seed/new/800/600',
        heroImage: formData.image || 'https://picsum.photos/seed/new-hero/1400/700',
        shortDescription: formData.description.slice(0, 150) + (formData.description.length > 150 ? '...' : ''),
        fullDescription: formData.description,
        tags: ['New Discovery'],
        category: 'Nature',
        rating: 5.0,
        reviewCount: 1,
        bestSeason: formData.season || 'All Year',
        howToReach: ['Pending cartographer verification.'],
        thingsToDo: ['Explore the untouched beauty.'],
        tips: ['Tread lightly and leave no trace.'],
        reviews: []
      }
      locations.unshift(newLoc)
      setLoading(false)
      setSubmitted(true)
      setFormData({ name: '', state: '', description: '', image: '', season: '' })
    }, 1500)
  }

  return (
    <div className="relative min-h-screen bg-[#f2e8cf] py-16 px-4 font-serif">
      {/* Vintage Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-10 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/parchment.png')]" />
      
      {/* Pop-up Modal for Submission */}
      {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-[#fff9eb] border-8 border-double border-[#3d3d3d]/20 p-8 md:p-12 max-w-lg w-full text-center relative shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="w-20 h-20 bg-[#a44a3f]/10 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-[#a44a3f]/20">
              <CheckCircle2 className="w-10 h-10 text-[#a44a3f]" />
            </div>
            <h2 className="text-3xl font-bold text-[#3d3d3d] mb-4 italic">Dispatch Received.</h2>
            <p className="text-base text-[#5a4a38] mb-8 leading-relaxed italic">
              Your discovery has been logged. The location will be updated by <strong className="text-[#a44a3f] font-black">Mr. Sagar</strong> after the place is thoroughly reviewed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/locations"
                className="bg-[#3d3d3d] text-[#f2e8cf] px-6 py-3 rounded-none border-b-4 border-black font-bold uppercase tracking-widest text-xs hover:bg-black transition-all shadow-lg"
              >
                View Map
              </Link>
              <button
                onClick={() => setSubmitted(false)}
                className="border-2 border-[#3d3d3d] text-[#3d3d3d] px-6 py-3 rounded-none font-bold uppercase tracking-widest text-xs hover:bg-[#3d3d3d] hover:text-[#f2e8cf] transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#a44a3f]/10 border border-[#a44a3f]/40 text-[#a44a3f] px-6 py-2 rounded-none mb-6 italic border-double border-4">
            <Compass className="w-4 h-4" /> Royal Cartography Society
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-[#3d3d3d] mb-4">
            Log a <span className="italic">Hidden Discovery</span>
          </h1>
          <p className="text-xl text-[#5a4a38] max-w-xl mx-auto italic opacity-80">
            "For the explorer who seeks what is lost to time."
          </p>
        </div>

        <form 
          onSubmit={handleSubmit}
          className="bg-[#fff9eb] border-8 border-double border-[#3d3d3d]/20 p-8 md:p-16 shadow-[20px_20px_0px_0px_rgba(61,61,61,0.05)] relative overflow-hidden"
        >
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-[#3d3d3d]/10 m-4" />
          <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-[#3d3d3d]/10 m-4" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Left Column: Basic Info */}
            <div className="space-y-8">
              <div className="border-b-2 border-[#3d3d3d]/10 pb-2">
                <label className="block text-xs font-bold uppercase tracking-[0.2em] text-[#3d3d3d] mb-2 opacity-60">
                  I. Nomenclature (Destination Name)
                </label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter Title..."
                  className="w-full bg-transparent border-none px-0 py-2 text-xl italic text-[#3d3d3d] placeholder-[#3d3d3d]/30 focus:outline-none"
                />
              </div>

              <div className="border-b-2 border-[#3d3d3d]/10 pb-2">
                <label className="block text-xs font-bold uppercase tracking-[0.2em] text-[#3d3d3d] mb-2 opacity-60">
                  II. Province / Territory
                </label>
                <input
                  required
                  type="text"
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  placeholder="The State/Region..."
                  className="w-full bg-transparent border-none px-0 py-2 text-xl italic text-[#3d3d3d] placeholder-[#3d3d3d]/30 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="border-b-2 border-[#3d3d3d]/10 pb-2">
                  <label className="block text-xs font-bold uppercase tracking-[0.2em] text-[#3d3d3d] mb-2 opacity-60">
                    III. Latitude
                  </label>
                  <div className="flex items-center gap-2">
                    <Crosshair className="w-4 h-4 text-[#a44a3f]" />
                    <input
                      required
                      type="text"
                      placeholder="00.0000° N"
                      className="w-full bg-transparent border-none px-0 py-2 text-base font-mono text-[#3d3d3d] placeholder-[#3d3d3d]/30 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="border-b-2 border-[#3d3d3d]/10 pb-2">
                  <label className="block text-xs font-bold uppercase tracking-[0.2em] text-[#3d3d3d] mb-2 opacity-60">
                    IV. Longitude
                  </label>
                  <div className="flex items-center gap-2">
                    <Crosshair className="w-4 h-4 text-[#a44a3f]" />
                    <input
                      required
                      type="text"
                      placeholder="00.0000° E"
                      className="w-full bg-transparent border-none px-0 py-2 text-base font-mono text-[#3d3d3d] placeholder-[#3d3d3d]/30 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative & Image */}
            <div className="space-y-8">
              <div className="border-b-2 border-[#3d3d3d]/10 pb-2">
                <label className="block text-xs font-bold uppercase tracking-[0.2em] text-[#3d3d3d] mb-2 opacity-60">
                  V. The Explorer's Narrative
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Begin your account of the discovery here..."
                  className="w-full bg-transparent border-none px-0 py-2 text-base italic text-[#3d3d3d] placeholder-[#3d3d3d]/30 focus:outline-none resize-none"
                />
              </div>

              <div className="border-b-2 border-[#3d3d3d]/10 pb-2">
                <label className="block text-xs font-bold uppercase tracking-[0.2em] text-[#3d3d3d] mb-2 opacity-60">
                  VI. Photographic Evidence (URL)
                </label>
                <div className="relative">
                  <input
                    required
                    type="url"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="Reference Link..."
                    className="w-full bg-transparent border-none px-0 py-2 text-base italic text-[#3d3d3d] placeholder-[#3d3d3d]/30 focus:outline-none"
                  />
                  <Anchor className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a44a3f]" />
                </div>
              </div>
            </div>
          </div>

          {/* New Section: VII. Meteorological & Climate Observations */}
          <div className="border-t-4 border-double border-[#3d3d3d]/10 pt-10 mb-12">
            <h3 className="text-xl font-bold text-[#3d3d3d] mb-8 flex items-center gap-3">
              <ThermometerSun className="w-5 h-5 text-[#a44a3f]" />
              VII. Meteorological & Climate Observations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border-b-2 border-[#3d3d3d]/10 pb-2">
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#3d3d3d] mb-2 opacity-60">
                  Average Temperature
                </label>
                <input
                  type="text"
                  placeholder="e.g. 12°C - 24°C"
                  className="w-full bg-transparent border-none px-0 py-1 text-base italic text-[#3d3d3d] placeholder-[#3d3d3d]/30 focus:outline-none"
                />
              </div>
              <div className="border-b-2 border-[#3d3d3d]/10 pb-2">
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#3d3d3d] mb-2 opacity-60">
                  Moisture & Conditions
                </label>
                <div className="flex items-center gap-2">
                  <CloudRain className="w-4 h-4 text-[#a44a3f] opacity-60" />
                  <input
                    type="text"
                    placeholder="e.g. Arid, Misty"
                    className="w-full bg-transparent border-none px-0 py-1 text-base italic text-[#3d3d3d] placeholder-[#3d3d3d]/30 focus:outline-none"
                  />
                </div>
              </div>
              <div className="border-b-2 border-[#3d3d3d]/10 pb-2">
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#3d3d3d] mb-2 opacity-60">
                  Ideal Voyager window
                </label>
                <input
                  type="text"
                  value={formData.season}
                  onChange={(e) => setFormData({ ...formData, season: e.target.value })}
                  placeholder="e.g. Oct - Mar"
                  className="w-full bg-transparent border-none px-0 py-1 text-base italic text-[#3d3d3d] placeholder-[#3d3d3d]/30 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Tips Section: Styled as a Wax Seal Note */}
          <div className="bg-[#fdfdfd] p-8 border-l-4 border-[#a44a3f] mb-12 relative">
            <div className="absolute top-0 right-0 w-8 h-8 bg-[#a44a3f]/10 rounded-full m-4 flex items-center justify-center">
              <ScrollText className="w-4 h-4 text-[#a44a3f]" />
            </div>
            <h4 className="text-xs font-black text-[#a44a3f] uppercase tracking-[0.3em] mb-3">Notice to the Voyager</h4>
            <p className="text-base text-[#5a4a38] leading-relaxed italic opacity-80">
              "Every hidden jewel shared is a fragment of history preserved. We ask that 
              you verify your coordinates with the utmost precision. Accuracy is the 
              virtue of the true cartographer."
            </p>
          </div>

          <button
            disabled={loading}
            type="submit"
            className="w-full bg-[#3d3d3d] hover:bg-black disabled:bg-[#dcdcdc] text-[#f2e8cf] py-6 rounded-none font-bold uppercase tracking-[0.3em] text-sm transition-all flex items-center justify-center gap-4 group shadow-xl"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-[#f2e8cf]/30 border-t-[#f2e8cf] rounded-full animate-spin" />
            ) : (
              <>
                Register in Eternal Records
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        <div className="mt-12 text-center opacity-60">
          <p className="text-xs font-bold text-[#3d3d3d] uppercase tracking-[0.2em]">
            Seeker of the Unknown? <Link to="/locations" className="underline decoration-dotted decoration-[#a44a3f] hover:text-[#a44a3f]">Consult the existing maps →</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
