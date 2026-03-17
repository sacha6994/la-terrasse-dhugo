"use client"

import { useEffect, useState } from "react"
import { Phone } from "lucide-react"
import Link from "next/link"

export function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile, { passive: true })

    const handleScroll = () => {
      // Show after scrolling past the hero section
      setVisible(window.scrollY > window.innerHeight * 0.8)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("resize", checkMobile)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  if (!isMobile) return null

  return (
    <div
      className={`fixed bottom-6 left-4 right-4 z-[90] transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <Link
        href="tel:+33565688143"
        className="btn-shimmer animate-pulse-glow flex items-center justify-center gap-3 rounded-lg bg-or-ambre px-6 py-4 font-sans text-sm font-semibold uppercase tracking-wider text-noir shadow-2xl shadow-or-ambre/30 transition-all duration-300 active:scale-95"
      >
        <Phone className="h-5 w-5" />
        Réserver une table
      </Link>
    </div>
  )
}
