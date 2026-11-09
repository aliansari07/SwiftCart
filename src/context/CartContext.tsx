import { useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { getProduct } from '../data/products'
import { CartContext } from './cart-context'
import type { CartContextValue, CartItem } from './cart-context'

const STORAGE_KEY = 'swiftcart-cart'
const FREE_SHIPPING_THRESHOLD = 50
const SHIPPING_COST = 5

function loadCart(): CartItem[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as { id: string; quantity: number }[]
    return parsed.flatMap(({ id, quantity }) => {
      const product = getProduct(id)
      return product && quantity > 0 ? [{ product, quantity }] : []
    })
  } catch {
    return []
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(loadCart)

  useEffect(() => {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(items.map(({ product, quantity }) => ({ id: product.id, quantity }))),
    )
  }, [items])

  const value = useMemo<CartContextValue>(() => {
    const subtotal = items.reduce((total, item) => total + item.product.price * item.quantity, 0)
    const shipping = subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST
    return {
      items,
      count: items.reduce((total, item) => total + item.quantity, 0),
      subtotal,
      shipping,
      total: subtotal + shipping,
      addItem: (productId, quantity = 1) => {
        const product = getProduct(productId)
        if (!product) return
        setItems((current) => {
          const existing = current.find((item) => item.product.id === productId)
          if (existing) {
            return current.map((item) =>
              item.product.id === productId
                ? { ...item, quantity: item.quantity + quantity }
                : item,
            )
          }
          return [...current, { product, quantity }]
        })
      },
      removeItem: (productId) => {
        setItems((current) => current.filter((item) => item.product.id !== productId))
      },
      updateQuantity: (productId, quantity) => {
        setItems((current) => {
          if (quantity <= 0) {
            return current.filter((item) => item.product.id !== productId)
          }
          return current.map((item) =>
            item.product.id === productId ? { ...item, quantity } : item,
          )
        })
      },
      clearCart: () => setItems([]),
    }
  }, [items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
