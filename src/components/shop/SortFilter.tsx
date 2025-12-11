'use client'

interface SortFilterProps {
  sortBy: string
  onSortChange: (sortBy: string) => void
}

export default function SortFilter({ sortBy, onSortChange }: SortFilterProps) {
  return (
    <select
      value={sortBy}
      onChange={(e) => onSortChange(e.target.value)}
      className="input font-medium cursor-pointer"
      style={{ maxWidth: '200px' }}
    >
      <option value="createdAt">New Arrivals</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
      <option value="name">Name: A to Z</option>
    </select>
  )
}

