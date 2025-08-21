"use client"

import { useEffect, useState } from "react"

export function useScrollSpy(ids: string[], offset: number = 0) {
  const [activeId, setActiveId] = useState<string>(ids[0] || "")

  useEffect(() => {
    const handleScroll = () => {
      const elements = ids
        .map((id) => document.getElementById(id))
        .filter(Boolean)

      if (elements.length === 0) return

      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const threshold = windowHeight * 0.3 // 30% da altura da tela

      let newActiveId = ids[0] || ""

      // Encontrar a seção ativa baseada na posição do scroll
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i]
        if (!element) continue

        const elementTop = element.offsetTop - offset
        const elementBottom = elementTop + element.offsetHeight

        // Calcular o centro da seção
        const elementCenter = elementTop + element.offsetHeight / 2

        // Uma seção está ativa quando seu centro está visível na tela
        if (
          scrollTop + threshold >= elementCenter &&
          scrollTop + windowHeight - threshold <= elementBottom
        ) {
          newActiveId = element.id
          break
        }
      }

      // Se não encontrou nenhuma seção específica, usar a mais próxima do topo
      if (newActiveId === ids[0]) {
        let closestDistance = Infinity

        for (let i = 0; i < elements.length; i++) {
          const element = elements[i]
          if (!element) continue

          const elementTop = element.offsetTop - offset
          const distance = Math.abs(scrollTop - elementTop)

          if (distance < closestDistance) {
            closestDistance = distance
            newActiveId = element.id
          }
        }
      }

      if (newActiveId !== activeId) {
        setActiveId(newActiveId)

        // Atualizar a URL para refletir a seção ativa
        const newUrl = `#${newActiveId}`
        if (window.location.hash !== newUrl) {
          window.history.replaceState(null, "", newUrl)
        }
      }
    }

    handleScroll() // Initial call
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [ids, offset, activeId])

  return activeId
}
