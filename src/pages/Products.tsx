import { Link } from 'react-router-dom'

interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
}

const mockProducts: Product[] = [
  { id: '1', name: 'Wireless Headphones', price: 149.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop', category: 'electronics' },
  { id: '2', name: 'Smart Watch', price: 299.99, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop', category: 'electronics' },
  { id: '3', name: 'Laptop Stand', price: 49.99, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop', category: 'electronics' },
  { id: '4', name: 'Premium T-Shirt', price: 29.99, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop', category: 'clothing' },
  { id: '5', name: 'Denim Jeans', price: 79.99, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop', category: 'clothing' },
  { id: '6', name: 'Running Shoes', price: 129.99, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop', category: 'clothing' },
  { id: '7', name: 'Coffee Maker', price: 89.99, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop', category: 'home' },
  { id: '8', name: 'Desk Lamp', price: 45.99, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop', category: 'home' },
  { id: '9', name: 'Bluetooth Speaker', price: 79.99, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop', category: 'electronics' },
]

export function Products() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Products</h1>
        <p className="mt-2 text-slate-500">Discover our curated collection of quality products.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {mockProducts.map((product) => (
          <article key={product.id} className="group rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <Link to={`/products/${product.id}`} className="block aspect-square relative overflow-hidden bg-slate-50">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </Link>
            <div className="p-4">
              <p className="text-xs font-medium text-brand-600 uppercase tracking-wide">{product.category}</p>
              <Link to={`/products/${product.id}`}>
                <h3 className="mt-1 text-base font-semibold text-slate-900 line-clamp-1 group-hover:text-brand-600 transition-colors">{product.name}</h3>
              </Link>
              <p className="mt-2 text-lg font-bold text-slate-900">${product.price.toFixed(2)}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}