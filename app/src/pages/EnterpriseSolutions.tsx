import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageHero from '../components/PageHero'
import { Building2, Briefcase, Landmark, Users, Cog, Handshake } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const industries = [
  {
    icon: Briefcase,
    title: 'Legal Firms',
    body: 'From solo practitioners to global law firms, we provide intelligent systems for document drafting, case management, compliance monitoring, and operational workflow automation.',
  },
  {
    icon: Building2,
    title: 'Enterprises',
    body: 'Large organizations with complex operational requirements benefit from our enterprise automation platforms, AI infrastructure, and security systems designed for scale and compliance.',
  },
  {
    icon: Landmark,
    title: 'Institutions',
    body: 'Government agencies, educational institutions, healthcare systems, and non-profits leverage our secure, compliant infrastructure for operational modernization.',
  },
  {
    icon: Users,
    title: 'Operations Teams',
    body: 'The operational backbone of organizations — operations managers, process engineers, and workflow specialists — use our platforms to design, deploy, and optimize intelligent workflows.',
  },
  {
    icon: Cog,
    title: 'Startups',
    body: 'Growing companies use our systems to build operational capability without proportional overhead — allowing them to operate with enterprise-level efficiency from early stages.',
  },
  {
    icon: Handshake,
    title: 'Business Infrastructure',
    body: 'Companies that provide operational infrastructure to other businesses — SaaS platforms, service providers, consulting firms — integrate our AI systems into their offerings.',
  },
]

export default function EnterpriseSolutions() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.enterprise-section').forEach((section) => {
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
        headline="Built for Enterprise / Complexity"
        body="Comprehensive automation platforms designed for large-scale organizational deployment. Solutions that handle cross-functional automation, enterprise system integration, governance and compliance automation, and scalable AI operations management."
        label="ENTERPRISE SOLUTIONS"
      />

      {/* Industries Grid */}
      <section className="enterprise-section w-full py-24 border-t border-white/5">
        <div className="w-full px-6 lg:px-12">
          <div className="mb-16">
            <p className="section-label mb-4">TARGET INDUSTRIES</p>
            <h2 className="font-heading text-3xl md:text-4xl tracking-[-0.02em] text-white">
              Serving Organizations Across Sectors
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <div key={industry.title} className="glass-panel p-8 group hover:border-cyan-500/50 transition-all">
                <industry.icon size={24} className="text-cyan-400 mb-5" />
                <h3 className="font-heading text-xl tracking-[-0.02em] text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {industry.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">{industry.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="enterprise-section w-full py-24 border-t border-white/5">
        <div className="w-full px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
              <p className="section-label lg:sticky lg:top-32">ENTERPRISE FEATURES</p>
            </div>
            <div className="lg:col-span-9 space-y-10">
              <div>
                <h3 className="font-heading text-2xl tracking-[-0.02em] text-white mb-4">
                  Cross-Functional Automation
                </h3>
                <p className="text-base text-white/50 leading-relaxed">
                  Our platforms automate processes across departments — from legal and compliance
                  to finance and operations — creating unified workflows that eliminate silos and
                  reduce manual handoffs. Every automation respects existing operational patterns
                  while removing friction.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-2xl tracking-[-0.02em] text-white mb-4">
                  Enterprise System Integration
                </h3>
                <p className="text-base text-white/50 leading-relaxed">
                  We integrate with Salesforce, SAP, Workday, major legal practice management
                  systems, and proprietary databases. Our API-first architecture ensures seamless
                  connectivity without requiring organizations to abandon their existing
                  infrastructure.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-2xl tracking-[-0.02em] text-white mb-4">
                  Governance and Compliance
                </h3>
                <p className="text-base text-white/50 leading-relaxed">
                  Built-in governance frameworks ensure every automated action is logged, auditable,
                  and compliant. Role-based access control, approval workflows, and compliance
                  monitoring are integrated at the platform level, not added as afterthoughts.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-2xl tracking-[-0.02em] text-white mb-4">
                  Scalable AI Operations
                </h3>
                <p className="text-base text-white/50 leading-relaxed">
                  Our infrastructure scales from a single workflow to thousands of concurrent
                  processes across global deployments. Auto-scaling, load balancing, and
                  geographically distributed processing ensure consistent performance at any scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
