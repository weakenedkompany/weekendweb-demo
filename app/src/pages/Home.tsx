import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CyanCoreDevice from '../components/CyanCoreDevice'
import { ArrowRight, Shield, Server, Globe, Zap } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const trustItems = [
  { icon: Shield, label: 'SOC 2 TYPE II CERTIFIED' },
  { icon: Server, label: '99.99% UPTIME SLA' },
  { icon: Zap, label: 'ENTERPRISE-GRADE SECURITY' },
  { icon: Globe, label: 'GLOBAL DEPLOYMENT' },
]

const featuredSystems = [
  {
    title: 'AI Agent Networks',
    description:
      'Autonomous reasoning systems trained on domain-specific operational logic, designed to handle ambiguity while maintaining strict compliance boundaries.',
    path: '/ai-agents',
  },
  {
    title: 'Workflow Engines',
    description:
      'Orchestration infrastructure that powers business process execution with conditional logic, data transformation, and enterprise-grade reliability.',
    path: '/workflow-automation',
  },
  {
    title: 'Legal Intelligence',
    description:
      'AI systems trained on legal reasoning, not just legal text. Jurisdiction-aware drafting, contract analysis, and compliance monitoring.',
    path: '/legal-intelligence',
  },
  {
    title: 'Security Architecture',
    description:
      'Threat detection systems that combine behavioral analysis, pattern recognition, and real-time monitoring to identify threats before they materialize.',
    path: '/security-trust',
  },
]

const metrics = [
  { value: '2.4M+', label: 'workflows processed daily' },
  { value: '340+', label: 'enterprise clients served' },
  { value: '28', label: 'jurisdictions operating' },
  { value: '<12ms', label: 'average response time' },
]

