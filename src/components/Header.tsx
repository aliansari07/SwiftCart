import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-brand-700" aria-label="SwiftCart home">
          <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M21 6H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z" />
            <path d="M3 12h18" />
            <path d="M9 16h6" />
            <path d="M12 8v8" />
          </svg>
          <span className="hidden sm:inline">SwiftCart</span>
        </Link>

        <div className="hidden md:flex md:items-center md:gap-8">
          <Link to="/products" className="text-sm font-medium text-slate-700 hover:text-brand-600 transition-colors">Products</Link>
          <Link to="/cart" className="relative text-sm font-medium text-slate-700 hover:text-brand-600 transition-colors">
            Cart
            <span className="absolute -top-2 -right-6 h-5 w-5 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
              0
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/cart" className="p-2 text-slate-500 hover:text-brand-600 transition-colors" aria-label="Cart (0 items)">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span className="sr-only">Cart (0 items)</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}