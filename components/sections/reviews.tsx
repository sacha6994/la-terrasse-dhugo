"use client"

import { useEffect, useState, useRef } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"

const reviews = [
  {
    text: "Établissement super agréable, carte variée et de qualité. Le service est impeccable !",
    author: "Marie L.",
    rating: 5,
  },
  {
    text: "La terrasse est très agréable, comme le personnel ! La carte parfaite pour tous les goûts.",
    author: "Pierre D.",
    rating: 5,
  },
  {
    text: "Ce restaurant est une merveille pour les amateurs de cuisine typique aveyronnaise.",
    author: "Sophie M.",
    rating: 5,
  },
  {
    text: "Qualité et quantité s'accordent bien aux prix raisonnables. Je recommande vivement !",
    author: "Jean-Marc B.",
    rating: 5,
  },
]

function AnimatedCounter({ target, duration = 1500 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const { ref, isInView } = useInView<HTMLSpanElement>({ threshold: 0.5 })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start * 10) / 10)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, target, duration])

  return <span ref={ref}>{count.toFixed(1)}</span>
}

export function Reviews() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: number) => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir * 300, behavior: "smooth" })
  }

  return (
    <section id="avis" ref={ref} className="bg-olive py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header + Rating */}
        <div
          className={`flex flex-col items-center gap-4 text-center transition-all duration-700 md:flex-row md:justify-between md:text-left ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div>
            <span className="font-handwritten text-xl text-or-ambre">Témoignages</span>
            <h2 className="mt-1 font-serif text-3xl font-semibold text-creme md:text-4xl lg:text-5xl">
              Ce qu&apos;ils en disent
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-or-ambre text-or-ambre" />
              ))}
            </div>
            <span className="font-serif text-2xl font-semibold text-creme">
              <AnimatedCounter target={4.5} />/5
            </span>
            <span className="text-sm text-creme/60">450+ avis</span>
          </div>
        </div>

        {/* ═══ MOBILE: Carousel horizontal ═══ */}
        <div className="relative mt-10 md:hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          >
            {reviews.map((review, index) => (
              <div
                key={review.author}
                className={`group relative min-w-[280px] flex-shrink-0 snap-center rounded-lg bg-creme/10 p-6 backdrop-blur-sm transition-all duration-700 ${
                  isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-or-ambre text-or-ambre" />
                  ))}
                </div>
                <p className="mt-3 font-serif text-base leading-relaxed text-creme">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="mt-3 font-sans text-sm font-medium text-or-ambre">— {review.author}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ═══ DESKTOP: Layout dispersé innovant ═══ */}
        <div className="relative mt-10 hidden md:block">
          <div className="grid grid-cols-12 grid-rows-2 gap-4" style={{ minHeight: "320px" }}>
            {/* Grande carte principale — haut gauche */}
            <div
              className={`col-span-5 row-span-2 group relative overflow-hidden rounded-xl bg-creme/10 p-8 backdrop-blur-sm transition-all duration-700 hover:bg-creme/15 ${
                isInView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <Quote className="absolute -right-2 -top-2 h-24 w-24 text-or-ambre/10 transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute left-0 top-0 h-full w-1 bg-or-ambre/0 transition-all duration-500 group-hover:bg-or-ambre" />
              <div className="flex gap-0.5">
                {[...Array(reviews[0].rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-or-ambre text-or-ambre" />
                ))}
              </div>
              <p className="mt-6 font-serif text-2xl leading-relaxed text-creme">
                &ldquo;{reviews[0].text}&rdquo;
              </p>
              <p className="mt-6 font-sans text-sm font-medium text-or-ambre">— {reviews[0].author}</p>
            </div>

            {/* Cartes empilées — haut droite */}
            <div
              className={`col-span-4 group relative overflow-hidden rounded-xl bg-creme/8 p-6 backdrop-blur-sm transition-all duration-700 hover:bg-creme/15 ${
                isInView ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "350ms" }}
            >
              <div className="absolute left-0 top-0 h-1 w-full bg-or-ambre/0 transition-all duration-500 group-hover:bg-or-ambre/60" />
              <div className="flex gap-0.5">
                {[...Array(reviews[1].rating)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-or-ambre text-or-ambre" />
                ))}
              </div>
              <p className="mt-3 font-serif text-base leading-relaxed text-creme">
                &ldquo;{reviews[1].text}&rdquo;
              </p>
              <p className="mt-3 font-sans text-xs font-medium text-or-ambre">— {reviews[1].author}</p>
            </div>

            {/* Carte décalée — haut droite extrême */}
            <div
              className={`col-span-3 group relative overflow-hidden rounded-xl bg-or-ambre/10 p-6 backdrop-blur-sm transition-all duration-700 hover:bg-or-ambre/20 ${
                isInView ? "translate-x-0 rotate-0 opacity-100" : "translate-x-10 rotate-2 opacity-0"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <div className="flex gap-0.5">
                {[...Array(reviews[2].rating)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-or-ambre text-or-ambre" />
                ))}
              </div>
              <p className="mt-3 font-serif text-sm leading-relaxed text-creme">
                &ldquo;{reviews[2].text}&rdquo;
              </p>
              <p className="mt-3 font-sans text-xs font-medium text-or-ambre">— {reviews[2].author}</p>
            </div>

            {/* Carte basse — centrée, légèrement décalée */}
            <div
              className={`col-span-4 col-start-6 group relative overflow-hidden rounded-xl bg-creme/8 p-6 backdrop-blur-sm transition-all duration-700 hover:bg-creme/15 ${
                isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "650ms" }}
            >
              <div className="absolute bottom-0 right-0 h-1 w-full bg-or-ambre/0 transition-all duration-500 group-hover:bg-or-ambre/40" />
              <div className="flex gap-0.5">
                {[...Array(reviews[3].rating)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-or-ambre text-or-ambre" />
                ))}
              </div>
              <p className="mt-3 font-serif text-base leading-relaxed text-creme">
                &ldquo;{reviews[3].text}&rdquo;
              </p>
              <p className="mt-3 font-sans text-xs font-medium text-or-ambre">— {reviews[3].author}</p>
            </div>

            {/* CTA intégré dans la grille */}
            <div
              className={`col-span-3 col-start-10 flex items-center justify-center transition-all duration-700 ${
                isInView ? "scale-100 opacity-100" : "scale-90 opacity-0"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <Link
                href="https://www.google.com/maps/place/La+Terrasse+d'Hugo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hover-lift flex flex-col items-center gap-3 rounded-xl border border-creme/20 px-6 py-6 text-center transition-all duration-300 hover:border-or-ambre/40 hover:bg-creme/5"
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-or-ambre/30 text-or-ambre/30" />
                  ))}
                </div>
                <span className="font-sans text-xs font-semibold uppercase tracking-wider text-creme/60">
                  Laisser<br />un avis
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="https://www.google.com/maps/place/La+Terrasse+d'Hugo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hover-lift inline-flex items-center gap-2 rounded-sm border-2 border-creme/30 px-6 py-3 font-sans text-sm font-semibold uppercase tracking-wider text-creme transition-all duration-300 hover:border-creme hover:bg-creme/10"
          >
            Laisser un avis
          </Link>
        </div>
      </div>
    </section>
  )
}
