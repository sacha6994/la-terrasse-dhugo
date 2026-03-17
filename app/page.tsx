import { Header } from "@/components/header"
import { Hero } from "@/components/sections/hero"
import { Concept } from "@/components/sections/concept"
import { Carte } from "@/components/sections/carte"
import { Gallery } from "@/components/sections/gallery"
import { Reviews } from "@/components/sections/reviews"
import { Info } from "@/components/sections/info"
import { Reservation } from "@/components/sections/reservation"
import { Footer } from "@/components/sections/footer"
import { SmoothScroll } from "@/components/smooth-scroll"
import { PageLoader } from "@/components/page-loader"
import { CustomCursor } from "@/components/custom-cursor"
import { GrainOverlay } from "@/components/grain-overlay"
import { Marquee } from "@/components/marquee"
import { WaveDivider } from "@/components/wave-divider"
import { FloatingCTA } from "@/components/floating-cta"

export default function Home() {
  return (
    <>
      {/* Premium effects layer */}
      <PageLoader />
      <SmoothScroll />
      <CustomCursor />
      <GrainOverlay />
      <FloatingCTA />

      <Header />
      <main>
        <Hero />

        {/* Hero → Concept (noir → crème) */}
        <WaveDivider from="noir" to="creme" />

        <Concept />

        {/* Marquee separator */}
        <Marquee />

        <Carte />

        {/* Carte → Galerie (noir → crème) */}
        <WaveDivider from="noir" to="creme" />

        <Gallery />

        {/* Galerie → Avis (crème → olive) */}
        <WaveDivider from="creme" to="olive" />

        <Reviews />

        {/* Avis → Infos (olive → crème-light) */}
        <WaveDivider from="olive" to="creme-light" />

        <Info />

        {/* Infos → Réservation (crème-light → noir) */}
        <WaveDivider from="creme-light" to="noir" />

        <Reservation />
      </main>
      <Footer />
    </>
  )
}
