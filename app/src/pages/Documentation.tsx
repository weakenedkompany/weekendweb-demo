import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageHero from '../components/PageHero'
import { BookOpen, Code, Workflow, Cpu, Rocket, Server, Building2, Scale, Menu, X } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const docSections = [
  {
    id: 'api',
    icon: Code,
    label: 'API',
    title: 'RESTful API Architecture',
    body: 'Weekend Kompany provides a comprehensive RESTful API for integrating our AI systems into your existing infrastructure. Our API supports workflow orchestration, agent management, document processing, and real-time operational intelligence. Authentication is handled via OAuth 2.0 with JWT tokens. Rate limiting is applied at the organization level with configurable thresholds.',
    details: [
      'OAuth 2.0 authentication with JWT tokens',
      'Rate limiting at organization level',
      'Comprehensive RESTful endpoints',
      'Real-time operational intelligence feeds',
      'Webhook support for event-driven integrations',
      'SDKs available for Python, TypeScript, and Go',
    ],
  },
  {
    id: 'workflows',
    icon: Workflow,
    label: 'WORKFLOWS',
    title: 'Workflow Orchestration API',
    body: 'The Workflow API enables programmatic creation, management, and monitoring of automated business processes. Define workflows using our declarative JSON schema, trigger executions via webhooks or schedules, and monitor progress through real-time event streams. Supports conditional branching, parallel execution, and exception handling.',
    details: [
      'Declarative JSON schema for workflow definition',
      'Webhook and schedule-based triggers',
      'Real-time event stream monitoring',
      'Conditional branching and parallel execution',
      'Exception handling with human escalation',
      'Visual workflow designer with export capability',
    ],
  },
  {
    id: 'architecture',
    icon: Cpu,
    label: 'ARCHITECTURE',
    title: 'System Architecture Overview',
    body: "Weekend Kompany's platform is built on a microservices architecture deployed across geographically distributed regions. Core services include: Agent Orchestration Service, Workflow Engine, Document Intelligence Service, Security Monitoring Service, and Analytics Platform. All services communicate via gRPC with event-driven async processing via Apache Kafka.",
    details: [
      'Microservices architecture with gRPC communication',
      'Geographically distributed deployments',
      'Event-driven async processing via Apache Kafka',
      'Auto-scaling and load balancing',
      'Service mesh for secure inter-service communication',
      'Comprehensive observability with distributed tracing',
    ],
  },
  {
    id: 'ai-ops',
    icon: BookOpen,
    label: 'AI OPERATIONS',
    title: 'Agent Management and Deployment',
    body: 'The AI Operations API provides endpoints for deploying, configuring, and monitoring AI agents. Create agent instances from pre-trained templates, configure domain-specific knowledge bases, set compliance boundaries, and monitor agent performance through comprehensive dashboards. Supports A/B testing and gradual rollout strategies.',
    details: [
      'Pre-trained agent templates for common use cases',
      'Domain-specific knowledge base configuration',
      'Compliance boundary enforcement',
      'Performance monitoring dashboards',
      'A/B testing and gradual rollout support',
      'Agent versioning and rollback capability',
    ],
  },
  {
    id: 'onboarding',
    icon: Rocket,
    label: 'ONBOARDING',
    title: 'Getting Started',
    body: 'New to Weekend Kompany? Our onboarding guides walk you through account setup, API key generation, first workflow creation, and agent deployment. Start with our Quick Start tutorial to build your first automated workflow in under 15 minutes, then explore our comprehensive guides for advanced configurations.',
    details: [
      '15-minute Quick Start tutorial',
      'Account setup and API key generation',
      'First workflow creation guide',
      'Agent deployment walkthrough',
      'Interactive code examples',
      'Video tutorials and webinars',
    ],
  },
  {
    id: 'deployment',
    icon: Server,
    label: 'DEPLOYMENT',
    title: 'Enterprise Deployment Options',
    body: 'Weekend Kompany supports multiple deployment models: Cloud SaaS (fully managed), Private Cloud (dedicated infrastructure), and On-Premises (self-hosted). Each deployment option maintains the same API compatibility and feature set. Enterprise customers receive dedicated deployment engineers and 24/7 infrastructure support.',
    details: [
      'Cloud SaaS — fully managed, instant deployment',
      'Private Cloud — dedicated infrastructure',
      'On-Premises — self-hosted, air-gapped capable',
      'Consistent API across all deployment models',
      'Dedicated deployment engineers',
      '24/7 infrastructure monitoring and support',
    ],
  },
  {
    id: 'enterprise',
    icon: Building2,
    label: 'ENTERPRISE',
    title: 'Enterprise Integration Patterns',
    body: 'Our enterprise integration patterns cover common deployment scenarios: SSO integration (SAML 2.0 and OIDC), directory synchronization (LDAP/Active Directory), audit log streaming (SIEM integration), and custom connector development. Reference implementations are available for Salesforce, SAP, Workday, and major legal practice management systems.',
    details: [
      'SAML 2.0 and OIDC SSO integration',
      'LDAP/Active Directory synchronization',
      'SIEM audit log streaming',
      'Custom connector development kit',
      'Reference implementations for major platforms',
      'Enterprise architecture consultation',
    ],
  },
  {
    id: 'legal',
    icon: Scale,
    label: 'LEGAL',
    title: 'Legal-Tech Integration Guide',
    body: 'Comprehensive documentation for integrating Weekend Kompany\'s legal intelligence systems into your practice. Covers: document template configuration, jurisdiction-specific rule sets, compliance workflow setup, privilege protection configuration, and matter lifecycle automation. Includes sample implementations for common legal workflow patterns.',
    details: [
      'Document template configuration guide',
      'Jurisdiction-specific rule set setup',
      'Compliance workflow configuration',
      'Privilege protection implementation',
      'Matter lifecycle automation templates',
      'Sample implementations for common patterns',
    ],
  },
]

