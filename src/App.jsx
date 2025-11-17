import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Pricing />
        <Gallery />
        <Contact />
      </main>
      <footer className="border-t border-gray-200 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Sentinel Security & Fire. All rights reserved.</p>
          <div className="text-sm text-gray-500">License #SEC-001234 • Insured</div>
        </div>
      </footer>
    </div>
  )
}

export default App
