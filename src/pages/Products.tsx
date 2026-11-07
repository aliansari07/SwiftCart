import { Link, useSearchParams } from 'react-router-dom'
import { categories, products } from '../data/products'

const filters = ['all', ...categories] as const

export function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('category') ?? 'all'
  const visibleProducts =
    activeCategory === 'all'
      ? products
      : products.filter((product) => product.category === activeCategory)

  function selectCategory(category: string) {
    if (category === 'all') {
      setSearchParams({})
    } else {
      setSearchParams({ category })
    }
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Products</h1>
        <p className="mt-2 text-slate-500">Discover our curated collection of quality products.</p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter products by category">
        {filters.map((category) => {
          const isActive = activeCategory === category
          return (
            <button
              key={category}
              type="button"
              onClick={() => selectCategory(category)}
              aria-pressed={isActive}
              className={`rounded-full px-4 py-2 text-sm font-medium capitalize transition-colors ${
                isActive
                  ? 'bg-brand-600 text-white'
                  : 'border border-slate-200 bg-white text-slate-700 hover:border-brand-300 hover:text-brand-600'
              }`}
            >
              {category}
            </button>
          )
        })}
      </div>

      {visibleProducts.length === 0 ? (
        <div className="rounded-xl border border-slate-200 bg-white p-12 text-center">
          <p className="text-slate-500">No products found in this category.</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleProducts.map((product) => (
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
      )}
    </div>
  )
}
