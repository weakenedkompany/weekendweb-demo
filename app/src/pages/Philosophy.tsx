import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageHero from '../components/PageHero'
import { Zap, Users, Eye, Gem, ShieldCheck, Search, Target, Brain, Lock, TrendingUp, HeartHandshake, Fingerprint } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const principles = [
  {
    icon: Zap,
    title: 'Technology Should Reduce Friction',
    body: 'The best technology is the technology you do not notice. We build systems that remove operational obstacles without adding complexity. Every interface, every workflow, every integration is designed to make work smoother, not more complicated.',
  },
  {
    icon: Users,
    title: 'AI Should Augment Humans',
    body: 'We do not build systems to replace human capability — we build systems that extend it. The goal is not automation for its own sake, but automation that makes people more effective, more insightful, and more capable of focusing on work that requires judgment and creativity.',
  },
  {
    icon: Eye,
    title: 'Automation Should Feel Invisible',
    body: 'When automation works correctly, it should be indistinguishable from competence. Processes should flow without interruption, data should appear where needed, and decisions should be supported by intelligence that feels natural and intuitive.',
  },
  {
    icon: Gem,
    title: 'Systems Should Be Elegant and Reliable',
    body: 'We believe that technical excellence manifests as simplicity. Complex systems should present simple interfaces. Reliable systems should operate so consistently that their reliability becomes unremarkable — which is the highest compliment infrastructure can receive.',
  },
  {
    icon: ShieldCheck,
    title: 'Trust Is Infrastructure',
    body: 'Without trust, intelligent systems cannot be adopted. Without trust, automation creates anxiety rather than efficiency. We build trust through transparency, security, reliability, and accountability — making trust a structural element of every system we create.',
  },
  {
    icon: Search,
    title: 'Operational Clarity Matters',
    body: 'Organizations cannot optimize what they cannot see. We build systems that provide clear visibility into operations, processes, and performance — because clarity is the prerequisite for improvement.',
  },
]

const corePrinciples = [
  { icon: Target, text: 'Precision over noise' },
  { icon: Brain, text: 'Intelligence over complexity' },
  { icon: Lock, text: 'Security by design' },
  { icon: TrendingUp, text: 'Scalable systems' },
  { icon: HeartHandshake, text: 'Ethical AI usage' },
  { icon: Fingerprint, text: 'Privacy-first engineering' },
]

export default function Philosophy() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.philosophy-section').forEach((section) => {
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
        headline="Our Philosophy"
        body="The principles that guide every system we build, every decision we make, and every relationship we cultivate."
        label="COMPANY PHILOSOPHY"
      />

      {principles.map((principle) => (
        <section key={principle.title} className="philosophy-section w-full py-24 border-t border-white/5">
          <div className="w-full px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-3">
                <div className="lg:sticky lg:top-32">
                  <principle.icon size={24} className="text-cyan-400 mb-4" />
                </div>
              </div>
              <div className="lg:col-span-9">
                <h2 className="font-heading text-3xl md:text-4xl tracking-[-0.02em] text-white mb-6">
                  {principle.title}
                </h2>
                <p className="text-base text-white/50 leading-relaxed max-w-3xl">
                  {principle.body}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Core Principles Grid */}
      <section className="philosophy-section w-full py-24 border-t border-white/5">
        <div className="w-full px-6 lg:px-12">
          <div className="mb-12">
            <p className="section-label mb-4">CORE PRINCIPLES</p>
            <h2 className="font-heading text-3xl md:text-4xl tracking-[-0.02em] text-white">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {corePrinciples.map((cp) => (
              <div key={cp.text} className="glass-panel p-6 flex items-center gap-4">
                <cp.icon size={18} className="text-cyan-400 flex-shrink-0" />
                <span className="text-sm text-white/60">{cp.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
