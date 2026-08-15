import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageHero from '../components/PageHero'
import { ArrowRight, Brain, Scale, Shield, Cog, Sparkles, Heart } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const roles = [
  {
    title: 'Senior AI Engineer',
    description: 'Design and deploy autonomous AI agents for enterprise workflow automation.',
    icon: Brain,
  },
  {
    title: 'Legal-Tech Product Manager',
    description: 'Lead product development for our legal intelligence platform.',
    icon: Scale,
  },
  {
    title: 'Security Engineer',
    description: 'Build AI-powered threat detection and security monitoring systems.',
    icon: Shield,
  },
  {
    title: 'Infrastructure Engineer',
    description: 'Design and maintain scalable, reliable enterprise infrastructure.',
    icon: Cog,
  },
  {
    title: 'Workflow Automation Specialist',
    description: 'Create and optimize business process automation for enterprise clients.',
    icon: Sparkles,
  },
  {
    title: 'AI Ethics Researcher',
    description: 'Develop frameworks for responsible AI deployment and governance.',
    icon: Heart,
  },
]

const benefits = [
  'Health, dental, and vision coverage',
  'Flexible PTO and remote work',
  'Equity participation',
  'Professional development budget',
  'Home office stipend',
  'Parental leave',
]

export default function Careers() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.careers-section').forEach((section) => {
        gsap.from(section, {
          scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none reverse' },
          opacity: 0, y: 40, duration: 0.8, ease: 'power2.out',
        })
      })
    }, contentRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={contentRef}>
      <PageHero
        headline="Build the Future of / Operational Intelligence"
        body="Join a team of engineers, researchers, and operators building the intelligent infrastructure that powers the next generation of enterprises."
        label="CAREERS"
      />

      {/* Culture */}
      <section className="careers-section w-full py-24 border-t border-white/5">
        <div className="w-full px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
              <p className="section-label lg:sticky lg:top-32">CULTURE</p>
            </div>
            <div className="lg:col-span-9">
              <h2 className="font-heading text-3xl md:text-4xl tracking-[-0.02em] text-white mb-6">
                Operational Excellence, Human Centered
              </h2>
              <p className="text-base text-white/50 leading-relaxed max-w-3xl">
                At Weekend Kompany, we believe that the best technology is built by people who
                understand the problems they're solving. Our culture emphasizes deep thinking,
                precise execution, and genuine collaboration. We value intellectual curiosity,
                operational discipline, and the ability to translate complex ideas into elegant
                systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="careers-section w-full py-24 border-t border-white/5">
        <div className="w-full px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
              <p className="section-label lg:sticky lg:top-32">PHILOSOPHY</p>
            </div>
            <div className="lg:col-span-9">
              <h2 className="font-heading text-3xl md:text-4xl tracking-[-0.02em] text-white mb-6">
                We Build AI. We Use AI. We Think About AI.
              </h2>
              <p className="text-base text-white/50 leading-relaxed max-w-3xl">
                Every team member at Weekend Kompany works alongside AI systems. We practice what
                we preach — using our own workflow automation, legal intelligence, and operational
                systems to improve our work. We believe that understanding AI from the inside is
                essential to building responsible, effective intelligent infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="careers-section w-full py-24 border-t border-white/5">
        <div className="w-full px-6 lg:px-12">
          <div className="mb-12">
            <p className="section-label mb-4">OPEN POSITIONS</p>
            <h2 className="font-heading text-3xl md:text-4xl tracking-[-0.02em] text-white">
              Current Opportunities
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {roles.map((role) => (
              <div
                key={role.title}
                className="glass-panel p-6 group cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <role.icon size={20} className="text-cyan-400 mt-1" />
                    <div>
                      <h3 className="font-heading text-lg tracking-[-0.02em] text-white group-hover:text-cyan-400 transition-colors mb-2">
                        {role.title}
                      </h3>
                      <p className="text-sm text-white/40">{role.description}</p>
                    </div>
                  </div>
                  <ArrowRight size={16} className="text-white/20 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all mt-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="careers-section w-full py-24 border-t border-white/5">
        <div className="w-full px-6 lg:px-12">
          <div className="mb-12">
            <p className="section-label mb-4">BENEFITS</p>
            <h2 className="font-heading text-3xl md:text-4xl tracking-[-0.02em] text-white">
              Why Weekend Kompany
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {benefits.map((benefit, i) => (
              <div key={i} className="glass-panel p-5">
                <p className="text-sm text-white/60">{benefit}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 font-mono text-xs uppercase tracking-[0.1em] border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Apply Now
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
