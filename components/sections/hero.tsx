"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

function TextReveal({ text, delay = 0, isVisible = false }: { text: string; delay?: number; isVisible?: boolean }) {
  return (
    <span aria-label={text}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className={`inline-block transition-all duration-500 ${
            isVisible
              ? "translate-y-0 opacity-100 blur-0"
              : "translate-y-5 opacity-0 blur-[4px]"
          }`}
          style={{
            transitionDelay: isVisible ? `${delay + i * 35}ms` : "0ms",
          }}
          aria-hidden="true"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  )
}

export function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1300) // After page loader
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Video Background with fallback image */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop"
          className="hero-video"
        >
          {/* Free stock video — terrasse restaurant ambiance */}
          <source
            src="https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Fallback image for browsers that don't support video */}
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

        {/* Main title — letter-by-letter reveal */}
        <h1 className="font-serif text-5xl font-semibold tracking-tight text-creme md:text-7xl lg:text-8xl">
          <TextReveal text="La Terrasse" delay={400} isVisible={loaded} />
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          <TextReveal text="d'Hugo" delay={800} isVisible={loaded} />
        </h1>

        {/* Animated divider */}
        <div
          className={`mx-auto mt-6 h-px bg-or-ambre transition-all duration-1000 delay-1000 ${
            loaded ? "w-32 opacity-100" : "w-0 opacity-0"
          }`}
        />

        {/* Subtitle */}
        <p
          className={`mt-4 font-sans text-lg font-medium uppercase tracking-[0.3em] text-creme/80 transition-all duration-1000 delay-[1100ms] md:text-xl ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Restaurant & Pub — Rodez
        </p>

        {/* Quote */}
        <p
          className={`mx-auto mt-8 max-w-xl font-serif text-xl italic text-creme/90 transition-all duration-1000 delay-[1300ms] md:text-2xl ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          &ldquo;Vous êtes gourmand ? Vous êtes au bon endroit !&rdquo;
        </p>

        {/* CTA Buttons */}
        <div
          className={`mt-12 flex flex-col items-center justify-center gap-4 transition-all duration-1000 delay-[1500ms] sm:flex-row ${
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
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-[1800ms] ${
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
