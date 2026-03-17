"use client"

import { Salad, Beef, Pizza, Fish, Leaf, IceCream, Beer } from "lucide-react"
import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"

const menuCategories = [
  {
    icon: Salad,
    name: "Entrées & Salades",
    description: "Fraîcheur et saveurs du terroir",
    items: ["Salade Aveyronnaise", "Assiette de charcuterie", "Soupe du jour"],
  },
  {
    icon: Beef,
    name: "Burgers Maison",
    description: "Généreux et gourmands",
    items: ["Le Hugo", "Le Classique", "Le Montagnard"],
    featured: true,
  },
  {
    icon: Pizza,
    name: "Pizzas Maison",
    description: "Pâte fraîche, cuisson au feu de bois",
    items: ["Margherita", "Reine", "4 Fromages"],
    featured: true,
  },
  {
    icon: Fish,
    name: "Viandes & Poissons",
    description: "Produits de qualité, cuisson parfaite",
    items: ["Entrecôte", "Pavé de saumon", "Magret de canard"],
  },
  {
    icon: Leaf,
    name: "Végétarien",
    description: "Options gourmandes sans viande",
    items: ["Burger végétarien", "Salade complète", "Risotto légumes"],
  },
  {
    icon: IceCream,
    name: "Desserts Maison",
    description: "Douceurs pour finir en beauté",
    items: ["Fondant chocolat", "Crème brûlée", "Café gourmand"],
  },
]

const specialties = [
  {
    name: "L'Aligot",
    description: "La spécialité aveyronnaise par excellence",
    price: "14,50€",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=2536&auto=format&fit=crop",
  },
  {
    name: "Le Burger Hugo",
    description: "Notre signature : bœuf Aubrac, cantal, oignons confits",
    price: "16,90€",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2499&auto=format&fit=crop",
  },
  {
    name: "Pizza Terrasse",
    description: "Jambon de pays, tome fraîche, roquette",
    price: "15,50€",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2581&auto=format&fit=crop",
  },
]

export function Carte() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.05 })

  return (
    <section id="carte" ref={ref} className="bg-noir py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span className="font-handwritten text-xl text-or-ambre md:text-2xl">Gourmandise</span>
          <h2 className="mt-2 font-serif text-4xl font-semibold text-creme md:text-5xl lg:text-6xl">
            Notre Carte
          </h2>
          <div
            className={`mx-auto mt-6 h-px bg-or-ambre transition-all duration-1000 delay-300 ${
              isInView ? "w-24 opacity-100" : "w-0 opacity-0"
            }`}
          />
          <p className="mt-6 font-sans text-lg text-gris-pierre">
            Une cuisine maison variée, des produits frais du terroir aveyronnais
          </p>
        </div>

        {/* Featured Dishes — with hover lift & image zoom */}
        <div className="mt-16 md:mt-20">
          <h3
            className={`mb-10 text-center font-serif text-2xl font-medium uppercase tracking-wider text-or-ambre transition-all duration-700 delay-200 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Nos Signatures
          </h3>
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {specialties.map((dish, index) => (
              <div
                key={dish.name}
                className={`group relative cursor-pointer overflow-hidden rounded-lg transition-all duration-700 ${
                  isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/50 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-500 group-hover:-translate-y-2">
                  <span className="inline-block rounded-sm bg-or-ambre/20 px-3 py-1 font-sans text-sm font-semibold text-or-ambre backdrop-blur-sm">
                    {dish.price}
                  </span>
                  <h4 className="mt-2 font-serif text-2xl font-semibold text-creme">{dish.name}</h4>
                  <p className="mt-2 font-sans text-sm text-creme/80 transition-opacity duration-300 group-hover:opacity-100 md:opacity-0">
                    {dish.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Menu Categories Grid — alternating slide-in */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuCategories.map((category, index) => (
            <div
              key={category.name}
              className={`card-tilt group rounded-lg border border-creme/10 bg-creme/5 p-6 transition-all duration-700 hover:border-or-ambre/30 hover:bg-creme/10 ${
                isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${400 + index * 80}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-olive/20 transition-all duration-500 group-hover:bg-olive/30 group-hover:scale-110">
                  <category.icon className="h-6 w-6 text-olive-light" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-semibold text-creme">{category.name}</h4>
                  <p className="mt-1 font-sans text-sm text-gris-pierre">{category.description}</p>
                  <ul className="mt-3 space-y-1">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="font-sans text-sm text-creme/70 before:mr-2 before:text-or-ambre before:content-['·']"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Drinks Section — slide in from right */}
        <div
          className={`mt-16 flex items-center justify-center gap-4 rounded-lg border border-or-ambre/20 bg-or-ambre/5 p-8 transition-all duration-700 delay-500 ${
            isInView ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          }`}
        >
          <Beer className="h-10 w-10 text-or-ambre" strokeWidth={1.5} />
          <div>
            <h4 className="font-serif text-xl font-semibold text-creme">Côté Pub</h4>
            <p className="font-sans text-gris-pierre">
              Large sélection de bières artisanales, cocktails et spiritueux
            </p>
          </div>
        </div>

        {/* Menu Pricing */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="font-sans text-creme/80">
            <span className="text-or-ambre">Menu du jour</span> à partir de{" "}
            <span className="font-serif text-2xl text-creme">13,50€</span>
          </p>
          <p className="mt-2 font-sans text-sm text-gris-pierre">
            Prix moyen : 20-30€ par personne
          </p>
        </div>
      </div>
    </section>
  )
}
