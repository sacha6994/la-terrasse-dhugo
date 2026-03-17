"use client"

import { useEffect, useState } from "react"

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)
  const [clicking, setClicking] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    // Hide on touch devices
    if ("ontouchstart" in window) {
      setHidden(true)
      return
    }

    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
    }

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA"
      ) {
        setHovering(true)
      }
    }

    const handleOut = () => setHovering(false)
    const handleDown = () => setClicking(true)
    const handleUp = () => setClicking(false)
    const handleLeave = () => setHidden(true)
    const handleEnter = () => setHidden(false)

    document.addEventListener("mousemove", handleMove, { passive: true })
    document.addEventListener("mouseover", handleOver, { passive: true })
    document.addEventListener("mouseout", handleOut, { passive: true })
    document.addEventListener("mousedown", handleDown)
    document.addEventListener("mouseup", handleUp)
    document.addEventListener("mouseleave", handleLeave)
    document.addEventListener("mouseenter", handleEnter)

    // Hide default cursor
    document.documentElement.style.cursor = "none"

    return () => {
      document.removeEventListener("mousemove", handleMove)
      document.removeEventListener("mouseover", handleOver)
      document.removeEventListener("mouseout", handleOut)
      document.removeEventListener("mousedown", handleDown)
      document.removeEventListener("mouseup", handleUp)
      document.removeEventListener("mouseleave", handleLeave)
      document.removeEventListener("mouseenter", handleEnter)
      document.documentElement.style.cursor = ""
    }
  }, [])

  if (hidden) return null

  return (
    <>
      {/* Outer ring — follows with delay */}
      <div
        className="pointer-events-none fixed z-[9999] rounded-full border border-or-ambre/50 mix-blend-difference"
        style={{
          left: pos.x,
          top: pos.y,
          width: hovering ? 56 : 36,
          height: hovering ? 56 : 36,
          transform: `translate(-50%, -50%) scale(${clicking ? 0.8 : 1})`,
          transition: "width 0.3s cubic-bezier(0.22,1,0.36,1), height 0.3s cubic-bezier(0.22,1,0.36,1), transform 0.15s ease-out, left 0.12s ease-out, top 0.12s ease-out",
        }}
      />
      {/* Inner dot — instant */}
      <div
        className="pointer-events-none fixed z-[9999] rounded-full bg-or-ambre"
        style={{
          left: pos.x,
          top: pos.y,
          width: hovering ? 6 : 4,
          height: hovering ? 6 : 4,
          transform: "translate(-50%, -50%)",
          transition: "width 0.2s ease, height 0.2s ease",
        }}
      />
    </>
  )
}
