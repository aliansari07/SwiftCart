import { createContext } from 'react'
import type { Product } from '../data/products'

/**
 * An item in the shopping cart, consisting of a product and its quantity.
 */
export interface CartItem {
  product: Product
  quantity: number
}

/**
 * The value provided by the CartProvider via context.
 */
export interface CartContextValue {
  items: CartItem[]
  count: number
  subtotal: number
  shipping: number
  total: number
  addItem: (productId: string, quantity?: number) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
}

export const CartContext = createContext<CartContextValue | null>(null)
