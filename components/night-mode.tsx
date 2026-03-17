"use client"

import { Moon, Sun } from "lucide-react"
import { createContext, useContext, useEffect, useState } from "react"

const NightModeContext = createContext<{
  isNight: boolean
  toggle: () => void
}>({ isNight: false, toggle: () => {} })

export function useNightMode() {
  return useContext(NightModeContext)
}

export function NightModeProvider({ children }: { children: React.ReactNode }) {
  const [isNight, setIsNight] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("terrasse-night-mode")
    if (saved !== null) {
      setIsNight(saved === "true")
    } else {
      const hour = new Date().getHours()
      if (hour >= 20 || hour < 7) setIsNight(true)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("terrasse-night-mode", String(isNight))
    }
  }, [isNight, mounted])

  return (
    <NightModeContext.Provider value={{ isNight, toggle: () => setIsNight((p) => !p) }}>
      <div className={isNight ? "night-mode" : ""}>{children}</div>
    </NightModeContext.Provider>
  )
}

export function NightModeToggle() {
  const { isNight, toggle } = useNightMode()
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(true)
    toggle()
    setTimeout(() => setClicked(false), 600)
  }

  return (
    <button
      onClick={handleClick}
      className={`fixed right-5 top-1/2 z-[95] -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full border-2 shadow-lg backdrop-blur-md transition-all duration-500 ${
        clicked ? "scale-125" : "scale-100 hover:scale-110"
      } ${
        isNight
          ? "border-amber-500/40 bg-amber-950/80 text-amber-400 shadow-amber-500/30"
          : "border-noir/15 bg-creme/90 text-noir shadow-noir/10"
      }`}
      aria-label={isNight ? "Mode jour" : "Mode nuit"}
    >
      {/* Ripple */}
      {clicked && (
        <span className="absolute inset-0 animate-ping rounded-full bg-or-ambre/30" />
      )}
      {/* Sun / Moon swap */}
      <span
        className={`absolute transition-all duration-500 ${
          isNight
            ? "rotate-0 scale-100 opacity-100"
            : "rotate-180 scale-0 opacity-0"
        }`}
      >
        <Sun className="h-6 w-6" />
      </span>
      <span
        className={`absolute transition-all duration-500 ${
          isNight
            ? "-rotate-180 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100"
        }`}
      >
        <Moon className="h-6 w-6" />
      </span>
    </button>
  )
}
