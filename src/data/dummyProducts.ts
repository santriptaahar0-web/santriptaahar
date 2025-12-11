export interface DummyProduct {
  id: number
  name: string
  slug: string
  shortDescription: string
  price: number
  compareAtPrice?: number
  images: Array<{ imageUrl: string }>
  category: {
    name: string
    slug: string
  }
  isNewArrival?: boolean
  isFeatured?: boolean
}

export interface DummyCategory {
  id: number
  name: string
  slug: string
}

export const dummyCategories: DummyCategory[] = [
  { id: 1, name: 'Spirulina Chikkis', slug: 'spirulina-chikkis' },
  { id: 2, name: 'Energy Bars', slug: 'energy-bars' },
  { id: 3, name: 'Spirulina Powder', slug: 'spirulina-powder' },
  { id: 4, name: 'Smoothie Mixes', slug: 'smoothie-mixes' },
  { id: 5, name: 'Capsules', slug: 'capsules' },
]

export const dummyProducts: DummyProduct[] = [
  {
    id: 1,
    name: 'Premium Spirulina Chikki',
    slug: 'premium-spirulina-chikki',
    shortDescription: 'Crunchy, nutritious chikki made with organic spirulina and jaggery. Perfect healthy snack.',
    price: 299,
    compareAtPrice: 349,
    images: [{ imageUrl: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400&h=400&fit=crop' }],
    category: { name: 'Spirulina Chikkis', slug: 'spirulina-chikkis' },
    isNewArrival: true,
    isFeatured: true,
  },
  {
    id: 2,
    name: 'Spirulina Energy Bar - Chocolate',
    slug: 'spirulina-energy-bar-chocolate',
    shortDescription: 'Delicious chocolate-flavored energy bar packed with spirulina protein. Great for on-the-go nutrition.',
    price: 249,
    compareAtPrice: 299,
    images: [{ imageUrl: 'https://images.unsplash.com/photo-1606312619070-d48b4cbc6b8c?w=400&h=400&fit=crop' }],
    category: { name: 'Energy Bars', slug: 'energy-bars' },
    isNewArrival: true,
  },
  {
    id: 3,
    name: 'Organic Spirulina Powder',
    slug: 'organic-spirulina-powder',
    shortDescription: '100% pure organic spirulina powder. Add to smoothies, juices, or water for daily nutrition boost.',
    price: 599,
    compareAtPrice: 699,
    images: [{ imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aaeeb?w=400&h=400&fit=crop' }],
    category: { name: 'Spirulina Powder', slug: 'spirulina-powder' },
    isFeatured: true,
  },
  {
    id: 4,
    name: 'Spirulina Chikki - Almond',
    slug: 'spirulina-chikki-almond',
    shortDescription: 'Crunchy almond spirulina chikki. Rich in protein and healthy fats. Perfect for kids and adults.',
    price: 349,
    images: [{ imageUrl: 'https://images.unsplash.com/photo-1628088062854-d1870b45eabd?w=400&h=400&fit=crop' }],
    category: { name: 'Spirulina Chikkis', slug: 'spirulina-chikkis' },
  },
  {
    id: 5,
    name: 'Berry Blast Smoothie Mix',
    slug: 'berry-blast-smoothie-mix',
    shortDescription: 'Pre-mixed spirulina smoothie powder with natural berry flavors. Just add water and blend!',
    price: 399,
    compareAtPrice: 449,
    images: [{ imageUrl: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=400&fit=crop' }],
    category: { name: 'Smoothie Mixes', slug: 'smoothie-mixes' },
    isNewArrival: true,
  },
  {
    id: 6,
    name: 'Spirulina Capsules - 60 Count',
    slug: 'spirulina-capsules-60',
    shortDescription: 'Easy-to-swallow spirulina capsules. No taste, maximum nutrition. Perfect for daily supplementation.',
    price: 499,
    compareAtPrice: 599,
    images: [{ imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop' }],
    category: { name: 'Capsules', slug: 'capsules' },
    isFeatured: true,
  },
  {
    id: 7,
    name: 'Spirulina Energy Bar - Peanut',
    slug: 'spirulina-energy-bar-peanut',
    shortDescription: 'Protein-rich energy bar with roasted peanuts and spirulina. Sustained energy for active lifestyle.',
    price: 229,
    images: [{ imageUrl: 'https://images.unsplash.com/photo-1606312619070-d48b4cbc6b8c?w=400&h=400&fit=crop' }],
    category: { name: 'Energy Bars', slug: 'energy-bars' },
  },
  {
    id: 8,
    name: 'Spirulina Chikki - Sesame',
    slug: 'spirulina-chikki-sesame',
    shortDescription: 'Traditional chikki with a modern twist. Sesame seeds and spirulina for a nutritious treat.',
    price: 279,
    compareAtPrice: 329,
    images: [{ imageUrl: 'https://images.unsplash.com/photo-1628088062854-d1870b45eabd?w=400&h=400&fit=crop' }],
    category: { name: 'Spirulina Chikkis', slug: 'spirulina-chikkis' },
  },
  {
    id: 9,
    name: 'Tropical Smoothie Mix',
    slug: 'tropical-smoothie-mix',
    shortDescription: 'Exotic tropical flavors with spirulina. Mango, pineapple, and coconut blend for a refreshing drink.',
    price: 379,
    images: [{ imageUrl: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=400&fit=crop' }],
    category: { name: 'Smoothie Mixes', slug: 'smoothie-mixes' },
  },
  {
    id: 10,
    name: 'Premium Spirulina Powder - 500g',
    slug: 'premium-spirulina-powder-500g',
    shortDescription: 'Large pack of premium organic spirulina powder. Best value for daily users and families.',
    price: 999,
    compareAtPrice: 1199,
    images: [{ imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aaeeb?w=400&h=400&fit=crop' }],
    category: { name: 'Spirulina Powder', slug: 'spirulina-powder' },
    isFeatured: true,
  },
  {
    id: 11,
    name: 'Spirulina Capsules - 120 Count',
    slug: 'spirulina-capsules-120',
    shortDescription: 'Double pack of spirulina capsules. Great value for 2-month supply. Pure nutrition, no additives.',
    price: 899,
    compareAtPrice: 1099,
    images: [{ imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop' }],
    category: { name: 'Capsules', slug: 'capsules' },
  },
  {
    id: 12,
    name: 'Spirulina Energy Bar - Mixed Nuts',
    slug: 'spirulina-energy-bar-mixed-nuts',
    shortDescription: 'Premium energy bar with almonds, cashews, and walnuts. Rich in protein and healthy fats.',
    price: 279,
    images: [{ imageUrl: 'https://images.unsplash.com/photo-1606312619070-d48b4cbc6b8c?w=400&h=400&fit=crop' }],
    category: { name: 'Energy Bars', slug: 'energy-bars' },
    isNewArrival: true,
  },
]

