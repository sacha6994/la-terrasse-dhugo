"use client"

import { useEffect, useState } from "react"
import { Star, Quote } from "lucide-react"
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

  return (
    <section id="avis" ref={ref} className="bg-olive py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span className="font-handwritten text-xl text-or-ambre md:text-2xl">Témoignages</span>
          <h2 className="mt-2 font-serif text-4xl font-semibold text-creme md:text-5xl lg:text-6xl">
            Ce que nos clients en disent
          </h2>
          <div
            className={`mx-auto mt-6 h-px bg-or-ambre transition-all duration-1000 delay-300 ${
              isInView ? "w-24 opacity-100" : "w-0 opacity-0"
            }`}
          />
        </div>

        {/* Rating Badge — animated counter */}
        <div
          className={`mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8 transition-all duration-700 delay-200 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-6 w-6 fill-or-ambre text-or-ambre transition-all duration-500 ${
                  isInView ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
                style={{ transitionDelay: `${400 + i * 100}ms` }}
              />
            ))}
          </div>
          <div className="text-center sm:text-left">
            <span className="font-serif text-3xl font-semibold text-creme">
              <AnimatedCounter target={4.5} />
              /5
            </span>
            <span className="ml-2 font-sans text-creme/80">sur Google</span>
            <span className="mx-2 text-creme/40">•</span>
            <span className="font-sans text-creme/80">450+ avis</span>
          </div>
        </div>

        {/* Reviews Grid — alternating slide directions */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {reviews.map((review, index) => (
            <div
              key={review.author}
              className={`group relative overflow-hidden rounded-lg bg-creme/10 p-8 backdrop-blur-sm transition-all duration-700 hover:bg-creme/15 ${
                isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${300 + index * 120}ms` }}
            >
              {/* Decorative accent bar */}
              <div className="absolute left-0 top-0 h-full w-1 bg-or-ambre/0 transition-all duration-500 group-hover:bg-or-ambre/60" />

              <Quote className="absolute right-6 top-6 h-10 w-10 text-or-ambre/20 transition-transform duration-500 group-hover:scale-110 group-hover:text-or-ambre/30" />
              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-or-ambre text-or-ambre" />
                ))}
              </div>
              <p className="mt-4 font-serif text-lg leading-relaxed text-creme">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="mt-4 font-sans text-sm font-medium text-or-ambre">— {review.author}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Link
            href="https://www.google.com/maps/place/La+Terrasse+d'Hugo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hover-lift inline-flex items-center gap-2 rounded-sm border-2 border-creme/30 px-8 py-4 font-sans text-sm font-semibold uppercase tracking-wider text-creme transition-all duration-300 hover:border-creme hover:bg-creme/10"
          >
            Laisser un avis sur Google
          </Link>
        </div>
      </div>
    </section>
  )
}
