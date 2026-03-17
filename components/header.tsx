"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { label: "Concept", href: "#concept" },
  { label: "Carte", href: "#carte" },
  { label: "Galerie", href: "#galerie" },
  { label: "Avis", href: "#avis" },
  { label: "Infos", href: "#infos" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Track active section
      const sections = navLinks.map((l) => l.href.replace("#", ""))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isMobileMenuOpen])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-noir/95 py-3 shadow-lg shadow-noir/20 backdrop-blur-md"
          : "bg-gradient-to-b from-noir/50 to-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="#hero" className="group flex items-center gap-2">
          <span className="font-serif text-xl font-semibold text-creme transition-all duration-300 group-hover:text-or-ambre group-hover:drop-shadow-[0_0_8px_rgba(200,150,78,0.4)] md:text-2xl">
            La Terrasse d&apos;Hugo
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`relative font-sans text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                activeSection === link.href.replace("#", "")
                  ? "text-or-ambre"
                  : "text-creme/80 hover:text-or-ambre"
              }`}
            >
              {link.label}
              {/* Active indicator dot */}
              <span
                className={`absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-or-ambre transition-all duration-300 ${
                  activeSection === link.href.replace("#", "")
                    ? "scale-100 opacity-100"
                    : "scale-0 opacity-0"
                }`}
              />
            </Link>
          ))}
          <Link
            href="tel:+33565688143"
            className="btn-hover-lift btn-shimmer flex items-center gap-2 rounded-sm bg-or-ambre px-5 py-2.5 font-sans text-sm font-semibold uppercase tracking-wider text-noir transition-all duration-300 hover:bg-cuivre"
          >
            <Phone className="h-4 w-4" />
            Réserver
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="relative flex h-10 w-10 items-center justify-center text-creme transition-transform duration-300 lg:hidden"
          aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <span className={`absolute transition-all duration-300 ${isMobileMenuOpen ? "rotate-0 opacity-100" : "rotate-90 opacity-0"}`}>
            <X className="h-6 w-6" />
          </span>
          <span className={`absolute transition-all duration-300 ${isMobileMenuOpen ? "-rotate-90 opacity-0" : "rotate-0 opacity-100"}`}>
            <Menu className="h-6 w-6" />
          </span>
        </button>
      </div>

      {/* Mobile Navigation — Full screen overlay */}
      <div
        className={`fixed inset-0 top-0 bg-noir/98 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          isMobileMenuOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-8 px-6">
          {navLinks.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`font-serif text-3xl font-medium text-creme/90 transition-all duration-500 hover:text-or-ambre ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? `${index * 80}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="tel:+33565688143"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`mt-4 btn-hover-lift btn-shimmer flex items-center gap-3 rounded-sm bg-or-ambre px-10 py-5 font-sans text-sm font-semibold uppercase tracking-wider text-noir transition-all duration-500 ${
              isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? `${navLinks.length * 80}ms` : "0ms" }}
          >
            <Phone className="h-5 w-5" />
            Réserver une table
          </Link>
        </nav>
      </div>
    </header>
  )
}
