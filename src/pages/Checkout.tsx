import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/useCart'

export function Checkout() {
  const { items, count, subtotal, shipping, total, clearCart } = useCart()
  const [placed, setPlaced] = useState(false)

  if (placed) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-600">
          <svg className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900">Order Placed</h1>
        <p className="mt-2 text-slate-500">Thank you for your purchase. A confirmation has been sent to your email.</p>
        <Link
          to="/products"
          className="mt-8 inline-block rounded-lg bg-brand-600 px-8 py-3 text-base font-medium text-white hover:bg-brand-700 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Checkout</h1>
        <p className="mt-2 text-slate-500">Your cart is empty, so there is nothing to check out.</p>
        <div className="mt-8">
          <Link to="/products" className="inline-block rounded-lg bg-brand-600 px-8 py-3 text-base font-medium text-white hover:bg-brand-700 transition-colors">
            Browse Products
          </Link>
        </div>
      </div>
    )
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    clearCart()
    setPlaced(true)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">Checkout</h1>
      <p className="mt-2 text-slate-500">
        {count} {count === 1 ? 'item' : 'items'} ready to order.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <fieldset className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <legend className="text-lg font-semibold text-slate-900">Shipping Details</legend>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-slate-700">
                Full name
                <input type="text" name="name" required autoComplete="name" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200" />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Email
                <input type="email" name="email" required autoComplete="email" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200" />
              </label>
              <label className="block text-sm font-medium text-slate-700 sm:col-span-2">
                Address
                <input type="text" name="address" required autoComplete="street-address" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200" />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                City
                <input type="text" name="city" required autoComplete="address-level2" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200" />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                ZIP code
                <input type="text" name="zip" required autoComplete="postal-code" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200" />
              </label>
            </div>
          </fieldset>

          <fieldset className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <legend className="text-lg font-semibold text-slate-900">Payment</legend>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-slate-700 sm:col-span-2">
                Card number
                <input type="text" name="card" required inputMode="numeric" autoComplete="cc-number" placeholder="4242 4242 4242 4242" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200" />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Expiry
                <input type="text" name="expiry" required autoComplete="cc-exp" placeholder="MM/YY" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200" />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                CVC
                <input type="text" name="cvc" required inputMode="numeric" autoComplete="cc-csc" placeholder="123" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200" />
              </label>
            </div>
          </fieldset>
        </div>

        <aside className="h-fit rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Order Summary</h2>
          <ul className="mt-4 space-y-3">
            {items.map(({ product, quantity }) => (
              <li key={product.id} className="flex justify-between gap-4 text-sm">
                <span className="text-slate-600">
                  {product.name} <span className="text-slate-400">&times;{quantity}</span>
                </span>
                <span className="font-medium text-slate-900">${(product.price * quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>

          <dl className="mt-4 space-y-3 border-t border-slate-200 pt-4 text-sm">
            <div className="flex justify-between">
              <dt className="text-slate-500">Subtotal</dt>
              <dd className="font-medium text-slate-900">${subtotal.toFixed(2)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-slate-500">Shipping</dt>
              <dd className="font-medium text-slate-900">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</dd>
            </div>
            <div className="flex justify-between border-t border-slate-200 pt-3 text-base">
              <dt className="font-semibold text-slate-900">Total</dt>
              <dd className="font-bold text-slate-900">${total.toFixed(2)}</dd>
            </div>
          </dl>

          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-brand-600 px-6 py-3 text-base font-medium text-white hover:bg-brand-700 transition-colors"
          >
            Place Order
          </button>
          <Link
            to="/cart"
            className="mt-3 block rounded-lg border border-slate-300 px-6 py-3 text-center text-base font-medium text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Back to Cart
          </Link>
        </aside>
      </form>
    </div>
  )
}
