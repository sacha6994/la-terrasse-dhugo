"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Phone, UtensilsCrossed } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Slight delay so the page paints before animations start
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Image with parallax-style overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop"
          alt="Terrasse du restaurant La Terrasse d'Hugo"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-noir/70 via-noir/50 to-noir/80" />
      </div>

      {/* Decorative floating elements */}
      <div className="absolute left-10 top-1/4 hidden opacity-20 lg:block">
        <UtensilsCrossed className="h-16 w-16 animate-float text-or-ambre" strokeWidth={1} />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 text-center">
        {/* Pre-title */}
        <div
          className={`mb-6 transition-all duration-1000 ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <span className="font-handwritten text-2xl tracking-wide text-or-ambre md:text-3xl">
            Bienvenue à
          </span>
        </div>

        {/* Main title */}
        <h1
          className={`font-serif text-5xl font-semibold tracking-tight text-creme transition-all duration-1000 delay-200 md:text-7xl lg:text-8xl ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span className="text-balance">La Terrasse d&apos;Hugo</span>
        </h1>

        {/* Animated divider */}
        <div
          className={`mx-auto mt-6 h-px bg-or-ambre transition-all duration-1000 delay-500 ${
            loaded ? "w-32 opacity-100" : "w-0 opacity-0"
          }`}
        />

        {/* Subtitle */}
        <p
          className={`mt-4 font-sans text-lg font-medium uppercase tracking-[0.3em] text-creme/80 transition-all duration-1000 delay-300 md:text-xl ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Restaurant & Pub — Rodez
        </p>

        {/* Quote */}
        <p
          className={`mx-auto mt-8 max-w-xl font-serif text-xl text-creme/90 transition-all duration-1000 delay-500 md:text-2xl ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          &ldquo;Vous êtes gourmand ? Vous êtes au bon endroit !&rdquo;
        </p>

        {/* CTA Buttons */}
        <div
          className={`mt-12 flex flex-col items-center justify-center gap-4 transition-all duration-1000 delay-700 sm:flex-row ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Link
            href="tel:+33565688143"
            className="btn-hover-lift btn-shimmer animate-pulse-glow group inline-flex items-center gap-3 rounded-sm bg-or-ambre px-8 py-4 font-sans text-sm font-semibold uppercase tracking-wider text-noir transition-all duration-300 hover:bg-cuivre"
          >
            <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
            Réserver une table
          </Link>
          <Link
            href="#carte"
            className="btn-border-draw group inline-flex items-center gap-2 rounded-sm border-2 border-creme/30 bg-transparent px-8 py-4 font-sans text-sm font-semibold uppercase tracking-wider text-creme transition-all duration-300 hover:border-creme hover:bg-creme/10"
          >
            Découvrir la carte
            <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <Link
        href="#concept"
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
        aria-label="Défiler vers le bas"
      >
        <div className="animate-scroll-indicator flex flex-col items-center gap-2 text-creme/60 transition-colors hover:text-or-ambre">
          <span className="text-xs uppercase tracking-widest">Découvrir</span>
          <ChevronDown className="h-6 w-6" />
        </div>
      </Link>
    </section>
  )
}
