import { Header } from "@/components/header"
import { Hero } from "@/components/sections/hero"
import { Concept } from "@/components/sections/concept"
import { Carte } from "@/components/sections/carte"
import { Gallery } from "@/components/sections/gallery"
import { Reviews } from "@/components/sections/reviews"
import { Info } from "@/components/sections/info"
import { Reservation } from "@/components/sections/reservation"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Concept />
        <Carte />
        <Gallery />
        <Reviews />
        <Info />
        <Reservation />
      </main>
      <Footer />
    </>
  )
}
