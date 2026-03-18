"use client"

import { Phone, Calendar, Facebook, Instagram } from "lucide-react"
import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"

export function Reservation() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.2 })

  return (
    <section id="reservation" ref={ref} className="relative bg-noir py-16 md:py-24">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C8964E' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span className="font-handwritten text-xl text-or-ambre">On vous attend !</span>
          <h2 className="mt-2 font-serif text-2xl font-semibold text-creme sm:text-3xl md:text-4xl lg:text-5xl">
            Réservez votre table
          </h2>
          <p className="mt-4 font-sans text-creme/70">
            Du mardi au samedi, 8h30 → 2h00 • Terrasse ouverte aux beaux jours
          </p>
        </div>

        {/* CTA */}
        <div
          className={`mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row transition-all duration-700 delay-200 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Link
            href="tel:+33565688143"
            className="btn-hover-lift btn-shimmer animate-pulse-glow group inline-flex w-full items-center justify-center gap-3 rounded-sm bg-or-ambre px-6 py-3.5 font-sans text-sm font-semibold uppercase tracking-wider text-noir transition-all duration-300 hover:bg-cuivre sm:w-auto sm:px-8 sm:py-4"
          >
            <Phone className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
            Appeler
          </Link>
          <Link
            href="https://www.instagram.com/la_terrasse_d_hugo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hover-lift group inline-flex w-full items-center justify-center gap-3 rounded-sm border-2 border-creme/30 px-6 py-3.5 font-sans text-sm font-semibold uppercase tracking-wider text-creme transition-all duration-300 hover:border-creme hover:bg-creme/10 sm:w-auto sm:px-8 sm:py-4"
          >
            <Calendar className="h-5 w-5" />
            Réserver en ligne
          </Link>
        </div>

        {/* Socials */}
        <div
          className={`mt-10 flex items-center justify-center gap-4 transition-all duration-700 delay-400 ${
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
              className={`group flex h-12 w-12 items-center justify-center rounded-full border border-creme/20 text-creme transition-all duration-500 hover:border-or-ambre hover:bg-or-ambre/10 hover:text-or-ambre hover:scale-110 ${
                isInView ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
              style={{ transitionDelay: `${500 + index * 100}ms` }}
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
