import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'CCTV Starter',
    price: '$799',
    features: [
      '2x 4MP cameras + NVR',
      'Professional installation',
      'Mobile app setup',
      '12-month warranty',
    ],
  },
  {
    name: 'CCTV Pro',
    price: '$1,499',
    features: [
      '4x 4K cameras + NVR',
      'Remote access & alerts',
      'Clean cabling & testing',
      '24-month warranty',
    ],
    highlight: true,
  },
  {
    name: 'Fire Alarm Package',
    price: 'From $999',
    features: [
      'Control panel + detectors',
      'Full compliance testing',
      'Zone labeling & documentation',
      'Maintenance and training',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Transparent pricing</h2>
          <p className="mt-4 text-gray-600">Clear packages for homes and businesses. Custom quotes available for larger sites.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className={`rounded-2xl border ${tier.highlight ? 'border-gray-900 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.3)]' : 'border-gray-200'} p-6 relative bg-white`}>
              {tier.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-black text-white text-xs px-3 py-1">Most popular</span>
              )}
              <h3 className="text-lg font-medium text-gray-900">{tier.name}</h3>
              <p className="mt-4 text-3xl font-semibold text-gray-900">{tier.price}</p>
              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-700">
                    <Check className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-900 transition-colors">Request quote</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
