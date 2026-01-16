import { useEffect, useState } from 'react'

export function useScrollSpy(sectionIds, offset = 120, enabled = true) {
  const [activeId, setActiveId] = useState(sectionIds[0] || '')

  useEffect(() => {
    if (!enabled) return undefined

    const observers = []

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (!element) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id)
          }
        },
        {
          rootMargin: `-${offset}px 0px -50% 0px`,
          threshold: [0.25, 0.6],
        },
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => observers.forEach((observer) => observer.disconnect())
  }, [sectionIds, offset, enabled])

  return activeId
}
