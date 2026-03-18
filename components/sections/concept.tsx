"use client"

import { UtensilsCrossed, TreePine, Clock, MapPin } from "lucide-react"
import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"

const stats = [
  { value: "120", label: "Couverts en terrasse", suffix: "" },
  { value: "2h", label: "Service tardif", suffix: "" },
  { value: "4.5", label: "Note Google", suffix: "/5" },
]

export function Concept() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section id="concept" ref={ref} className="bg-creme py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── HERO BLOCK : Texte + Image superposée ── */}
        <div className="relative">
          {/* Background decorative text */}
          <span
            className={`pointer-events-none absolute -left-4 -top-8 select-none font-serif text-[8rem] font-bold leading-none text-noir/[0.03] transition-all duration-1000 md:text-[12rem] lg:text-[16rem] ${
              isInView ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
            }`}
          >
            Hugo
          </span>

          <div className="relative grid items-center gap-8 lg:grid-cols-5 lg:gap-12">
            {/* Left — Text (3 cols) */}
            <div
              className={`relative z-10 lg:col-span-3 transition-all duration-700 ${
                isInView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              <span className="font-handwritten text-xl text-or-ambre">Depuis 2021</span>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-noir sm:text-4xl md:text-5xl lg:text-6xl">
                Notre<br />Histoire
              </h2>
              <div
                className={`mt-4 h-1 rounded-full bg-or-ambre transition-all duration-1000 delay-300 ${
                  isInView ? "w-20 opacity-100" : "w-0 opacity-0"
                }`}
              />
              <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-gris-pierre md:text-lg">
                Au cœur de Rodez, face au célèbre Musée Soulages,{" "}
                <strong className="text-noir">La Terrasse d&apos;Hugo</strong> vous accueille
                dans une ambiance chaleureuse et conviviale.
              </p>
              <p className="mt-4 max-w-lg font-sans text-base leading-relaxed text-gris-pierre">
                Cuisine maison variée — burgers généreux, pizzas artisanales,
                spécialités aveyronnaises et options végétariennes — dans un cadre unique
                entre restaurant et pub.
              </p>

              {/* Location tag */}
              <div
                className={`mt-6 inline-flex items-center gap-2 rounded-full bg-olive/10 px-4 py-2 transition-all duration-700 delay-500 ${
                  isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <MapPin className="h-4 w-4 text-olive" />
                <span className="font-sans text-xs text-noir sm:text-sm">
                  23 Av. Victor Hugo, Rodez — Face au Musée Soulages
                </span>
              </div>
            </div>

            {/* Right — Image stack (2 cols) */}
            <div className="relative lg:col-span-2">
              {/* Main image */}
              <div
                className={`relative overflow-hidden rounded-2xl shadow-2xl shadow-noir/15 transition-all duration-1000 delay-200 ${
                  isInView ? "translate-y-0 rotate-0 scale-100 opacity-100" : "translate-y-10 rotate-2 scale-95 opacity-0"
                }`}
              >
                <div className="relative aspect-square sm:aspect-[3/4]">
                  <Image
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop"
                    alt="Intérieur du restaurant La Terrasse d'Hugo"
                    fill
                    className="object-cover transition-transform duration-[3s] hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir/30 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating secondary image — overlapping */}
              <div
                className={`absolute -bottom-6 -left-6 z-20 hidden overflow-hidden rounded-xl border-4 border-creme shadow-xl md:block transition-all duration-1000 delay-500 ${
                  isInView ? "translate-x-0 translate-y-0 opacity-100" : "-translate-x-6 translate-y-6 opacity-0"
                }`}
              >
                <div className="relative h-36 w-36 lg:h-44 lg:w-44">
                  <Image
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2574&auto=format&fit=crop"
                    alt="Terrasse du restaurant"
                    fill
                    className="object-cover"
                    sizes="180px"
                  />
                </div>
              </div>

              {/* Floating badge */}
              <div
                className={`absolute -right-3 top-6 z-20 hidden rounded-xl bg-noir px-4 py-3 shadow-xl md:block transition-all duration-700 delay-700 ${
                  isInView ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
                }`}
              >
                <span className="block font-handwritten text-2xl text-or-ambre">5 ans</span>
                <span className="block font-sans text-xs text-creme/70">de gourmandise</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── STATS BAR ── */}
        <div
          className={`mt-12 grid grid-cols-3 gap-2 rounded-2xl bg-noir p-4 sm:mt-16 sm:gap-4 sm:p-6 md:p-8 transition-all duration-700 delay-300 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              <span className="font-serif text-2xl font-semibold text-or-ambre sm:text-3xl md:text-4xl">
                {stat.value}
                <span className="text-lg text-or-ambre/70">{stat.suffix}</span>
              </span>
              <span className="mt-1 block font-sans text-xs text-creme/60 md:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* ── HIGHLIGHTS ── */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            {
              icon: UtensilsCrossed,
              title: "Fait maison",
              desc: "Pizzas, burgers et desserts préparés chaque jour avec des produits frais",
            },
            {
              icon: TreePine,
              title: "Terrasse unique",
              desc: "120 places sous les arbres, face au Musée Soulages",
            },
            {
              icon: Clock,
              title: "Service tardif",
              desc: "Ouvert jusqu'à 2h du matin — idéal après le cinéma ou un spectacle",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-xl bg-creme-light p-6 transition-all duration-700 ${
                isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              {/* Hover accent */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-or-ambre/0 transition-all duration-500 group-hover:bg-or-ambre" />

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-olive/10 transition-all duration-500 group-hover:bg-olive/20 group-hover:scale-110">
                  <item.icon className="h-6 w-6 text-olive" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-noir">{item.title}</h3>
                  <p className="mt-1 font-sans text-sm text-gris-pierre">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
