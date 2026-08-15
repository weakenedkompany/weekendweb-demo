import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageHero from '../components/PageHero'
import { Brain, GitBranch, Sparkles, Users, Bot, Building2 } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const sections = [
  {
    icon: Brain,
    label: 'CAPABILITY',
    title: 'Reasoning Systems, Not Scripted Bots',
    body: 'Our agents are reasoning systems trained on domain-specific operational logic, designed to handle ambiguity while maintaining strict compliance boundaries. Each agent is built with observability at its core: every action is logged, every decision is traceable, and every output is verifiable.',
  },
  {
    icon: GitBranch,
    label: 'ORCHESTRATION',
    title: 'Coordinating Complex Multi-Step Processes',
    body: 'Our task orchestration platforms coordinate complex multi-step processes across multiple agents, systems, and human operators. These orchestration engines manage dependencies, handle exceptions, and maintain process continuity across distributed environments.',
  },
  {
    icon: Sparkles,
    label: 'INTELLIGENCE',
    title: 'Systems That Learn and Adapt',
    body: 'We create systems that transform operational data into actionable intelligence: predictive analytics for workflow optimization, resource allocation intelligence, performance monitoring, and strategic operational insights. These systems do not just report — they anticipate and recommend.',
  },
  {
    icon: Users,
    label: 'ASSISTANCE',
    title: 'Intelligent Support for Every Operation',
    body: 'Our workflow assistants integrate seamlessly into existing enterprise environments, providing intelligent support for data processing, content operations, technical support, and customer service. Each assistant is equipped with domain knowledge, decision frameworks, and integration capabilities.',
  },
  {
    icon: Bot,
    label: 'WORKFORCE',
    title: 'The Future of Human-Machine Collaboration',
    body: 'We are developing integrated platforms where AI agents and human teams collaborate seamlessly — with clear role definition, handoff protocols, and collaborative intelligence that maximizes collective capability. This is not about replacing humans; it is about extending human capability.',
  },
  {
    icon: Building2,
    label: 'DEPLOYMENT',
    title: 'Built for Enterprise Scale',
    body: 'Our enterprise agents are designed for production environments where uptime, latency, and security are non-negotiable. Infrastructure and methodologies for deploying AI automation across organizations of any size, with governance frameworks, performance monitoring, and continuous optimization built into the deployment model.',
  },
]

export default function AIAgents() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.agent-section').forEach((section) => {
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
        headline="Autonomous Systems, / Human Oversight"
        body="Weekend Kompany develops autonomous AI agents capable of understanding complex operational contexts, executing multi-step workflows, and making context-aware decisions within defined parameters."
        label="AI AGENTS"
      />

      {sections.map((section) => (
        <section
          key={section.label}
          className="agent-section w-full py-24 border-t border-white/5"
        >
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
                <p className="text-base text-white/50 leading-relaxed max-w-3xl">
                  {section.body}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
