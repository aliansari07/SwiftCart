import { Link } from 'react-router-dom'

export function Cart() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">Shopping Cart</h1>
      <p className="mt-2 text-slate-500">Your cart is currently empty.</p>
      <div className="mt-8 text-center">
        <Link to="/products" className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-base font-medium text-white hover:bg-brand-700 transition-colors">
          Continue Shopping
        </Link>
      </div>
    </div>
  )
}