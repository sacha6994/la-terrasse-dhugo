"use client"

import { Instagram, X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState, useCallback } from "react"
import { useInView } from "@/hooks/use-in-view"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2574&auto=format&fit=crop",
    alt: "Terrasse du restaurant avec vue",
    caption: "Notre terrasse",
  },
  {
    src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2670&auto=format&fit=crop",
    alt: "Burger maison gourmand",
    caption: "Burger Hugo",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670&auto=format&fit=crop",
    alt: "Intérieur chaleureux du restaurant",
    caption: "Ambiance cosy",
  },
  {
    src: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2669&auto=format&fit=crop",
    alt: "Pizza maison",
    caption: "Pizza artisanale",
  },
  {
    src: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2671&auto=format&fit=crop",
    alt: "Sélection de bières artisanales",
    caption: "Côté pub",
  },
  {
    src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=2670&auto=format&fit=crop",
    alt: "Dessert maison",
    caption: "Douceurs sucrées",
  },
]

export function Gallery() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })
  const [lightbox, setLightbox] = useState<number | null>(null)

  const navigate = useCallback((dir: 1 | -1) => {
    if (lightbox === null) return
    setLightbox((lightbox + dir + galleryImages.length) % galleryImages.length)
  }, [lightbox])

  // Keyboard navigation
  useEffect(() => {
    if (lightbox === null) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null)
      if (e.key === "ArrowRight") navigate(1)
      if (e.key === "ArrowLeft") navigate(-1)
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKey)
    }
  }, [lightbox, navigate])

  return (
    <>
      <section id="galerie" ref={ref} className="bg-creme py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div
            className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <span className="font-handwritten text-xl text-or-ambre">En images</span>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-noir md:text-4xl lg:text-5xl">
              Notre Galerie
            </h2>
            <div
              className={`mx-auto mt-4 h-px bg-or-ambre transition-all duration-1000 delay-300 ${
                isInView ? "w-20 opacity-100" : "w-0 opacity-0"
              }`}
            />
          </div>

          {/* Horizontal scroll gallery on mobile, grid on desktop */}
          <div className="-mx-4 mt-10 flex gap-3 overflow-x-auto px-4 pb-4 snap-x snap-mandatory scrollbar-hide md:mx-0 md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:px-0 md:pb-0">
            {galleryImages.map((image, index) => (
              <button
                key={image.caption}
                onClick={() => setLightbox(index)}
                className={`group relative min-w-[240px] flex-shrink-0 snap-center overflow-hidden rounded-lg md:min-w-0 transition-all duration-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-or-ambre ${
                  isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${200 + index * 80}ms` }}
                aria-label={`Voir ${image.caption} en grand`}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 240px, 33vw"
                  />
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-noir/70 via-transparent to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <div className="w-full p-4">
                    <span className="font-serif text-base text-creme">{image.caption}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Instagram */}
          <div
            className={`mt-10 text-center transition-all duration-700 delay-400 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <Link
              href="https://www.instagram.com/la_terrasse_d_hugo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hover-lift group inline-flex items-center gap-3 rounded-sm border-2 border-noir/20 px-6 py-3 font-sans text-sm font-semibold uppercase tracking-wider text-noir transition-all duration-300 hover:border-noir hover:bg-noir hover:text-creme"
            >
              <Instagram className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
              Suivez-nous
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-noir/95 p-4 backdrop-blur-md"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-label="Visionneuse d'image"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-creme/10 text-creme transition-all duration-300 hover:bg-creme/20"
            aria-label="Fermer"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="relative h-[65vh] w-full max-w-4xl animate-scale-up sm:h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              fill
              className="rounded-lg object-contain"
              sizes="100vw"
            />
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-sm bg-noir/80 px-4 py-1.5 font-serif text-sm text-creme backdrop-blur-sm sm:text-base">
              {galleryImages[lightbox].caption}
            </p>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); navigate(-1) }}
            className="absolute left-2 flex h-11 w-11 items-center justify-center rounded-full bg-creme/15 text-creme transition-all hover:bg-creme/25 sm:left-3 sm:h-10 sm:w-10"
            aria-label="Précédent"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigate(1) }}
            className="absolute right-2 flex h-11 w-11 items-center justify-center rounded-full bg-creme/15 text-creme transition-all hover:bg-creme/25 sm:right-3 sm:h-10 sm:w-10"
            aria-label="Suivant"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </>
  )
}
