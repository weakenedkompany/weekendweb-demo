import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageHero from '../components/PageHero'
import { Building2, Lock, ClipboardCheck, Eye, Shield, HeartHandshake } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const sections = [
  {
    icon: Building2,
    label: 'ARCHITECTURE',
    title: 'Built-In, Not Bolted-On',
    body: 'Every system is designed with explainability, auditability, and accountability as core requirements. Users and administrators can trace every automated decision, understand its reasoning, and verify its accuracy. There are no black boxes — only transparent, inspectable intelligent systems.',
  },
  {
    icon: Lock,
    label: 'PRIVACY',
    title: 'Privacy by Engineering, Not by Policy',
    body: 'Data privacy is not a compliance checkbox — it is an engineering priority. We minimize data collection, secure data handling, and design systems that protect sensitive information by default. Our systems employ end-to-end encryption, zero-knowledge architectures where applicable, and strict access controls.',
  },
  {
    icon: ClipboardCheck,
    label: 'GOVERNANCE',
    title: 'Responsible AI by Design',
    body: 'We deploy AI systems with clear ethical frameworks: transparency in decision-making, fairness in algorithmic outcomes, respect for human agency, and accountability for system behavior. Our governance structures ensure that AI augmentation never overrides human judgment in critical decisions.',
  },
  {
    icon: Eye,
    label: 'OVERSIGHT',
    title: 'Humans Remain in Control',
    body: 'We design every system with appropriate human oversight mechanisms. Critical decisions require human confirmation, anomalous outputs trigger human review, and system behavior is continuously monitored by human operators. Our AI systems are built to augment human capability, not replace human responsibility.',
  },
  {
    icon: Shield,
    label: 'SECURITY',
    title: 'Production-Grade Protection',
    body: 'Our AI systems are engineered with security as a foundational constraint, not an afterthought. Model security, data protection, access control, and inference security are integrated into the architecture from initial design through deployment. We maintain SOC 2 Type II compliance and adhere to industry-leading security standards.',
  },
  {
    icon: HeartHandshake,
    label: 'ETHICS',
    title: 'Technology in Service of Humanity',
    body: 'We believe that ethical AI is not a feature but a foundation. Our systems are designed to be transparent in their operations, fair in their outcomes, and accountable in their decisions. We conduct regular algorithmic audits, maintain diverse training datasets, and publish transparency reports on our AI systems.',
  },
]

export default function SecurityTrust() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.security-section').forEach((section) => {
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
        headline="Trust is / Infrastructure"
        body="Intelligent infrastructure requires security architecture that matches its capability. Weekend Kompany builds security and trust into every layer of its systems."
        label="SECURITY & TRUST"
      />

      {sections.map((section) => (
        <section key={section.label} className="security-section w-full py-24 border-t border-white/5">
          <div className="w-full px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-3">
                <div className="lg:sticky lg:top-32">
                  <section.icon size={24} className="text-cyan-400 mb-4" />
                  <p className="section-label">{section.label}</p>
                </div>
              </div>
              <div className="lg:col-span-9">
                <h2 className="font-heading text-3xl md:text-4xl tracking-[-0.02em] text-white mb-6">
                  {section.title}
                </h2>
                <p className="text-base text-white/50 leading-relaxed max-w-3xl">{section.body}</p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
