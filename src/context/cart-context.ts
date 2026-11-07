import { createContext } from 'react'
import type { Product } from '../data/products'

export interface CartItem {
  product: Product
  quantity: number
}

export interface CartContextValue {
  items: CartItem[]
  count: number
  subtotal: number
  addItem: (productId: string, quantity?: number) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
}

export const CartContext = createContext<CartContextValue | null>(null)
