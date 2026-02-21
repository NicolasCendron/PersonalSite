interface HeroAvatarProps {
  src: string
  alt: string
}

export function HeroAvatar({ src, alt }: HeroAvatarProps) {
  return (
    <div data-testid="hero-avatar" className="flex-shrink-0">
      <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full ring-2 ring-accent overflow-hidden">
        <img
          data-testid="hero-avatar-img"
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}
