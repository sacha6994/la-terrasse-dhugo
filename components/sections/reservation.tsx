"use client"

import { Phone, Calendar, Facebook, Instagram } from "lucide-react"
import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"

export function Reservation() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section id="reservation" ref={ref} className="relative bg-noir py-24 md:py-32">
      {/* Background Texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C8964E' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Content */}
        <div
          className={`text-center transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span className="font-handwritten text-xl text-or-ambre md:text-2xl">
            On vous attend !
          </span>
          <h2 className="mt-2 font-serif text-4xl font-semibold text-creme md:text-5xl lg:text-6xl">
            Réservez votre table
          </h2>
          <div
            className={`mx-auto mt-6 h-px bg-or-ambre transition-all duration-1000 delay-300 ${
              isInView ? "w-24 opacity-100" : "w-0 opacity-0"
            }`}
          />

          <p className="mx-auto mt-8 max-w-xl font-sans text-lg text-creme/80">
            Du mardi au samedi, de 8h30 à 2h00
            <br />
            <span className="text-gris-pierre">Terrasse ouverte aux beaux jours</span>
          </p>
        </div>

        {/* CTA Buttons — with rich hover effects */}
        <div
          className={`mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-700 delay-200 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Link
            href="tel:+33565688143"
            className="btn-hover-lift btn-shimmer animate-pulse-glow group inline-flex w-full items-center justify-center gap-3 rounded-sm bg-or-ambre px-10 py-5 font-sans text-sm font-semibold uppercase tracking-wider text-noir transition-all duration-300 hover:bg-cuivre sm:w-auto"
          >
            <Phone className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
            Appeler
          </Link>
          <Link
            href="https://www.instagram.com/la_terrasse_d_hugo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hover-lift btn-border-draw group inline-flex w-full items-center justify-center gap-3 rounded-sm border-2 border-creme/30 bg-transparent px-10 py-5 font-sans text-sm font-semibold uppercase tracking-wider text-creme transition-all duration-300 hover:border-creme hover:bg-creme/10 sm:w-auto"
          >
            <Calendar className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
            Réserver en ligne
          </Link>
        </div>

        {/* Social Links — animated entrance */}
        <div
          className={`mt-16 flex items-center justify-center gap-6 transition-all duration-700 delay-400 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {[
            { href: "https://www.facebook.com/kmjbrasserie", icon: Facebook, label: "Facebook" },
            { href: "https://www.instagram.com/la_terrasse_d_hugo", icon: Instagram, label: "Instagram" },
          ].map((social, index) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex h-14 w-14 items-center justify-center rounded-full border border-creme/20 text-creme transition-all duration-500 hover:border-or-ambre hover:bg-or-ambre/10 hover:text-or-ambre hover:scale-110 ${
                isInView ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
              aria-label={social.label}
            >
              <social.icon className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
