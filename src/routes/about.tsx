import { createFileRoute, Link } from '@tanstack/react-router'
import { MapPin, Heart, Shield, Users, Compass } from 'lucide-react'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1a2e1a] py-20 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: 'url(https://picsum.photos/seed/about-india/1400/600)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-[#1a2e1a]/80" />
        <div className="relative max-w-3xl mx-auto px-4">
          <div className="w-16 h-16 bg-[#e07b39] rounded-full flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-[#f5efe0] mb-4">
            About <span className="text-[#e07b39]">HiddenIndia</span>
          </h1>
          <p className="text-xl text-[#c9b99a] leading-relaxed">
            A platform for curious travellers who believe the most extraordinary
            experiences in India are still waiting to be found — far from the
            selfie sticks and package tours.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="prose-lg text-[#4a3020] space-y-6">
          <h2 className="text-3xl font-bold text-[#2d2010]">Our Mission</h2>
          <p className="leading-relaxed">
            India is one of the most geographically, culturally, and ecologically
            diverse countries on earth. It has 28 states, 8 union territories,
            22 officially recognised languages, and ecosystems ranging from Arctic
            alpine to tropical rainforest to hyper-arid desert. And yet, the vast
            majority of the 1.4 billion travellers who visit India each year see
            perhaps a dozen of the same places — the same temples, the same hill
            stations, the same overcrowded beaches.
          </p>
          <p className="leading-relaxed">
            HiddenIndia exists to change that. We believe that the Dzukou Valley
            deserves as much recognition as the Valley of Flowers. That Gandikota
            should be as famous as the Grand Canyon. That Majuli, the world's
            largest river island, should not be a secret. That the living root
            bridges of Mawlynnong should fill people with as much wonder as any
            Seven Wonder of the World.
          </p>
          <p className="leading-relaxed">
            We are not anti-travel. We are anti-lazy-travel. We believe in
            independent exploration, community knowledge, and the kind of
            unhurried curiosity that actually changes how you see the world.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#f5efe0] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-[#2d2010] mb-10 text-center">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Compass,
                title: 'Anti-Tourist',
                desc: 'We curate places that the mainstream travel industry ignores. If it has a Tripadvisor ranking in the top 10, it probably does not belong here.',
              },
              {
                icon: Shield,
                title: 'Honest',
                desc: 'No paid placements, no sponsored content, no hotel partnerships. Every recommendation comes from real travellers.',
              },
              {
                icon: Users,
                title: 'Community-Led',
                desc: 'Our best discoveries come from the people who have been there — hikers, birders, heritage enthusiasts, and accidental wanderers.',
              },
              {
                icon: Heart,
                title: 'Responsible',
                desc: 'We encourage travel that respects local ecosystems, cultures, and communities. Leave no trace, and give back wherever you can.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-[#e8ddd0] shadow-sm">
                <div className="w-11 h-11 bg-[#e07b39]/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#e07b39]" />
                </div>
                <h3 className="font-bold text-[#2d2010] mb-2">{title}</h3>
                <p className="text-sm text-[#7a6050] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-[#1a2e1a] rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'url(https://picsum.photos/seed/creator/800/400)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-[#e07b39]/20 border-4 border-[#e07b39]/40 mx-auto mb-6 flex items-center justify-center">
              <span className="text-4xl font-bold text-[#e07b39]">S</span>
            </div>
            <p className="text-[#c9b99a] text-sm uppercase tracking-widest font-medium mb-2">
              Created by
            </p>
            <h2 className="text-4xl font-bold text-[#f5efe0] mb-4">
              Sagar Vasishta
            </h2>
            <p className="text-[#c9b99a] max-w-xl mx-auto leading-relaxed mb-6">
              An independent traveller and writer who has spent years exploring
              the roads, rivers, and ridgelines of India that guidebooks
              overlook. HiddenIndia is a personal project — a labour of love for
              a country that never stops surprising its most persistent students.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {[
                '25+ Indian states visited',
                '200+ days in the field',
                '10+ years exploring offbeat India',
              ].map((stat) => (
                <span
                  key={stat}
                  className="bg-[#e07b39]/20 text-[#f0c080] border border-[#e07b39]/30 px-4 py-2 rounded-full"
                >
                  {stat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#e07b39] py-14 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-3">
            Start Exploring
          </h2>
          <p className="text-[#fde8d4] mb-6">
            Hundreds of hidden gems across India are waiting to be discovered.
            Your next great adventure starts here.
          </p>
          <Link
            to="/locations"
            className="bg-white text-[#e07b39] font-bold px-8 py-3 rounded-full hover:bg-[#fde8d4] transition-colors inline-block"
          >
            Explore Hidden Spots →
          </Link>
        </div>
      </section>
    </div>
  )
}
