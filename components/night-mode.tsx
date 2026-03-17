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

  // Auto-activate between 20h and 7h
  useEffect(() => {
    const hour = new Date().getHours()
    if (hour >= 20 || hour < 7) {
      setIsNight(true)
    }
  }, [])

  const toggle = () => setIsNight((prev) => !prev)

  return (
    <NightModeContext.Provider value={{ isNight, toggle }}>
      <div className={isNight ? "night-mode" : ""}>{children}</div>
    </NightModeContext.Provider>
  )
}

export function NightModeToggle() {
  const { isNight, toggle } = useNightMode()

  return (
    <button
      onClick={toggle}
      className={`group fixed bottom-6 right-6 z-[95] flex h-12 w-12 items-center justify-center rounded-full border shadow-lg backdrop-blur-md transition-all duration-500 md:bottom-8 md:right-8 ${
        isNight
          ? "border-amber-500/30 bg-amber-950/80 text-amber-400 shadow-amber-500/20 hover:bg-amber-950"
          : "border-noir/10 bg-creme/80 text-noir shadow-noir/10 hover:bg-creme"
      }`}
      aria-label={isNight ? "Mode jour" : "Mode nuit"}
    >
      <span className={`absolute transition-all duration-500 ${isNight ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"}`}>
        <Sun className="h-5 w-5" />
      </span>
      <span className={`absolute transition-all duration-500 ${isNight ? "-rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`}>
        <Moon className="h-5 w-5" />
      </span>
    </button>
  )
}