export default function Home() {
  const manifestoRef = useRef<HTMLDivElement>(null)
  const systemsRef = useRef<HTMLDivElement>(null)
  const metricsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const triggers: ScrollTrigger[] = []

    const contexts: gsap.Context[] = []

    // Manifesto section animation
    if (manifestoRef.current) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: manifestoRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse',
          },
        })
        tl.from('.manifesto-label', { opacity: 0, x: -30, duration: 0.8, ease: 'power2.out' })
        tl.from('.manifesto-headline', { opacity: 0, y: 40, duration: 1, ease: 'power2.out' }, '-=0.5')
        tl.from('.manifesto-body', { opacity: 0, y: 30, duration: 0.8, ease: 'power2.out' }, '-=0.6')
        tl.from('.manifesto-cta', { opacity: 0, y: 20, duration: 0.6, ease: 'power2.out' }, '-=0.4')
        if (tl.scrollTrigger) triggers.push(tl.scrollTrigger)
      }, manifestoRef)
      contexts.push(ctx)
    }

    // Systems animation
    if (systemsRef.current) {
      const ctx = gsap.context(() => {
        gsap.from('.system-card', {
          scrollTrigger: {
            trigger: systemsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 40,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
        })
      }, systemsRef)
      contexts.push(ctx)
    }

    // Metrics animation
    if (metricsRef.current) {
      const ctx = gsap.context(() => {
        gsap.from('.metric-item', {
          scrollTrigger: {
            trigger: metricsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
        })
      }, metricsRef)
      contexts.push(ctx)
    }

    return () => {
      triggers.forEach((t) => t.kill())
      contexts.forEach((c) => c.revert())
    }
  }, [])

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <CyanCoreDevice />
        {/* Bottom gradient scrim for text readability */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[50%] z-10"
          style={{
            background: 'linear-gradient(to top, hsl(var(--background)) 0%, transparent 100%)',
          }}
        />
        <div className="absolute left-6 top-28 z-20 hidden lg:block technical-label">
          WK/GRID-01 / INTELLIGENT INFRASTRUCTURE
        </div>
        <div className="absolute right-12 top-32 z-20 hidden lg:block h-48 w-48 rounded-full border border-white/10">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-px bg-white/10" />
          <div className="absolute left-0 top-1/2 h-px w-full -translate-y-px bg-white/10" />
        </div>
        {/* Hero Text */}
        <div className="absolute bottom-16 left-0 z-20 px-6 lg:px-12 max-w-5xl">
          <p className="technical-label mb-5">SERIES 00 / SYSTEM BLUEPRINT</p>
          <h1 className="font-heading text-6xl md:text-7xl lg:text-[112px] leading-[0.92] text-white mb-7">
            THE FUTURE OF<br />
            HUMAN-MACHINE<br />
            COLLABORATION.
          </h1>
          <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-xl mb-8 border-l border-white/20 pl-5">
            Weekend Kompany builds intelligent operational infrastructure for enterprises,
            legal institutions, and modern business systems.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 font-mono text-xs uppercase tracking-[0.1em] border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Explore Our Systems
              <ArrowRight size={14} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 font-mono text-xs uppercase tracking-[0.1em] text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Request Enterprise Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="w-full py-8 border-y border-white/5 editorial-rule">
        <div className="w-full px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <item.icon size={16} className="text-cyan-400/60" />
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/40">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section ref={manifestoRef} className="w-full py-32">
        <div className="w-full px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 border-t border-white/10 pt-10">
            {/* Left Column - Sticky Label */}
            <div className="lg:col-span-3">
              <div className="lg:sticky lg:top-32">
                <p className="manifesto-label section-label">SYSTEM PHILOSOPHY</p>
              </div>
            </div>
            {/* Right Column - Content */}
            <div className="lg:col-span-9">
              <h2 className="manifesto-headline font-heading text-4xl md:text-6xl lg:text-7xl leading-[0.98] text-white mb-8 max-w-5xl">
                We build <span className="text-cyan-400">intelligent</span> operating systems
                that transform how organizations work, decide, and secure their future.
              </h2>
              <p className="manifesto-body text-base md:text-lg text-white/50 leading-relaxed max-w-3xl mb-8">
                Weekend Kompany exists because operational complexity has outgrown human capacity.
                Organizations today manage thousands of concurrent workflows, compliance requirements,
                security protocols, and business processes across fragmented systems. The result is
                friction: delayed decisions, manual bottlenecks, compliance gaps, and operational drift.
              </p>
              <Link
                to="/philosophy"
                className="manifesto-cta inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Read Our Philosophy
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Systems */}
      <section ref={systemsRef} className="w-full py-32">
        <div className="w-full px-6 lg:px-12">
          <div className="mb-16 border-t border-white/10 pt-10">
            <p className="section-label mb-4">CORE INFRASTRUCTURE</p>
            <h2 className="font-heading text-4xl md:text-6xl text-white">
              Systems That Think, Execute, and Adapt
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredSystems.map((system) => (
              <Link
                key={system.title}
                to={system.path}
                className="system-card group glass-panel p-8 md:p-10 block"
              >
                <p className="technical-label mb-8">MODULE / {String(featuredSystems.indexOf(system) + 1).padStart(2, '0')}</p>
                <h3 className="font-heading text-3xl md:text-4xl text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {system.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed mb-6">
                  {system.description}
                </p>
                <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-cyan-400/70 group-hover:text-cyan-400 transition-colors">
                  Learn More
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Metrics */}
      <section ref={metricsRef} className="w-full py-32 border-t border-white/5">
        <div className="w-full px-6 lg:px-12">
          <div className="mb-16 border-t border-white/10 pt-10">
            <p className="section-label mb-4">OPERATIONAL INTELLIGENCE</p>
            <h2 className="font-heading text-4xl md:text-6xl text-white">
              Infrastructure Built for Scale
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {metrics.map((metric) => (
              <div key={metric.label} className="metric-item">
                <p className="font-heading text-5xl md:text-6xl text-cyan-400 mb-2">
                  {metric.value}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/40">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-32 border-t border-white/5">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-7xl text-white mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-base md:text-lg text-white/50 leading-relaxed mb-10 max-w-2xl mx-auto">
              Join enterprises that trust Weekend Kompany as their operational intelligence layer.
              From workflow automation to legal-tech modernization, we build the systems that power
              the future of work.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 font-mono text-xs uppercase tracking-[0.1em] bg-cyan-500 text-black hover:bg-cyan-400 transition-colors"
              >
                Schedule a Consultation
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/documentation"
                className="inline-flex items-center gap-2 px-8 py-4 font-mono text-xs uppercase tracking-[0.1em] border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
