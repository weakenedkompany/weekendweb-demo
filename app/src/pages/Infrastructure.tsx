import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageHero from '../components/PageHero'
import { Layers, Cpu, Database, Server, Shield, Activity } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const sections = [
  {
    icon: Layers,
    label: 'ARCHITECTURE',
    title: 'Decoupled, Scalable, Resilient',
    body: 'Our platform is built on a microservices architecture deployed across geographically distributed regions. Core services include: Agent Orchestration Service, Workflow Engine, Document Intelligence Service, Security Monitoring Service, and Analytics Platform. All services communicate via gRPC with event-driven async processing via Apache Kafka.',
  },
  {
    icon: Cpu,
    label: 'ML OPS',
    title: 'Production-Grade AI Infrastructure',
    body: 'We build the underlying infrastructure that makes enterprise AI reliable and scalable: model orchestration layers, data pipeline architecture, inference optimization, and deployment frameworks. This infrastructure is designed for production environments where uptime, latency, and security are non-negotiable.',
  },
  {
    icon: Database,
    label: 'DATA',
    title: 'Intelligent Data Flow',
    body: 'Our data pipelines handle ingestion, transformation, enrichment, and storage of operational data. Real-time stream processing enables immediate workflow responses, while batch processing supports analytics and reporting. Data lineage tracking ensures full traceability from source to destination.',
  },
  {
    icon: Server,
    label: 'DEPLOYMENT',
    title: 'Flexible, Reliable Deployments',
    body: 'Weekend Kompany supports multiple deployment models: Cloud SaaS (fully managed), Private Cloud (dedicated infrastructure), and On-Premises (self-hosted). Each deployment option maintains the same API compatibility and feature set. Enterprise customers receive dedicated deployment engineers and 24/7 infrastructure support.',
  },
  {
    icon: Activity,
    label: 'RELIABILITY',
    title: 'Built for Mission-Critical Operations',
    body: 'Systems designed for 99.9%+ uptime, with redundant architecture, failover mechanisms, and disaster recovery protocols. We build infrastructure that organizations can depend on for mission-critical operations. Multi-region deployments with automatic failover ensure continuous availability.',
  },
  {
    icon: Shield,
    label: 'SECURITY',
    title: 'Defense in Depth',
    body: 'Our security infrastructure implements defense in depth: network segmentation, encryption at rest and in transit, identity and access management, threat detection, and incident response. Regular penetration testing and vulnerability assessments ensure continuous security improvement.',
  },
]

export default function Infrastructure() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.infra-section').forEach((section) => {
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
        headline="The Architecture of / Intelligence"
        body="Weekend Kompany's infrastructure is built for enterprise scale: microservices architecture, geographically distributed deployments, and production-grade reliability."
        label="INFRASTRUCTURE"
      />

      {sections.map((section) => (
        <section key={section.label} className="infra-section w-full py-24 border-t border-white/5">
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
