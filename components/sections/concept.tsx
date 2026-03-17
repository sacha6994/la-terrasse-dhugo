"use client"

import { UtensilsCrossed, TreePine, Clock } from "lucide-react"
import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"

const highlights = [
  {
    icon: UtensilsCrossed,
    title: "Pizzas & burgers maison",
    description: "Une carte généreuse de produits frais préparés sur place",
  },
  {
    icon: TreePine,
    title: "120 couverts en terrasse",
    description: "Face au Musée Soulages, sous les arbres",
  },
  {
    icon: Clock,
    title: "Service jusqu'à 2h",
    description: "Idéal après le cinéma ou un spectacle",
  },
]

export function Concept() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.15 })

  return (
    <section id="concept" ref={ref} className="bg-creme py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header — slide up */}
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span className="font-handwritten text-xl text-or-ambre md:text-2xl">Depuis 2021</span>
          <h2 className="mt-2 font-serif text-4xl font-semibold text-noir md:text-5xl lg:text-6xl">
            Notre Histoire
          </h2>
          <div
            className={`mx-auto mt-6 h-px bg-or-ambre transition-all duration-1000 delay-300 ${
              isInView ? "w-24 opacity-100" : "w-0 opacity-0"
            }`}
          />
        </div>

        {/* Description — slide in from left */}
        <div
          className={`mx-auto mt-12 max-w-3xl text-center transition-all duration-700 delay-200 ${
            isInView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`}
        >
          <p className="font-sans text-lg leading-relaxed text-gris-pierre md:text-xl">
            Au cœur de Rodez, face au célèbre Musée Soulages,{" "}
            <strong className="text-noir">La Terrasse d&apos;Hugo</strong> vous accueille dans une
            ambiance chaleureuse et conviviale. Notre brasserie moderne propose une cuisine maison
            variée — burgers généreux, pizzas artisanales, spécialités aveyronnaises et options
            végétariennes — dans un cadre unique entre restaurant et pub.
          </p>
        </div>

        {/* Highlights — staggered scale-up */}
        <div className="mt-16 grid gap-8 md:mt-20 md:grid-cols-3 md:gap-12">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className={`card-tilt group text-center transition-all duration-700 ${
                isInView ? "translate-y-0 scale-100 opacity-100" : "translate-y-10 scale-95 opacity-0"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-olive/10 transition-all duration-500 group-hover:bg-olive/20 group-hover:shadow-lg group-hover:shadow-olive/10">
                <item.icon
                  className="h-10 w-10 text-olive transition-transform duration-500 group-hover:scale-110"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-serif text-xl font-semibold text-noir md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 font-sans text-gris-pierre">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Image — reveal with scale */}
        <div
          className={`mt-16 overflow-hidden rounded-lg transition-all duration-1000 delay-600 md:mt-24 ${
            isInView ? "translate-y-0 scale-100 opacity-100" : "translate-y-10 scale-[0.97] opacity-0"
          }`}
        >
          <div className="relative aspect-[16/9] md:aspect-[21/9]">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop"
              alt="Intérieur chaleureux du restaurant La Terrasse d'Hugo"
              fill
              className="object-cover transition-transform duration-[2s] hover:scale-105"
              sizes="(max-width: 768px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
