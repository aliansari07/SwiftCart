import { useParams, Link } from 'react-router-dom'

interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
  description: string
  features: string[]
}

const mockProducts: Record<string, Product> = {
  '1': {
    id: '1',
    name: 'Wireless Headphones',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop',
    category: 'electronics',
    description: 'Premium wireless headphones with active noise cancellation, 30-hour battery life, and exceptional sound quality. Perfect for music lovers and professionals alike.',
    features: ['Active Noise Cancellation', '30-hour Battery Life', 'Bluetooth 5.0', 'Comfortable Over-ear Design', 'Built-in Microphone'],
  },
  '2': {
    id: '2',
    name: 'Smart Watch',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop',
    category: 'electronics',
    description: 'Next-generation smartwatch with health monitoring, GPS, and seamless smartphone integration. Stay connected and track your fitness goals.',
    features: ['Heart Rate Monitoring', 'GPS Tracking', 'Water Resistant 50m', '7-day Battery', 'Always-on Display'],
  },
  '3': {
    id: '3',
    name: 'Laptop Stand',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&h=800&fit=crop',
    category: 'electronics',
    description: 'Ergonomic aluminum laptop stand with adjustable height and angle. Improves posture and keeps your laptop cool during long work sessions.',
    features: ['Aluminum Construction', '6 Height Settings', 'Cable Management', 'Fits 11-17" Laptops', 'Non-slip Silicone Pads'],
  },
  '4': {
    id: '4',
    name: 'Premium T-Shirt',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop',
    category: 'clothing',
    description: 'Ultra-soft organic cotton t-shirt with a modern fit. Pre-shrunk and garment-dyed for a lived-in feel from day one.',
    features: ['100% Organic Cotton', 'Pre-shrunk Fabric', 'Modern Fit', 'Tagless Design', 'Machine Washable'],
  },
  '5': {
    id: '5',
    name: 'Denim Jeans',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=800&fit=crop',
    category: 'clothing',
    description: 'Classic straight-leg jeans crafted from premium Japanese denim. Designed to age beautifully and last for years.',
    features: ['Japanese Selvedge Denim', 'Straight Leg Fit', 'Button Fly', 'Five-pocket Styling', 'Unwashed Raw Denim'],
  },
  '6': {
    id: '6',
    name: 'Running Shoes',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop',
    category: 'clothing',
    description: 'Lightweight running shoes with responsive cushioning and breathable mesh upper. Engineered for daily training and long runs.',
    features: ['Responsive Foam Midsole', 'Breathable Mesh Upper', 'Durable Rubber Outsole', '8mm Drop', 'Reflective Details'],
  },
  '7': {
    id: '7',
    name: 'Coffee Maker',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=800&fit=crop',
    category: 'home',
    description: 'Programmable coffee maker with thermal carafe. Brew up to 12 cups with customizable strength settings.',
    features: ['12-cup Capacity', 'Thermal Carafe', 'Programmable Timer', 'Brew Strength Control', 'Auto Shut-off'],
  },
  '8': {
    id: '8',
    name: 'Desk Lamp',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&h=800&fit=crop',
    category: 'home',
    description: 'Modern LED desk lamp with adjustable brightness and color temperature. Touch controls and USB charging port.',
    features: ['5 Brightness Levels', '3 Color Temperatures', 'USB Charging Port', 'Touch Controls', 'Flexible Neck'],
  },
  '9': {
    id: '9',
    name: 'Bluetooth Speaker',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&h=800&fit=crop',
    category: 'electronics',
    description: 'Portable Bluetooth speaker with 360° sound and 20-hour playtime. Waterproof and built for adventure.',
    features: ['360° Sound', '20-hour Battery', 'IPX7 Waterproof', 'Bluetooth 5.3', 'Party Pairing Mode'],
  },
}

export function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const product = mockProducts[id || '']

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
            <button className="flex-1 rounded-lg bg-brand-600 px-8 py-3 text-base font-medium text-white hover:bg-brand-700 transition-colors">
              Add to Cart
            </button>
            <button className="flex-1 rounded-lg border border-slate-300 px-8 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 transition-colors">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}