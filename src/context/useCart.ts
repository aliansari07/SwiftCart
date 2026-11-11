import { useContext } from 'react'
import type { CartContextValue } from './cart-context'
import { CartContext } from './cart-context'

/**
 * Retrieves cart state from the CartContext.
 * Throws if used outside of a CartProvider.
 */
export function useCart(): CartContextValue {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
