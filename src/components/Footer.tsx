import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">SwiftCart</h3>
            <p className="mt-2 text-sm text-slate-500">A simple e-commerce demo built with React, TypeScript & Tailwind.</p>
          </div>
          <nav aria-label="Product links">
            <h4 className="text-sm font-semibold text-slate-900">Shop</h4>
            <ul className="mt-4 space-y-2">
              <li><Link to="/products" className="text-sm text-slate-500 hover:text-brand-600">All Products</Link></li>
              <li><Link to="/products?category=electronics" className="text-sm text-slate-500 hover:text-brand-600">Electronics</Link></li>
              <li><Link to="/products?category=clothing" className="text-sm text-slate-500 hover:text-brand-600">Clothing</Link></li>
            </ul>
          </nav>
          <nav aria-label="Support links">
            <h4 className="text-sm font-semibold text-slate-900">Support</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-slate-500 hover:text-brand-600">Contact Us</a></li>
              <li><a href="#" className="text-sm text-slate-500 hover:text-brand-600">FAQs</a></li>
              <li><a href="#" className="text-sm text-slate-500 hover:text-brand-600">Shipping Info</a></li>
            </ul>
          </nav>
          <nav aria-label="Legal links">
            <h4 className="text-sm font-semibold text-slate-900">Legal</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-slate-500 hover:text-brand-600">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-slate-500 hover:text-brand-600">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-slate-500 hover:text-brand-600">Refund Policy</a></li>
            </ul>
          </nav>
        </div>
        <div className="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} SwiftCart. Built for learning.</p>
        </div>
      </div>
    </footer>
  )
}