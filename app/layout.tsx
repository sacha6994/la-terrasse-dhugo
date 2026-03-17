import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, DM_Sans, Caveat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-handwritten",
  display: "swap",
})

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: "La Terrasse d'Hugo | Restaurant & Pub à Rodez — Face au Musée Soulages",
  description:
    "Restaurant & pub à Rodez. Burgers, pizzas maison, terrasse de 120 places face au Musée Soulages. Service tardif du mardi au samedi. Réservez au 05 65 68 81 43.",
  keywords: [
    "restaurant Rodez",
    "pub Rodez",
    "terrasse Rodez",
    "musée Soulages",
    "burger Rodez",
    "pizza Rodez",
    "aligot",
    "cuisine aveyronnaise",
  ],
  authors: [{ name: "IRYA", url: "https://irya.fr" }],
  openGraph: {
    title: "La Terrasse d'Hugo | Restaurant & Pub à Rodez",
    description:
      "Brasserie conviviale face au Musée Soulages. Burgers, pizzas maison, terrasse 120 places. Service tardif du mardi au samedi.",
    url: "https://laterrassedhugo.fr",
    siteName: "La Terrasse d'Hugo",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Terrasse d'Hugo | Restaurant & Pub à Rodez",
    description:
      "Brasserie conviviale face au Musée Soulages. Burgers, pizzas maison, terrasse 120 places.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "La Terrasse d'Hugo",
              image: "https://laterrassedhugo.fr/og-image.jpg",
              "@id": "https://laterrassedhugo.fr",
              url: "https://laterrassedhugo.fr",
              telephone: "+33565688143",
              address: {
                "@type": "PostalAddress",
                streetAddress: "23 Avenue Victor Hugo",
                addressLocality: "Rodez",
                postalCode: "12000",
                addressCountry: "FR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 44.3549,
                longitude: 2.5757,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "08:30",
                  closes: "02:00",
                },
              ],
              servesCuisine: ["French", "Burger", "Pizza", "Aveyronnaise"],
              priceRange: "€€",
              acceptsReservations: "True",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.5",
                reviewCount: "450",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${dmSans.variable} ${cormorant.variable} ${caveat.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
