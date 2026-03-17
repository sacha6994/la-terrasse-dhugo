"use client"

const items = [
  "Burgers Maison",
  "Pizzas Artisanales",
  "Terrasse 120 Places",
  "Cocktails & Bières",
  "Cuisine Aveyronnaise",
  "Service jusqu'à 2h",
  "Face au Musée Soulages",
  "Aligot Authentique",
]

export function Marquee() {
  return (
    <div className="relative overflow-hidden bg-noir py-4" aria-hidden="true">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-noir to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-noir to-transparent" />

      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-6 font-sans text-sm font-medium uppercase tracking-[0.2em] text-creme/40"
          >
            {item}
            <span className="ml-6 text-or-ambre/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
