export default function LoadingSpinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  }

  return (
    <div className={`${sizes[size]} border-4 border-primary/20 border-t-primary rounded-full animate-spin`}></div>
  )
}

