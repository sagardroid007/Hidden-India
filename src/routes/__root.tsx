import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: "HiddenIndia — Discover India's Anti-Tourist Gems" },
      {
        name: 'description',
        content:
          "Discover lesser-known, off-the-beaten-path destinations across India — away from the tourist crowds and into the real India.",
      },
    ],
  }),
  component: RootDocument,
})

function RootDocument() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-[#faf6f0] text-[#2d2010] min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
