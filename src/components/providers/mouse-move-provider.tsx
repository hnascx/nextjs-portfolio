"use client"

export function MouseMoveProvider({ children }: { children: React.ReactNode }) {
  const handleMouseMove = (e: React.MouseEvent) => {
    document.body.style.setProperty("--mouse-x", `${e.clientX}px`)
    document.body.style.setProperty("--mouse-y", `${e.clientY}px`)
  }

  return (
    <div onMouseMove={handleMouseMove} className="min-h-screen">
      {children}
    </div>
  )
}
