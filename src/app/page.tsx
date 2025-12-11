import { redirect } from 'next/navigation'

export default function Home() {
  // Temporarily route all traffic to the Coming Soon experience
  redirect('/coming-soon')
}

