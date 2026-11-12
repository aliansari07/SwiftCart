import { useContext } from 'react'
import type { CartContextValue } from './cart-context'
import { CartContext } from './cart-context'

/**
 * Retrieves the cart context value.
 * Must be used within a CartProvider.
 * @returns The cart context value containing items, count, subtotal, shipping, total, and actions
 */
export function useCart(): CartContextValue {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
