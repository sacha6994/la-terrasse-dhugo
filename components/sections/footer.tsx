"use client"

import { Facebook, Instagram, ArrowUp, Smartphone } from "lucide-react"
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
        {/* App Download Banner */}
        <div
          className={`mb-10 overflow-hidden rounded-xl bg-gradient-to-r from-or-ambre/10 via-or-ambre/5 to-transparent border border-or-ambre/20 p-6 md:p-8 transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-or-ambre/20">
                <Smartphone className="h-7 w-7 text-or-ambre" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-semibold text-creme">
                  Téléchargez notre application
                </h4>
                <p className="mt-0.5 font-sans text-sm text-creme/60">
                  Réservez, consultez la carte et recevez nos offres exclusives
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              {/* App Store */}
              <Link
                href="#"
                className="group flex items-center gap-2 rounded-lg bg-creme/10 px-5 py-3 transition-all duration-300 hover:bg-creme/15"
              >
                <svg className="h-6 w-6 text-creme" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <span className="block text-[10px] leading-none text-creme/60">Bientôt sur</span>
                  <span className="block text-sm font-semibold leading-tight text-creme">App Store</span>
                </div>
              </Link>
              {/* Google Play */}
              <Link
                href="#"
                className="group flex items-center gap-2 rounded-lg bg-creme/10 px-5 py-3 transition-all duration-300 hover:bg-creme/15"
              >
                <svg className="h-6 w-6 text-creme" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.38c.32.17.68.18 1.02.01l11.5-6.63-2.74-2.74-9.78 9.36zM.53 1.27C.2 1.55 0 2.03 0 2.65v18.7c0 .62.2 1.1.53 1.38l.07.06 10.47-10.47v-.24L.6 1.21l-.07.06zM16.44 14.02l3.07 1.77c.87.5 .87 1.31 0 1.81l-3.39 1.96-3.02-3.02 3.34-2.52zM4.51.19l11.18 6.45-2.74 2.74L3.18.62C3.5.44 3.86.43 4.2.59l.31-.4z"/>
                </svg>
                <div className="text-left">
                  <span className="block text-[10px] leading-none text-creme/60">Bientôt sur</span>
                  <span className="block text-sm font-semibold leading-tight text-creme">Google Play</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

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
