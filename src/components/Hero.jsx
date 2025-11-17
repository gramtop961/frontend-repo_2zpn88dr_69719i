import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/90 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
            Security that blends into your space
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Professional installation of CCTV cameras and fire alarm systems. Discreet, reliable, and designed to protect what matters.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#pricing" className="inline-flex items-center rounded-lg bg-black text-white px-5 py-3 text-sm font-medium hover:bg-gray-900 transition-colors">View pricing</a>
            <a href="#contact" className="inline-flex items-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium hover:border-gray-800 hover:text-gray-900 transition-colors">Talk to an expert</a>
          </div>
          <p className="mt-6 text-xs text-gray-500">Licensed • Insured • Manufacturer-certified installers</p>
        </motion.div>

        <motion.ul className="relative grid grid-cols-2 gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          {[
            '24/7 remote viewing',
            'Motion alerts & AI detection',
            'Clean cabling & hidden runs',
            'Smartphone & desktop apps',
          ].map((item) => (
            <li key={item} className="rounded-xl border border-gray-200 bg-white/80 backdrop-blur p-4 text-sm text-gray-700">
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
