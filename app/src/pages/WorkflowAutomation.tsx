import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageHero from '../components/PageHero'
import { Lightbulb, GitBranch, Network, Settings } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const sections = [
  {
    icon: Lightbulb,
    label: 'INTELLIGENCE',
    title: 'Understanding Before Automating',
    body: 'Before we automate, we understand. Our process intelligence systems analyze existing workflows to identify bottlenecks, redundancies, and optimization opportunities. We design automation that respects existing operational patterns while eliminating redundant manual steps.',
  },
  {
    icon: GitBranch,
    label: 'PIPELINES',
    title: 'End-to-End Process Automation',
    body: 'From document processing and data extraction to approval workflows and reporting pipelines, we automate the operational processes that consume disproportionate human time. Our systems identify process bottlenecks, suggest optimization patterns, and implement automation with minimal disruption.',
  },
  {
    icon: Network,
    label: 'ORCHESTRATION',
    title: 'Cross-Functional Automation at Scale',
    body: 'Comprehensive automation platforms designed for large-scale organizational deployment. These solutions handle cross-functional automation, enterprise system integration, governance and compliance automation, and scalable AI operations management.',
  },
  {
    icon: Settings,
    label: 'OPERATIONS',
    title: 'Integrated Operational Platforms',
    body: 'Autonomous business systems where multiple AI agents and automation workflows operate in coordination to manage entire business functions — from operations and finance to legal and compliance — with human oversight and intervention capabilities.',
  },
]

export default function WorkflowAutomation() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.workflow-section').forEach((section) => {
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
        headline="Orchestration at / Enterprise Scale"
        body="Our workflow engines orchestrate complex business processes across departments, systems, and external platforms — creating unified operational flows without forcing organizations to abandon their existing infrastructure."
        label="WORKFLOW AUTOMATION"
      />

      {sections.map((section) => (
        <section key={section.label} className="workflow-section w-full py-24 border-t border-white/5">
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
