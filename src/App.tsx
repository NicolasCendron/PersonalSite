import { useRef } from 'react'
import { Hero } from './sections/Hero'
import { Contact } from './sections/Contact'
import { Navbar } from './components/Navbar'
import { useIntersectionObserver } from './hooks/useIntersectionObserver'

function App() {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroEntry = useIntersectionObserver(heroRef)
  const navScrolled = (heroEntry?.intersectionRatio ?? 1) < 0.33

  return (
    <>
      <Navbar scrolled={navScrolled} />
      <main>
        <div ref={heroRef}>
          <Hero />
        </div>
        <Contact />
      </main>
    </>
  )
}

export default App
