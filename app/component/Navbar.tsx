'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-white/10 px-4 py-2 rounded-full flex gap-4 backdrop-blur-md shadow-xl">
      <Link href="#1" className="w-10 h-10 flex items-center justify-center rounded-full text-white hover:bg-white/20 transition text-sm font-medium">1</Link>
      <Link href="#2" className="w-10 h-10 flex items-center justify-center rounded-full text-white hover:bg-white/20 transition text-sm font-medium">2</Link>
      <Link href="#3" className="w-10 h-10 flex items-center justify-center rounded-full text-white hover:bg-white/20 transition text-sm font-medium">3</Link>
      <Link href="#4" className="w-10 h-10 flex items-center justify-center rounded-full text-white hover:bg-white/20 transition text-sm font-medium">4</Link>
      <Link href="#5" className="w-10 h-10 flex items-center justify-center rounded-full text-white hover:bg-white/20 transition text-sm font-medium">5</Link>
    </nav>
  )
}
