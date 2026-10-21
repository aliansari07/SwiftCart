import { Link } from 'react-router-dom'

export function Home() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">Welcome to SwiftCart</h1>
        <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto">
          A clean, fast e-commerce experience built with React 19, TypeScript, and Tailwind CSS v4.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link to="/products" className="rounded-lg bg-brand-600 px-8 py-3 text-base font-medium text-white hover:bg-brand-700 transition-colors">
            Shop Now
          </Link>
          <Link to="/products" className="rounded-lg border border-slate-300 px-8 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 transition-colors">
            Browse Products
          </Link>
        </div>
      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-3">
        <FeatureCard
          icon={
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <path d="M3.27 6.96L12 12.01l8.73-5.05" />
              <path d="M12 22.08V12" />
            </svg>
          }
          title="Fast Shipping"
          description="Free shipping on orders over $50. Delivered to your door in 2-3 business days."
        />
        <FeatureCard
          icon={
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M2 8h20" />
              <path d="M10 12v4" />
              <path d="M14 12v4" />
            </svg>
          }
          title="Secure Payments"
          description="Your payment information is encrypted and secure. We support all major cards."
        />
        <FeatureCard
          icon={
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
              <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
              <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
            </svg>
          }
          title="Easy Returns"
          description="30-day hassle-free returns. If you don't love it, send it back."
        />
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm hover:shadow-md transition-shadow">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-brand-50 text-brand-600">{icon}</div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-500">{description}</p>
    </div>
  )
}