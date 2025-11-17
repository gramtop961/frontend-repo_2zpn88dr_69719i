import { Phone, Mail, MapPin } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    setTimeout(() => setStatus('Thanks! We\'ll get back to you shortly.'), 800)
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Get a free site survey</h2>
            <p className="mt-4 text-gray-600">Tell us about your property and we\'ll propose the best coverage and compliance options.</p>

            <div className="mt-8 space-y-4 text-sm text-gray-700">
              <p className="flex items-center gap-3"><Phone className="h-4 w-4" /> +1 (555) 123-4567</p>
              <p className="flex items-center gap-3"><Mail className="h-4 w-4" /> quotes@sentinelsecurity.com</p>
              <p className="flex items-center gap-3"><MapPin className="h-4 w-4" /> 221B Market Street, Suite 5, Metropolis</p>
              <p className="text-xs text-gray-500">Mon–Fri 8:00–18:00</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Full name" required className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
            <input type="tel" placeholder="Phone" required className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
            <input type="email" placeholder="Email" className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900/10 sm:col-span-2" />
            <input type="text" placeholder="Property type (home, office, warehouse...)" className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900/10 sm:col-span-2" />
            <textarea placeholder="What do you need protected?" rows="4" className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900/10 sm:col-span-2" />
            <div className="sm:col-span-2 flex items-center justify-between">
              <p className="text-xs text-gray-500">By sending, you agree to be contacted regarding your inquiry.</p>
              <button className="inline-flex items-center rounded-lg bg-black text-white px-5 py-3 text-sm font-medium hover:bg-gray-900 transition-colors">Send request</button>
            </div>
            {status && <p className="sm:col-span-2 text-sm text-green-700">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
