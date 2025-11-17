import { Phone, Mail, Shield } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-black text-white grid place-items-center">
            <Shield className="h-5 w-5" />
          </div>
          <div>
            <p className="font-semibold text-gray-900 leading-tight">Sentinel Security & Fire</p>
            <p className="text-xs text-gray-500 leading-tight">CCTV • Fire Alarm Installations</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#pricing" className="hover:text-black transition-colors">Pricing</a>
          <a href="#gallery" className="hover:text-black transition-colors">Gallery</a>
          <a href="#contact" className="hover:text-black transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="tel:+15551234567" className="hidden sm:flex items-center gap-2 text-gray-800 hover:text-black text-sm">
            <Phone className="h-4 w-4" /> +1 (555) 123-4567
          </a>
          <a href="#contact" className="inline-flex items-center rounded-lg bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-900 transition-colors">Get a quote</a>
        </div>
      </div>
    </header>
  )
}
