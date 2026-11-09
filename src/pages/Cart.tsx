import { Link } from 'react-router-dom'
import { useCart } from '../context/useCart'

export function Cart() {
  const { items, count, subtotal, shipping, total, updateQuantity, removeItem, clearCart } =
    useCart()

  if (items.length === 0) {
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

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Shopping Cart</h1>
          <p className="mt-2 text-slate-500">
            {count} {count === 1 ? 'item' : 'items'} in your cart.
          </p>
        </div>
        <button
          type="button"
          onClick={clearCart}
          className="text-sm font-medium text-slate-500 hover:text-red-600 transition-colors"
        >
          Clear cart
        </button>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          {items.map(({ product, quantity }) => (
            <div key={product.id} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <Link to={`/products/${product.id}`} className="block h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-slate-50">
                <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
              </Link>

              <div className="flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium text-brand-600 uppercase tracking-wide">{product.category}</p>
                    <Link to={`/products/${product.id}`}>
                      <h2 className="mt-1 text-base font-semibold text-slate-900 hover:text-brand-600 transition-colors">{product.name}</h2>
                    </Link>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(product.id)}
                    className="text-sm font-medium text-slate-400 hover:text-red-600 transition-colors"
                    aria-label={`Remove ${product.name} from cart`}
                  >
                    Remove
                  </button>
                </div>

                <div className="mt-auto flex items-center justify-between pt-4">
                  <div className="flex items-center rounded-lg border border-slate-300">
                    <button
                      type="button"
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="px-3 py-1.5 text-slate-600 hover:text-brand-600"
                      aria-label={`Decrease quantity of ${product.name}`}
                    >
                      &minus;
                    </button>
                    <span className="min-w-8 text-center text-sm font-medium text-slate-900" aria-label={`Quantity of ${product.name}`}>{quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="px-3 py-1.5 text-slate-600 hover:text-brand-600"
                      aria-label={`Increase quantity of ${product.name}`}
                    >
                      +
                    </button>
                  </div>
                  <p className="text-lg font-bold text-slate-900">${(product.price * quantity).toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="h-fit rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Order Summary</h2>
          <dl className="mt-4 space-y-3 text-sm">
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

          <Link
            to="/checkout"
            className="mt-6 block rounded-lg bg-brand-600 px-6 py-3 text-center text-base font-medium text-white hover:bg-brand-700 transition-colors"
          >
            Proceed to Checkout
          </Link>
          <Link
            to="/products"
            className="mt-3 block rounded-lg border border-slate-300 px-6 py-3 text-center text-base font-medium text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Continue Shopping
          </Link>
        </aside>
      </div>
    </div>
  )
}
