"use client"

import { UtensilsCrossed, TreePine, Clock } from "lucide-react"
import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"

const highlights = [
  {
    icon: UtensilsCrossed,
    title: "Pizzas & burgers maison",
    description: "Produits frais préparés sur place",
  },
  {
    icon: TreePine,
    title: "120 couverts en terrasse",
    description: "Face au Musée Soulages",
  },
  {
    icon: Clock,
    title: "Service jusqu'à 2h",
    description: "Idéal après le cinéma",
  },
]

export function Concept() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.15 })

  return (
    <section id="concept" ref={ref} className="bg-creme py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left — Text */}
          <div
            className={`transition-all duration-700 ${
              isInView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <span className="font-handwritten text-xl text-or-ambre">Depuis 2021</span>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-noir md:text-4xl lg:text-5xl">
              Notre Histoire
            </h2>
            <div
              className={`mt-4 h-px bg-or-ambre transition-all duration-1000 delay-300 ${
                isInView ? "w-20 opacity-100" : "w-0 opacity-0"
              }`}
            />
            <p className="mt-6 font-sans text-base leading-relaxed text-gris-pierre md:text-lg">
              Au cœur de Rodez, face au célèbre Musée Soulages,{" "}
              <strong className="text-noir">La Terrasse d&apos;Hugo</strong> vous accueille dans une
              ambiance chaleureuse. Cuisine maison variée — burgers généreux, pizzas artisanales,
              spécialités aveyronnaises et options végétariennes.
            </p>

            {/* Highlights inline */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className={`card-tilt group text-center transition-all duration-700 ${
                    isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-olive/10 transition-all duration-500 group-hover:bg-olive/20">
                    <item.icon className="h-7 w-7 text-olive" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-sm font-semibold text-noir md:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-1 hidden font-sans text-xs text-gris-pierre sm:block">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Image */}
          <div
            className={`overflow-hidden rounded-xl transition-all duration-1000 delay-300 ${
              isInView ? "translate-x-0 scale-100 opacity-100" : "translate-x-10 scale-[0.97] opacity-0"
            }`}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop"
                alt="Intérieur chaleureux du restaurant La Terrasse d'Hugo"
                fill
                className="object-cover transition-transform duration-[2s] hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
