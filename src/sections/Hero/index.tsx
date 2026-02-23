import heroPhoto from '../../assets/hero.jpeg'
import { HeroHeadline } from './HeroHeadline'
import { HeroAvatar } from './HeroAvatar'
import { TechChips } from './TechChips'
import { HeroCTAs } from './HeroCTAs'

export function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="min-h-screen flex items-center px-6 lg:px-16 py-16"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1">
          <HeroHeadline />
          <TechChips />
          <HeroCTAs />
        </div>
        <HeroAvatar src={heroPhoto} alt="Nicolas Cendron" />
      </div>
    </section>
  )
}
