import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageHero from '../components/PageHero'

gsap.registerPlugin(ScrollTrigger)

const pillars = [
  'AI-powered workflows that understand context and execute with precision',
  'Intelligent automation that eliminates operational friction without eliminating human agency',
  'Operational efficiency through systems that learn, adapt, and scale',
  'Legal-tech modernization that brings intelligence to legal operations and compliance',
  'Enterprise AI systems designed for reliability, security, and transparency',
  'Trust-driven infrastructure where every automated decision is explainable and accountable',
]

const goals = [
  {
    title: 'Autonomous Operations',
    description:
      'Expanding our agent capabilities toward fully autonomous operational systems that can manage complex business functions with minimal human intervention, while maintaining strict oversight and control mechanisms.',
  },
  {
    title: 'Global Legal Intelligence',
    description:
      'Expanding our legal-tech division into comprehensive legal intelligence platforms that encompass predictive legal analytics, global compliance monitoring, and cross-jurisdictional legal reasoning systems.',
  },
  {
    title: 'Enterprise Orchestration',
    description:
      'Building comprehensive orchestration platforms that coordinate AI systems, human workflows, and third-party tools across entire enterprise architectures — creating unified operational intelligence at organizational scale.',
  },
  {
    title: 'AI Workforce Systems',
    description:
      'Developing integrated platforms where AI agents and human teams collaborate seamlessly — with clear role definition, handoff protocols, and collaborative intelligence that maximizes collective capability.',
  },
]

export default function About() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.about-section').forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: 'power2.out',
        })
      })
    }, contentRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={contentRef}>
      <PageHero
        headline="Operational Intelligence, / Engineered."
        body="Weekend Kompany is an AI infrastructure and intelligent systems company building the operational backbone for modern enterprises, legal institutions, and business systems."
      />

      {/* Mission */}
      <section className="about-section w-full py-24 border-t border-white/5">
        <div className="w-full px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
              <p className="section-label lg:sticky lg:top-32">MISSION</p>
            </div>
            <div className="lg:col-span-9">
              <h2 className="font-heading text-3xl md:text-4xl tracking-[-0.02em] text-white mb-8 leading-tight">
                To engineer intelligent operational infrastructure that transforms how organizations
                work, decide, and secure their operations.
              </h2>
              <p className="text-base text-white/50 leading-relaxed mb-8 max-w-3xl">
                We build AI-powered workflows, intelligent automation systems, and legal-technology
                platforms that make enterprises more efficient, legal professionals more capable, and
                operational systems more trustworthy.
              </p>
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-cyan-400 mb-6">
                Our Commitment
              </p>
              <ul className="space-y-4">
                {pillars.map((pillar, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="font-mono text-xs text-cyan-400/50 mt-1">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm text-white/60 leading-relaxed">{pillar}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="about-section w-full py-24 border-t border-white/5">
        <div className="w-full px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
              <p className="section-label lg:sticky lg:top-32">VISION</p>
            </div>
            <div className="lg:col-span-9 space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl tracking-[-0.02em] text-white leading-tight">
                The Silent, Reliable Foundation of Every Organization
              </h2>
              <p className="text-base text-white/50 leading-relaxed max-w-3xl">
                We envision a future where intelligent infrastructure operates as the silent, reliable
                foundation of every organization. Where legal workflows, business processes, security
                protocols, and operational intelligence are not managed by disparate tools, but
                orchestrated by unified AI systems that understand context, respect boundaries, and
                operate with complete transparency.
              </p>
              <p className="text-base text-white/50 leading-relaxed max-w-3xl">
                This is not about replacing human judgment. It is about building infrastructure so
                intelligent that professionals can focus on decisions that matter — strategy,
                relationships, creativity, and judgment — while systems handle execution with
                precision and reliability.
              </p>
              <p className="text-base text-white/50 leading-relaxed max-w-3xl">
                We are building the operational intelligence layer for the next generation of
                enterprises: autonomous where appropriate, human-centered where essential, and
                architected for trust at every level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="about-section w-full py-24 border-t border-white/5">
        <div className="w-full px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
              <p className="section-label lg:sticky lg:top-32">PURPOSE</p>
            </div>
            <div className="lg:col-span-9 space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl tracking-[-0.02em] text-white leading-tight">
                Complexity Has Outgrown Human Capacity
              </h2>
              <p className="text-base text-white/50 leading-relaxed max-w-3xl">
                Organizations today manage thousands of concurrent workflows, compliance
                requirements, security protocols, and business processes across fragmented systems.
                The result is friction at every level: delayed decisions, manual bottlenecks,
                compliance gaps, and operational drift.
              </p>
              <p className="text-base text-white/50 leading-relaxed max-w-3xl">
                We do not build tools. We build systems that think, execute, and adapt. Our focus
                spans three integrated domains: AI-powered workflow automation, legal-technology
                modernization, and enterprise security infrastructure. Each domain is engineered with
                the same underlying philosophy — that intelligent systems should reduce operational
                weight while increasing human capability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="about-section w-full py-24 border-t border-white/5">
        <div className="w-full px-6 lg:px-12">
          <div className="mb-16">
            <p className="section-label mb-4">STRATEGIC OBJECTIVES</p>
            <h2 className="font-heading text-3xl md:text-4xl tracking-[-0.02em] text-white">
              Building the Infrastructure of Tomorrow
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {goals.map((goal) => (
              <div key={goal.title} className="glass-panel p-8">
                <h3 className="font-heading text-xl tracking-[-0.02em] text-white mb-4">
                  {goal.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="about-section w-full py-32 border-t border-white/5">
        <div className="w-full px-6 lg:px-12 text-center max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl tracking-[-0.03em] text-white mb-6">
            This is operational intelligence, engineered.
          </h2>
          <p className="text-base text-white/50 leading-relaxed">
            Not for the spectacle of technology, but for the quiet transformation of how
            organizations operate, decide, and secure their future.
          </p>
        </div>
      </section>
    </div>
  )
}
