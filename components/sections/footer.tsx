"use client"

import { Facebook, Instagram, ArrowUp } from "lucide-react"
import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"

const quickLinks = [
  { label: "La Carte", href: "#carte" },
  { label: "Réservation", href: "#reservation" },
  { label: "Infos Pratiques", href: "#infos" },
  { label: "Galerie", href: "#galerie" },
]

export function Footer() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer ref={ref} className="bg-noir py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Logo & Description */}
          <div
            className={`transition-all duration-700 ${
              isInView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <Link href="#hero" className="group inline-block">
              <h3 className="font-serif text-2xl font-semibold text-creme transition-colors duration-300 group-hover:text-or-ambre">
                La Terrasse d&apos;Hugo
              </h3>
            </Link>
            <p className="mt-3 font-sans text-sm leading-relaxed text-gris-pierre">
              Restaurant & Pub à Rodez
              <br />
              Face au Musée Soulages
            </p>
            <div className="mt-4 flex gap-3">
              {[
                { href: "https://www.facebook.com/kmjbrasserie", icon: Facebook, label: "Facebook" },
                { href: "https://www.instagram.com/la_terrasse_d_hugo", icon: Instagram, label: "Instagram" },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-creme/20 text-creme transition-all duration-300 hover:border-or-ambre hover:bg-or-ambre/10 hover:text-or-ambre hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-or-ambre">
              Navigation
            </h4>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link, index) => (
                <li
                  key={link.label}
                  className={`transition-all duration-500 ${
                    isInView ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${300 + index * 80}ms` }}
                >
                  <Link
                    href={link.href}
                    className="group inline-flex items-center font-sans text-sm text-creme/70 transition-colors hover:text-or-ambre"
                  >
                    <span className="mr-0 w-0 overflow-hidden text-or-ambre transition-all duration-300 group-hover:mr-2 group-hover:w-4">
                      &rarr;
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isInView ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-or-ambre">
              Contact
            </h4>
            <div className="mt-4 space-y-2 font-sans text-sm text-creme/70">
              <p>23 Avenue Victor Hugo</p>
              <p>12000 Rodez</p>
              <p>
                <Link href="tel:+33565688143" className="transition-colors hover:text-or-ambre">
                  05 65 68 81 43
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`mt-10 border-t border-creme/10 pt-6 transition-all duration-700 delay-500 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <div className="font-sans text-xs text-gris-pierre">
              <p>&copy; 2026 La Terrasse d&apos;Hugo — Tous droits réservés</p>
              <p className="mt-1">SLY FRED SAS — SIREN 903 638 476</p>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="https://irya.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs text-gris-pierre transition-colors hover:text-or-ambre"
              >
                Site réalisé par IRYA
              </Link>
              <button
                onClick={scrollToTop}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-creme/20 text-creme transition-all duration-300 hover:border-or-ambre hover:bg-or-ambre/10 hover:text-or-ambre"
                aria-label="Retour en haut"
              >
                <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
