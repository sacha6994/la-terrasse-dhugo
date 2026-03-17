"use client"

import {
  MapPin,
  Phone,
  Clock,
  CreditCard,
  Wifi,
  TreePine,
  Accessibility,
  PawPrint,
  Car,
  Navigation,
} from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const openingHours = [
  { day: "Lundi", hours: "Fermé", closed: true },
  { day: "Mardi", hours: "8h30 - 2h00", closed: false },
  { day: "Mercredi", hours: "8h30 - 2h00", closed: false },
  { day: "Jeudi", hours: "8h30 - 2h00", closed: false },
  { day: "Vendredi", hours: "8h30 - 2h00", closed: false },
  { day: "Samedi", hours: "8h30 - 2h00", closed: false },
  { day: "Dimanche", hours: "Fermé", closed: true },
]

const amenities = [
  { icon: Wifi, label: "WiFi gratuit" },
  { icon: TreePine, label: "Terrasse 120 places" },
  { icon: Accessibility, label: "Accès PMR" },
  { icon: PawPrint, label: "Animaux acceptés" },
  { icon: Car, label: "Parking à proximité" },
]

export function Info() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section id="infos" ref={ref} className="bg-creme-light py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span className="font-handwritten text-xl text-or-ambre md:text-2xl">
            Nous retrouver
          </span>
          <h2 className="mt-2 font-serif text-4xl font-semibold text-noir md:text-5xl lg:text-6xl">
            Infos Pratiques
          </h2>
          <div
            className={`mx-auto mt-6 h-px bg-or-ambre transition-all duration-1000 delay-300 ${
              isInView ? "w-24 opacity-100" : "w-0 opacity-0"
            }`}
          />
        </div>

        {/* ── MAP FULL-WIDTH en haut ── */}
        <div
          className={`mt-16 transition-all duration-700 delay-200 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative overflow-hidden rounded-xl shadow-2xl shadow-noir/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.8821!2d2.5757!3d44.3549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s23+Avenue+Victor+Hugo%2C+12000+Rodez!5e0!3m2!1sfr!2sfr!4v1709000000000"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte Google Maps - La Terrasse d'Hugo"
              className="w-full grayscale transition-all duration-700 hover:grayscale-0"
            />
            {/* Overlay card — adresse sur la map */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-lg bg-noir/90 px-5 py-4 backdrop-blur-md sm:left-4 sm:right-auto">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-or-ambre/20">
                  <MapPin className="h-5 w-5 text-or-ambre" />
                </div>
                <div>
                  <p className="font-sans text-sm font-medium text-creme">23 Avenue Victor Hugo</p>
                  <p className="font-sans text-xs text-creme/60">12000 Rodez — Face au Musée Soulages</p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=23+Avenue+Victor+Hugo+12000+Rodez"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 hidden items-center gap-2 rounded-sm bg-or-ambre px-4 py-2 font-sans text-xs font-semibold uppercase tracking-wider text-noir transition-all duration-300 hover:bg-cuivre sm:inline-flex"
              >
                <Navigation className="h-3.5 w-3.5" />
                Itinéraire
              </a>
            </div>
          </div>
        </div>

        {/* ── Infos en 3 colonnes sous la map ── */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* Colonne 1 — Contact */}
          <div
            className={`rounded-xl bg-creme p-6 shadow-sm transition-all duration-700 delay-300 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="group flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-olive/10 transition-all duration-500 group-hover:bg-olive/20 group-hover:scale-110">
                <Phone className="h-6 w-6 text-olive" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-noir">Téléphone</h3>
                <a
                  href="tel:+33565688143"
                  className="mt-1 inline-block font-sans text-lg text-noir transition-colors hover:text-or-ambre"
                >
                  05 65 68 81 43
                </a>
                <p className="mt-2 font-sans text-xs text-gris-pierre">
                  À deux pas du stade, du cinéma et de l&apos;amphithéâtre
                </p>
              </div>
            </div>

            <div className="group mt-6 flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-olive/10 transition-all duration-500 group-hover:bg-olive/20 group-hover:scale-110">
                <CreditCard className="h-6 w-6 text-olive" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-noir">Paiement</h3>
                <p className="mt-1 font-sans text-sm text-gris-pierre">
                  CB, Visa, Mastercard, Espèces, Tickets Restaurant
                </p>
              </div>
            </div>
          </div>

          {/* Colonne 2 — Horaires */}
          <div
            className={`rounded-xl bg-creme p-6 shadow-sm transition-all duration-700 delay-400 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-olive/10">
                <Clock className="h-6 w-6 text-olive" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-noir">Horaires</h3>
            </div>
            <div className="space-y-2">
              {openingHours.map((item, index) => (
                <div
                  key={item.day}
                  className={`flex justify-between border-b border-noir/10 pb-2 transition-all duration-500 ${
                    isInView ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${500 + index * 60}ms` }}
                >
                  <span className="font-sans text-sm text-gris-pierre">{item.day}</span>
                  <span
                    className={`font-sans text-sm ${
                      item.closed ? "text-gris-pierre" : "font-medium text-noir"
                    }`}
                  >
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne 3 — Services */}
          <div
            className={`rounded-xl bg-creme p-6 shadow-sm transition-all duration-700 delay-500 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h3 className="mb-4 font-serif text-xl font-semibold text-noir">Nos services</h3>
            <div className="space-y-3">
              {amenities.map((amenity, index) => (
                <div
                  key={amenity.label}
                  className={`group flex items-center gap-3 rounded-lg bg-olive/5 px-4 py-3 transition-all duration-500 hover:bg-olive/10 ${
                    isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${600 + index * 80}ms` }}
                >
                  <amenity.icon className="h-5 w-5 text-olive transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-sans text-sm text-noir">{amenity.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