export default function Documentation() {
  const [activeId, setActiveId] = useState('api')
  const [mobileOpen, setMobileOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  const activeSection = docSections.find((s) => s.id === activeId) || docSections[0]

  useEffect(() => {
    if (!contentRef.current) return
    const ctx = gsap.context(() => {
      gsap.from('.doc-content', {
        opacity: 0, y: 20, duration: 0.5, ease: 'power2.out',
      })
    }, contentRef)
    return () => ctx.revert()
  }, [activeId])

  return (
    <div>
      <PageHero
        headline="Technical / Documentation"
        body="Comprehensive guides, API references, and architectural documentation for Weekend Kompany's intelligent infrastructure platform."
        label="DOCUMENTATION"
      />

      <div className="w-full px-6 lg:px-12 pb-32">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden flex items-center gap-2 mb-4 px-4 py-2 border border-white/20 text-white font-mono text-xs uppercase"
              >
                {mobileOpen ? <X size={14} /> : <Menu size={14} />}
                {activeSection.label}
              </button>
              <nav className={`${mobileOpen ? 'block' : 'hidden'} lg:block`}>
                <ul className="space-y-1">
                  {docSections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => {
                          setActiveId(section.id)
                          setMobileOpen(false)
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 font-mono text-xs uppercase tracking-[0.05em] text-left transition-all ${
                          activeId === section.id
                            ? 'text-cyan-400 bg-cyan-400/10 border-l-2 border-cyan-400'
                            : 'text-white/40 hover:text-white/70 hover:bg-white/5 border-l-2 border-transparent'
                        }`}
                      >
                        <section.icon size={14} />
                        {section.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div ref={contentRef} className="flex-1 min-w-0">
            <div className="doc-content">
              <div className="mb-8">
                <p className="section-label mb-3">{activeSection.label}</p>
                <h2 className="font-heading text-3xl md:text-4xl tracking-[-0.02em] text-white mb-6">
                  {activeSection.title}
                </h2>
                <p className="text-base text-white/50 leading-relaxed max-w-3xl">
                  {activeSection.body}
                </p>
              </div>

              <div className="border-t border-white/10 pt-8">
                <h3 className="font-mono text-xs uppercase tracking-[0.1em] text-cyan-400 mb-6">
                  Key Features
                </h3>
                <ul className="space-y-4">
                  {activeSection.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="font-mono text-xs text-cyan-400/50 mt-1">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm text-white/50 leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 p-6 glass-panel">
                <p className="font-mono text-xs uppercase tracking-[0.1em] text-cyan-400 mb-2">
                  Need Help?
                </p>
                <p className="text-sm text-white/40">
                  Our developer support team is available for enterprise customers.
                  Contact us at{' '}
                  <a href="mailto:developers@weekendkompany.com" className="text-cyan-400 hover:underline">
                    developers@weekendkompany.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
