import { type RefObject, useEffect, useState } from 'react'

const FINE_THRESHOLDS = Array.from({ length: 101 }, (_, i) => i / 100)

export function useIntersectionObserver(
  ref: RefObject<Element | null>,
  options: IntersectionObserverInit = {}
): IntersectionObserverEntry | null {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([e]) => setEntry(e),
      { threshold: FINE_THRESHOLDS, ...options }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref])

  return entry
}
