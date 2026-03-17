"use client"

import { Instagram, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
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

  return (
    <>
      <section id="galerie" ref={ref} className="bg-creme py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div
            className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <span className="font-handwritten text-xl text-or-ambre md:text-2xl">En images</span>
            <h2 className="mt-2 font-serif text-4xl font-semibold text-noir md:text-5xl lg:text-6xl">
              Notre Galerie
            </h2>
            <div
              className={`mx-auto mt-6 h-px bg-or-ambre transition-all duration-1000 delay-300 ${
                isInView ? "w-24 opacity-100" : "w-0 opacity-0"
              }`}
            />
          </div>

          {/* Gallery Grid */}
          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <button
                key={image.caption}
                onClick={() => setLightbox(index)}
                className={`group relative overflow-hidden rounded-lg transition-all duration-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-or-ambre ${
                  isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                } ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
                style={{ transitionDelay: `${200 + index * 120}ms` }}
                aria-label={`Voir ${image.caption} en grand`}
              >
                <div
                  className={`overflow-hidden ${index === 0 ? "aspect-square md:aspect-auto md:h-full min-h-[300px]" : "aspect-square"}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes={index === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                  />
                </div>
                {/* Hover overlay with slide-up caption */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-noir/80 via-noir/20 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <div className="w-full translate-y-4 p-6 transition-transform duration-500 group-hover:translate-y-0">
                    <span className="font-serif text-xl text-creme">{image.caption}</span>
                    <div className="mt-2 h-px w-0 bg-or-ambre transition-all duration-700 group-hover:w-16" />
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Instagram CTA */}
          <div
            className={`mt-16 text-center transition-all duration-700 delay-500 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <Link
              href="https://www.instagram.com/la_terrasse_d_hugo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hover-lift group inline-flex items-center gap-3 rounded-sm border-2 border-noir/20 px-8 py-4 font-sans text-sm font-semibold uppercase tracking-wider text-noir transition-all duration-300 hover:border-noir hover:bg-noir hover:text-creme"
            >
              <Instagram className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
              Suivez-nous sur Instagram
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
            className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-creme/10 text-creme transition-all duration-300 hover:bg-creme/20"
            aria-label="Fermer"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative h-[80vh] w-full max-w-5xl animate-scale-up" onClick={(e) => e.stopPropagation()}>
            <Image
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              fill
              className="rounded-lg object-contain"
              sizes="100vw"
            />
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-sm bg-noir/80 px-6 py-2 font-serif text-lg text-creme backdrop-blur-sm">
              {galleryImages[lightbox].caption}
            </p>
          </div>
          {/* Navigation arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setLightbox((lightbox - 1 + galleryImages.length) % galleryImages.length)
            }}
            className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full bg-creme/10 text-creme transition-all duration-300 hover:bg-creme/20"
            aria-label="Image précédente"
          >
            <span className="text-2xl">&lsaquo;</span>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              setLightbox((lightbox + 1) % galleryImages.length)
            }}
            className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full bg-creme/10 text-creme transition-all duration-300 hover:bg-creme/20"
            aria-label="Image suivante"
          >
            <span className="text-2xl">&rsaquo;</span>
          </button>
        </div>
      )}
    </>
  )
}
