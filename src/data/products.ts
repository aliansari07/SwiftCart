export interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
  description: string
  features: string[]
}

export const categories = ['electronics', 'clothing', 'home'] as const

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop',
    category: 'electronics',
    description: 'Premium wireless headphones with active noise cancellation, 30-hour battery life, and exceptional sound quality. Perfect for music lovers and professionals alike.',
    features: ['Active Noise Cancellation', '30-hour Battery Life', 'Bluetooth 5.0', 'Comfortable Over-ear Design', 'Built-in Microphone'],
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop',
    category: 'electronics',
    description: 'Next-generation smartwatch with health monitoring, GPS, and seamless smartphone integration. Stay connected and track your fitness goals.',
    features: ['Heart Rate Monitoring', 'GPS Tracking', 'Water Resistant 50m', '7-day Battery', 'Always-on Display'],
  },
  {
    id: '3',
    name: 'Laptop Stand',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&h=800&fit=crop',
    category: 'electronics',
    description: 'Ergonomic aluminum laptop stand with adjustable height and angle. Improves posture and keeps your laptop cool during long work sessions.',
    features: ['Aluminum Construction', '6 Height Settings', 'Cable Management', 'Fits 11-17" Laptops', 'Non-slip Silicone Pads'],
  },
  {
    id: '4',
    name: 'Premium T-Shirt',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop',
    category: 'clothing',
    description: 'Ultra-soft organic cotton t-shirt with a modern fit. Pre-shrunk and garment-dyed for a lived-in feel from day one.',
    features: ['100% Organic Cotton', 'Pre-shrunk Fabric', 'Modern Fit', 'Tagless Design', 'Machine Washable'],
  },
  {
    id: '5',
    name: 'Denim Jeans',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=800&fit=crop',
    category: 'clothing',
    description: 'Classic straight-leg jeans crafted from premium Japanese denim. Designed to age beautifully and last for years.',
    features: ['Japanese Selvedge Denim', 'Straight Leg Fit', 'Button Fly', 'Five-pocket Styling', 'Unwashed Raw Denim'],
  },
  {
    id: '6',
    name: 'Running Shoes',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop',
    category: 'clothing',
    description: 'Lightweight running shoes with responsive cushioning and breathable mesh upper. Engineered for daily training and long runs.',
    features: ['Responsive Foam Midsole', 'Breathable Mesh Upper', 'Durable Rubber Outsole', '8mm Drop', 'Reflective Details'],
  },
  {
    id: '7',
    name: 'Coffee Maker',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=800&fit=crop',
    category: 'home',
    description: 'Programmable coffee maker with thermal carafe. Brew up to 12 cups with customizable strength settings.',
    features: ['12-cup Capacity', 'Thermal Carafe', 'Programmable Timer', 'Brew Strength Control', 'Auto Shut-off'],
  },
  {
    id: '8',
    name: 'Desk Lamp',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&h=800&fit=crop',
    category: 'home',
    description: 'Modern LED desk lamp with adjustable brightness and color temperature. Touch controls and USB charging port.',
    features: ['5 Brightness Levels', '3 Color Temperatures', 'USB Charging Port', 'Touch Controls', 'Flexible Neck'],
  },
  {
    id: '9',
    name: 'Bluetooth Speaker',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&h=800&fit=crop',
    category: 'electronics',
    description: 'Portable Bluetooth speaker with 360° sound and 20-hour playtime. Waterproof and built for adventure.',
    features: ['360° Sound', '20-hour Battery', 'IPX7 Waterproof', 'Bluetooth 5.3', 'Party Pairing Mode'],
  },
]

export function getProduct(id: string) {
  return products.find((product) => product.id === id)
}
