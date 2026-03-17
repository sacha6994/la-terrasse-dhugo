"use client"

import { useNightMode } from "@/components/night-mode"

interface WaveDividerProps {
  from: string
  to: string
  flip?: boolean
}

const colorMap: Record<string, string> = {
  creme: "#f5f0e8",
  "creme-light": "#faf7f2",
  noir: "#0d0d0d",
  olive: "#3c4a2a",
}

const nightColorMap: Record<string, string> = {
  creme: "#0a0a0a",
  "creme-light": "#0e0e0e",
  noir: "#000000",
  olive: "#080c06",
}

export function WaveDivider({ from, to, flip = false }: WaveDividerProps) {
  const { isNight } = useNightMode()
  const map = isNight ? nightColorMap : colorMap
  const fillColor = map[to] || to
  const bgColor = map[from] || from

  return (
    <div
      className={`relative -mt-px w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`}
      style={{ backgroundColor: bgColor, transition: "background-color 0.6s ease" }}
      aria-hidden="true"
    >
      <svg
        className="relative block w-full"
        style={{ height: "clamp(40px, 6vw, 80px)" }}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C150,80 350,0 500,40 C650,80 750,20 900,50 C1050,80 1150,10 1200,30 L1200,120 L0,120 Z"
          fill={fillColor}
          style={{ transition: "fill 0.6s ease" }}
        />
      </svg>
    </div>
  )
}
