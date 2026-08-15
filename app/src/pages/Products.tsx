import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageHero from '../components/PageHero'
import { ArrowRight, Bot, Workflow, Scale, ShieldCheck } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const products = [
  {
    icon: Bot,
    label: 'PRODUCT DIVISION',
    title: 'AI Agent Networks',
    body: 'We develop autonomous AI agents capable of understanding complex operational contexts, executing multi-step workflows, and making context-aware decisions within defined parameters. Our agents are not scripted bots — they are reasoning systems trained on domain-specific operational logic.',
    features: [
      'Domain-specific training on operational logic',
      'Multi-step workflow execution with dependency management',
      'Context-aware decision-making within compliance boundaries',
      'Full observability: every action logged, every decision traceable',
      'Human oversight with confirmation gates for critical decisions',
      'Integration with existing enterprise environments',
    ],
    path: '/ai-agents',
  },
  {
    icon: Workflow,
    label: 'PRODUCT DIVISION',
    title: 'Workflow Engines',
    body: 'Our workflow engines orchestrate complex business processes across departments, systems, and external platforms. We design automation that respects existing operational patterns while eliminating redundant manual steps. The systems integrate with enterprise software, legal platforms, communication tools, and proprietary databases.',
    features: [
      'Cross-departmental process orchestration',
      'Conditional logic and data transformation',
      'Exception management with human escalation',
      'Integration with existing infrastructure (no rip-and-replace)',
      'Real-time monitoring and optimization suggestions',
      '99.9%+ uptime with redundant architecture',
    ],
    path: '/workflow-automation',
  },
  {
    icon: Scale,
    label: 'PRODUCT DIVISION',
    title: 'Legal Intelligence Platform',
    body: 'We engineer AI systems specifically for legal operations: intelligent drafting tools that understand jurisdiction-specific language, contract analysis systems that identify risk patterns, and workflow platforms that manage matter lifecycles from intake to resolution. These systems are trained on legal reasoning, not just legal text.',
    features: [
      'Jurisdiction-aware document drafting',
      'Contract risk analysis and pattern identification',
      'Matter lifecycle management from intake to resolution',
      'Regulatory compliance monitoring across multiple jurisdictions',
      'Privilege protection and secure data handling',
      'Integration with practice management systems',
    ],
    path: '/legal-intelligence',
  },
  {
    icon: ShieldCheck,
    label: 'PRODUCT DIVISION',
    title: 'Security Architecture',
    body: 'Our security division builds AI-powered threat detection systems that monitor operational environments for anomalies, vulnerabilities, and attack patterns. We combine behavioral analysis, pattern recognition, and real-time monitoring to identify threats before they materialize.',
    features: [
      'Behavioral analysis and anomaly detection',
      'Pattern recognition across operational environments',
      'Real-time threat monitoring with predictive intelligence',
      'Minimized false positives with maximized detection coverage',
      'Enterprise reliability with 99.9%+ uptime',
      'Audit trails and compliance reporting',
    ],
    path: '/security-trust',
  },
]

export default function Products() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.product-section').forEach((section, i) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power2.out',
        })
      })
    }, contentRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={contentRef}>
      <PageHero
        headline="Intelligent Infrastructure / For Modern Operations"
        body="Weekend Kompany builds integrated AI systems across four core product divisions. Each product is engineered with the same underlying architecture — designed for reliability, security, and transparency at enterprise scale."
        label="PRODUCTS"
      />

      {products.map((product) => (
        <section
          key={product.title}
          className="product-section w-full py-24 border-t border-white/5"
        >
          <div className="w-full px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-3">
                <div className="lg:sticky lg:top-32">
                  <product.icon size={24} className="text-cyan-400 mb-4" />
                  <p className="section-label">{product.label}</p>
                </div>
              </div>
              <div className="lg:col-span-9">
                <h2 className="font-heading text-3xl md:text-4xl tracking-[-0.02em] text-white mb-6">
                  {product.title}
                </h2>
                <p className="text-base text-white/50 leading-relaxed mb-8 max-w-3xl">
                  {product.body}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="font-mono text-xs text-cyan-400/50 mt-1">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm text-white/50 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to={product.path}
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Explore {product.title}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
