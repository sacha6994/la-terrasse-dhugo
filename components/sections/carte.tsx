"use client"

import { useState } from "react"
import { Salad, Beef, Pizza, Fish, Leaf, IceCream, Beer } from "lucide-react"
import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"

const menuCategories = [
  {
    icon: Salad,
    name: "Entrées",
    items: ["Salade Aveyronnaise", "Assiette de charcuterie", "Soupe du jour"],
  },
  {
    icon: Beef,
    name: "Burgers",
    items: ["Le Hugo", "Le Classique", "Le Montagnard"],
  },
  {
    icon: Pizza,
    name: "Pizzas",
    items: ["Margherita", "Reine", "4 Fromages"],
  },
  {
    icon: Fish,
    name: "Viandes",
    items: ["Entrecôte", "Pavé de saumon", "Magret de canard"],
  },
  {
    icon: Leaf,
    name: "Végé",
    items: ["Burger végétarien", "Salade complète", "Risotto légumes"],
  },
  {
    icon: IceCream,
    name: "Desserts",
    items: ["Fondant chocolat", "Crème brûlée", "Café gourmand"],
  },
]

const specialties = [
  {
    name: "L'Aligot",
    description: "Spécialité aveyronnaise par excellence",
    price: "14,50€",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=2536&auto=format&fit=crop",
  },
  {
    name: "Le Burger Hugo",
    description: "Bœuf Aubrac, cantal, oignons confits",
    price: "16,90€",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2499&auto=format&fit=crop",
  },
  {
    name: "Pizza Terrasse",
    description: "Jambon de pays, tome fraîche, roquette",
    price: "15,50€",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2581&auto=format&fit=crop",
  },
]

export function Carte() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.05 })
  const [activeCategory, setActiveCategory] = useState<number | null>(null)

  return (
    <section id="carte" ref={ref} className="bg-noir py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span className="font-handwritten text-xl text-or-ambre">Gourmandise</span>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-creme md:text-4xl lg:text-5xl">
            Notre Carte
          </h2>
          <div
            className={`mx-auto mt-4 h-px bg-or-ambre transition-all duration-1000 delay-300 ${
              isInView ? "w-20 opacity-100" : "w-0 opacity-0"
            }`}
          />
        </div>

        {/* Signatures — horizontal scroll on mobile */}
        <div className="mt-10">
          <h3
            className={`mb-6 text-center font-serif text-lg font-medium uppercase tracking-wider text-or-ambre transition-all duration-700 delay-200 ${
              isInView ? "opacity-100" : "opacity-0"
            }`}
          >
            Nos Signatures
          </h3>
          <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory scrollbar-hide md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
            {specialties.map((dish, index) => (
              <div
                key={dish.name}
                className={`group relative min-w-[280px] flex-shrink-0 snap-center cursor-pointer overflow-hidden rounded-lg md:min-w-0 transition-all duration-700 ${
                  isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 280px, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/40 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 transition-transform duration-500 group-hover:-translate-y-1">
                  <span className="inline-block rounded-sm bg-or-ambre/20 px-2 py-0.5 text-xs font-semibold text-or-ambre backdrop-blur-sm">
                    {dish.price}
                  </span>
                  <h4 className="mt-1.5 font-serif text-xl font-semibold text-creme">{dish.name}</h4>
                  <p className="mt-1 text-xs text-creme/70">{dish.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories — tab/pill navigation */}
        <div className="mt-12">
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-3 scrollbar-hide md:mx-0 md:flex-wrap md:justify-center md:px-0">
            {menuCategories.map((cat, index) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(activeCategory === index ? null : index)}
                className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 font-sans text-sm transition-all duration-300 ${
                  activeCategory === index
                    ? "bg-or-ambre text-noir"
                    : "bg-creme/10 text-creme/70 hover:bg-creme/15 hover:text-creme"
                }`}
              >
                <cat.icon className="h-4 w-4" strokeWidth={1.5} />
                {cat.name}
              </button>
            ))}
          </div>

          {/* Active category items */}
          <div className="mt-4 min-h-[60px]">
            {activeCategory !== null && (
              <div className="animate-fade-in-up flex flex-wrap justify-center gap-3">
                {menuCategories[activeCategory].items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-creme/10 bg-creme/5 px-4 py-2 font-sans text-sm text-creme/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Pub + Price */}
        <div
          className={`mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8 transition-all duration-700 delay-400 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3 rounded-lg border border-or-ambre/20 bg-or-ambre/5 px-5 py-3">
            <Beer className="h-6 w-6 text-or-ambre" strokeWidth={1.5} />
            <span className="font-sans text-sm text-creme/80">Bières artisanales, cocktails & spiritueux</span>
          </div>
          <div className="text-center">
            <span className="text-or-ambre">Menu du jour</span>{" "}
            <span className="font-serif text-xl text-creme">13,50€</span>
            <span className="ml-2 text-xs text-gris-pierre">• Moy. 20-30€/pers</span>
          </div>
        </div>
      </div>
    </section>
  )
}
