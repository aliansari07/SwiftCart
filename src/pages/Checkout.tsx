import { Link } from 'react-router-dom'

export function Checkout() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">Checkout</h1>
      <p className="mt-2 text-slate-500">Checkout functionality coming soon.</p>
      <div className="mt-8">
        <Link to="/cart" className="inline-block rounded-lg border border-slate-300 px-8 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 transition-colors">
          Back to Cart
        </Link>
      </div>
    </div>
  )
}