"use client"

import { useEffect, useState } from "react"

export function PageLoader() {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Animate progress bar
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 25 + 10
      })
    }, 150)

    // Hide loader after animation
    const timer = setTimeout(() => {
      setVisible(false)
    }, 1200)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-noir transition-opacity duration-700 ${
        progress >= 100 ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      {/* Logo */}
      <div className="mb-8 text-center">
        <span
          className="block font-handwritten text-xl text-or-ambre opacity-0"
          style={{ animation: "fade-in 0.5s ease-out 0.1s forwards" }}
        >
          Bienvenue à
        </span>
        <h1
          className="mt-2 font-serif text-4xl font-semibold text-creme opacity-0 md:text-6xl"
          style={{ animation: "fade-in-up 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s forwards" }}
        >
          La Terrasse d&apos;Hugo
        </h1>
      </div>

      {/* Progress bar */}
      <div className="h-px w-48 overflow-hidden bg-creme/10">
        <div
          className="h-full bg-or-ambre transition-all duration-300 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
    </div>
  )
}
