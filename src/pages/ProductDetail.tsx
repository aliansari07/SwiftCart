import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/useCart'
import { getProduct } from '../data/products'

export function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)
  const product = getProduct(id || '')

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Product Not Found</h1>
        <p className="mt-2 text-slate-500">The product you're looking for doesn't exist.</p>
        <Link to="/products" className="mt-6 inline-block rounded-lg bg-brand-600 px-6 py-3 text-white hover:bg-brand-700">
          Back to Products
        </Link>
      </div>
    )
  }

  const selectedProduct = product

  function handleAddToCart() {
    addItem(selectedProduct.id)
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1500)
  }

  function handleBuyNow() {
    addItem(selectedProduct.id)
    navigate('/checkout')
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-8 flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-brand-600">Home</Link>
        <span aria-hidden="true">/</span>
        <Link to="/products" className="hover:text-brand-600">Products</Link>
        <span aria-hidden="true">/</span>
        <span className="text-slate-900 font-medium" aria-current="page">{product.name}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="aspect-square w-full rounded-xl object-cover bg-slate-100"
          />
        </div>

        <div>
          <p className="text-sm font-medium text-brand-600 uppercase tracking-wide">{product.category}</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{product.name}</h1>
          <p className="mt-4 text-2xl font-bold text-brand-600">${product.price.toFixed(2)}</p>

          <p className="mt-6 text-slate-600">{product.description}</p>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-slate-900">Features</h3>
            <ul className="mt-4 space-y-2">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-600">
                  <svg className="h-5 w-5 flex-shrink-0 text-brand-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex gap-4">
            <button
              type="button"
              onClick={handleAddToCart}
              className="flex-1 rounded-lg bg-brand-600 px-8 py-3 text-base font-medium text-white hover:bg-brand-700 transition-colors"
            >
              {added ? 'Added to Cart' : 'Add to Cart'}
            </button>
            <button
              type="button"
              onClick={handleBuyNow}
              className="flex-1 rounded-lg border border-slate-300 px-8 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
