import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface PageHeroProps {
  headline: string
  body: string
  label?: string
}

export default function PageHero({ headline, body, label }: PageHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const ctx = gsap.context(() => {
      gsap.from('.hero-label', { opacity: 0, y: 20, duration: 0.8, ease: 'power2.out', delay: 0.1 })
      gsap.from('.hero-headline', { opacity: 0, y: 40, duration: 1, ease: 'power2.out', delay: 0.2 })
      gsap.from('.hero-body', { opacity: 0, y: 30, duration: 0.8, ease: 'power2.out', delay: 0.4 })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative w-full min-h-[60vh] flex items-end pb-16 pt-32">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-4xl">
          {label && (
            <p className="hero-label section-label mb-6">{label}</p>
          )}
          <h1 className="hero-headline font-heading text-5xl md:text-7xl lg:text-8xl tracking-[-0.04em] leading-[1.05] text-white mb-8">
            {headline.split(' / ').map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="hero-body text-base md:text-lg text-white/50 leading-relaxed max-w-2xl">
            {body}
          </p>
        </div>
      </div>
    </section>
  )
}
