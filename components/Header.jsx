"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full border-b border-[#E6D5B8] backdrop-blur-md bg-[#FAFAF7]/80 sticky top-0 z-50 transition-all duration-300">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-center relative">

        {/* MOBILE BUTTON (SADECE EKLENDİ) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden absolute left-6 text-xl"
        >
          ☰
        </button>

        {/* CENTER - NAV */}
        <nav className="hidden md:flex gap-10 whitespace-nowrap text-[14px] tracking-[0.15em] uppercase text-gray-700">

          <Link
            href="/"
            className={`transition duration-300 ${
              pathname === "/" ? "text-[#C5A880]" : "hover:text-[#C5A880] hover:opacity-70"
            }`}
          >
            Anasayfa
          </Link>

          <Link
            href="/about"
            className={`transition duration-300 ${
              pathname === "/about" ? "text-[#C5A880]" : "hover:text-[#C5A880] hover:opacity-70"
            }`}
          >
            Hakkımızda
          </Link>

          <Link
            href="/collections"
            className={`transition duration-300 ${
              pathname.startsWith("/collections")
                ? "text-[#C5A880]"
                : "hover:text-[#C5A880] hover:opacity-70"
            }`}
          >
            Koleksiyonlar
          </Link>

          <Link
            href="/build-box"
            className={`transition duration-300 ${
              pathname === "/build-box"
                ? "text-[#C5A880]"
                : "hover:text-[#C5A880] hover:opacity-70"
            }`}
          >
            Kendi Kutunu Tasarla
          </Link>

          <Link
            href="/iletisim"
            className={`transition duration-300 ${
              pathname === "/iletisim"
                ? "text-[#C5A880]"
                : "hover:text-[#C5A880] hover:opacity-70"
            }`}
          >
            İletişim
          </Link>

        </nav>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 text-[14px] uppercase tracking-[0.15em] bg-[#FAFAF7]">

          <Link href="/" onClick={() => setOpen(false)}>Anasayfa</Link>
          <Link href="/about" onClick={() => setOpen(false)}>Hakkımızda</Link>
          <Link href="/collections" onClick={() => setOpen(false)}>Koleksiyonlar</Link>
          <Link href="/build-box" onClick={() => setOpen(false)}>Kendi Kutunu Tasarla</Link>
          <Link href="/iletisim" onClick={() => setOpen(false)}>İletişim</Link>

        </div>
      )}

    </header>
  )
}