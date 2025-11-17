export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Our recent work</h2>
          <p className="mt-4 text-gray-600">A clean, discreet finish is our signature. Here are a couple of examples.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <figure className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <img src="https://images.unsplash.com/photo-1737638523248-98196d6d7539?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDQ1RWJTIwaW5zdGFsbGF0aW9uJTIwb24lMjBzdG9yZWZyb250fGVufDB8MHx8fDE3NjMzOTMyODB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="CCTV installation on storefront" className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <figcaption className="p-4 text-sm text-gray-700">Retail frontage with 4K dome cameras and hidden cabling.</figcaption>
          </figure>

          <figure className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <img src="https://images.unsplash.com/photo-1666285571949-3ee1a4946059?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGaXJlJTIwYWxhcm0lMjBjb250cm9sJTIwcGFuZWx8ZW58MHwwfHx8MTc2MzM5MzI4MHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Fire alarm control panel" className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <figcaption className="p-4 text-sm text-gray-700">Addressable fire alarm panel with fully labeled zones.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
