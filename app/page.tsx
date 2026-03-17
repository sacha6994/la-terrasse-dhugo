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
import { GrainOverlay } from "@/components/grain-overlay"
import { Marquee } from "@/components/marquee"
import { WaveDivider } from "@/components/wave-divider"
import { FloatingCTA } from "@/components/floating-cta"
import { NightModeProvider, NightModeToggle } from "@/components/night-mode"

export default function Home() {
  return (
    <NightModeProvider>
      {/* Premium effects layer */}
      <SmoothScroll />
      <GrainOverlay />
      <FloatingCTA />
      <NightModeToggle />

      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <WaveDivider from="noir" to="creme" />
        <Concept />
        <Marquee />
        <Carte />
        <WaveDivider from="noir" to="creme" />
        <Gallery />
        <WaveDivider from="creme" to="olive" />
        <Reviews />
        <WaveDivider from="olive" to="creme-light" />
        <Info />
        <WaveDivider from="creme-light" to="noir" />
        <Reservation />
      </main>
      <Footer />
    </NightModeProvider>
  )
}
