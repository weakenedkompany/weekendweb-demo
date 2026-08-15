import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageHero from '../components/PageHero'
import { FileText, Search, Workflow, ShieldCheck, Layers, Database } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const sections = [
  {
    icon: FileText,
    label: 'DRAFTING',
    title: 'Jurisdiction-Aware Document Generation',
    body: 'Our drafting engines generate legal documents — contracts, pleadings, motions, compliance documents — with jurisdiction-aware language, precedent integration, and clause intelligence. The systems learn from firm-specific drafting patterns and maintain consistency across document portfolios.',
  },
  {
    icon: Search,
    label: 'ANALYSIS',
    title: 'Risk Detection at Machine Speed',
    body: 'We build systems that analyze legal documents for risk patterns, compliance gaps, and strategic implications. Contract review, due diligence analysis, and regulatory document processing are automated with accuracy rates that match or exceed manual review, delivered in a fraction of the time.',
  },
  {
    icon: Workflow,
    label: 'WORKFLOW',
    title: 'From Intake to Resolution',
    body: 'From matter intake and conflict checking to deadline management and billing workflows, our systems automate the operational mechanics of legal practice. This allows legal professionals to focus on legal reasoning rather than administrative coordination.',
  },
  {
    icon: ShieldCheck,
    label: 'COMPLIANCE',
    title: 'Regulatory Monitoring Across Jurisdictions',
    body: 'AI systems that monitor regulatory changes, assess compliance implications, and generate compliance documentation. These systems maintain current awareness across multiple jurisdictions and regulatory frameworks.',
  },
  {
    icon: Layers,
    label: 'INTEGRATION',
    title: 'Unified Legal Operations',
    body: 'Integrated platforms that connect document management, practice management, billing, and client communication into unified operational environments powered by intelligent automation.',
  },
  {
    icon: Database,
    label: 'INFRASTRUCTURE',
    title: 'Built for Legal Standards',
    body: 'The underlying architecture that makes legal AI reliable: secure data handling, privilege protection, audit trails, and ethical compliance frameworks built into every system from the ground up.',
  },
]

export default function LegalIntelligence() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.legal-section').forEach((section) => {
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
        headline="Legal Intelligence, / Modernized"
        body="The legal profession operates at the intersection of precision, compliance, and time pressure. Weekend Kompany's Legal-Tech Division modernizes this environment through intelligent systems that respect the complexity of legal work while eliminating its operational inefficiencies."
        label="LEGAL INTELLIGENCE"
      />

      {sections.map((section) => (
        <section key={section.label} className="legal-section w-full py-24 border-t border-white/5">
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
