"use client"

import { useEffect, useRef, useState } from "react"
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
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.15 })
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: number) => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir * 320, behavior: "smooth" })
  }

  return (
    <section id="avis" ref={ref} className="bg-olive py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header + Rating inline */}
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

        {/* Reviews — horizontal carousel */}
        <div className="relative mt-10">
          <div
            ref={scrollRef}
            className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory scrollbar-hide"
          >
            {reviews.map((review, index) => (
              <div
                key={review.author}
                className={`group relative min-w-[300px] flex-shrink-0 snap-center rounded-lg bg-creme/10 p-6 backdrop-blur-sm transition-all duration-700 hover:bg-creme/15 ${
                  isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="absolute left-0 top-0 h-full w-1 rounded-l-lg bg-or-ambre/0 transition-all duration-500 group-hover:bg-or-ambre/60" />
                <Quote className="absolute right-4 top-4 h-8 w-8 text-or-ambre/15" />
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

          {/* Scroll arrows — desktop only */}
          <button
            onClick={() => scroll(-1)}
            className="absolute -left-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-creme/10 text-creme backdrop-blur-sm transition-all hover:bg-creme/20 md:flex"
            aria-label="Avis précédents"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll(1)}
            className="absolute -right-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-creme/10 text-creme backdrop-blur-sm transition-all hover:bg-creme/20 md:flex"
            aria-label="Avis suivants"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* CTA */}
        <div
          className={`mt-8 text-center transition-all duration-700 delay-400 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
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
