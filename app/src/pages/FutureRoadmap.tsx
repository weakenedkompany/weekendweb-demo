import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageHero from '../components/PageHero'
import { Bot, Globe, Network, Scale, Users, TrendingUp, Shield } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const milestones = [
  {
    icon: Bot,
    timeline: 'Q3 2025 — Q2 2026',
    title: 'Fully Autonomous Operational Systems',
    body: 'Expanding our agent capabilities toward fully autonomous operational systems that can manage complex business functions with minimal human intervention, while maintaining strict oversight and control mechanisms.',
  },
  {
    icon: Globe,
    timeline: 'Q4 2025 — Q3 2026',
    title: 'Global Language Capabilities',
    body: 'Developing intelligent systems that operate fluently across languages and jurisdictions, enabling global enterprises to maintain consistent operational intelligence regardless of geographic or linguistic boundaries.',
  },
  {
    icon: Network,
    timeline: 'Q1 2026 — Q4 2026',
    title: 'Unified Enterprise Intelligence',
    body: 'Building comprehensive orchestration platforms that coordinate AI systems, human workflows, and third-party tools across entire enterprise architectures — creating unified operational intelligence at organizational scale.',
  },
  {
    icon: Scale,
    timeline: 'Q2 2026 — Q1 2027',
    title: 'Comprehensive Legal Intelligence',
    body: 'Expanding our legal-tech division into comprehensive legal intelligence platforms that encompass predictive legal analytics, global compliance monitoring, and cross-jurisdictional legal reasoning systems.',
  },
  {
    icon: Users,
    timeline: 'Q3 2026 — Q2 2027',
    title: 'Seamless Human-Machine Collaboration',
    body: 'Developing integrated platforms where AI agents and human teams collaborate seamlessly — with clear role definition, handoff protocols, and collaborative intelligence that maximizes collective capability.',
  },
  {
    icon: TrendingUp,
    timeline: 'Q4 2026 — Q3 2027',
    title: 'Anticipating Needs Before They Arise',
    body: 'Moving beyond reactive automation to predictive systems that anticipate operational needs, identify emerging bottlenecks before they form, and suggest proactive optimizations.',
  },
  {
    icon: Shield,
    timeline: 'Q1 2027 — Q4 2027',
    title: 'Security That Evolves Faster Than Threats',
    body: 'Building next-generation security systems that combine behavioral AI, threat prediction, and autonomous response capabilities — creating security infrastructure that evolves faster than the threats it faces.',
  },
]

export default function FutureRoadmap() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.roadmap-item').forEach((item, i) => {
        gsap.from(item, {
          scrollTrigger: { trigger: item, start: 'top 85%', toggleActions: 'play none none reverse' },
          opacity: 0, x: i % 2 === 0 ? -30 : 30, duration: 0.8, ease: 'power2.out',
        })
      })
    }, contentRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={contentRef}>
      <PageHero
        headline="The Road / Ahead"
        body="Our strategic roadmap for building the intelligent infrastructure that will power the next generation of enterprises."
        label="FUTURE ROADMAP"
      />

      {/* Timeline */}
      <div className="w-full px-6 lg:px-12 pb-16">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-white/10 lg:-translate-x-px" />

          <div className="space-y-16">
            {milestones.map((milestone, i) => (
              <div
                key={milestone.title}
                className={`roadmap-item relative grid grid-cols-1 lg:grid-cols-2 gap-8 ${
                  i % 2 === 0 ? '' : 'lg:text-right'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 lg:left-1/2 top-0 w-3 h-3 bg-cyan-400 rounded-full -translate-x-1/2 ring-4 ring-void" />

                {/* Content */}
                <div className={`pl-14 lg:pl-0 ${i % 2 === 0 ? 'lg:pr-16' : 'lg:col-start-2 lg:pl-16'}`}>
                  <div className={`glass-panel p-8 ${i % 2 === 0 ? '' : 'lg:text-left'}`}>
                    <div className={`flex items-center gap-3 mb-4 ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                      <milestone.icon size={20} className="text-cyan-400" />
                      <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-cyan-400/70">
                        {milestone.timeline}
                      </p>
                    </div>
                    <h3 className="font-heading text-xl md:text-2xl tracking-[-0.02em] text-white mb-4">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed">
                      {milestone.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Closing */}
      <section className="w-full py-32 border-t border-white/5">
        <div className="w-full px-6 lg:px-12 text-center max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl tracking-[-0.03em] text-white mb-6">
            This is operational intelligence, engineered.
          </h2>
          <p className="text-base text-white/50 leading-relaxed">
            The future of work is not about working harder. It is about building systems that think
            clearly, execute reliably, and operate transparently — infrastructure so intelligent it
            becomes invisible, so trustworthy it becomes foundational.
          </p>
        </div>
      </section>
    </div>
  )
}
