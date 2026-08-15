import { useState } from 'react'
import PageHero from '../components/PageHero'
import { Lock, FileText, Brain, Database, ShieldCheck, Scale, HeartHandshake, ChevronRight } from 'lucide-react'

const policies = [
  {
    id: 'privacy',
    icon: Lock,
    label: 'PRIVACY',
    title: 'Privacy Policy',
    body: "Weekend Kompany is committed to protecting your privacy. This policy explains how we collect, use, store, and protect your personal information when you use our services. We collect only the data necessary to provide our services, maintain security, and comply with legal obligations. We do not sell personal data to third parties. Data retention follows strict schedules with automatic purging of unnecessary information. All data is stored in encrypted form using AES-256 encryption both in transit and at rest. Users have the right to access, correct, and delete their personal data. To exercise these rights, contact our Data Protection Officer at privacy@weekendkompany.com.",
  },
  {
    id: 'terms',
    icon: FileText,
    label: 'TERMS',
    title: 'Terms of Service',
    body: "These Terms of Service govern your access to and use of Weekend Kompany's platform and services. By using our services, you agree to these terms. Weekend Kompany provides AI-powered workflow automation, legal intelligence, and enterprise automation solutions on an as-is and as-available basis. We reserve the right to modify, suspend, or discontinue any part of our services with reasonable notice. Users are responsible for maintaining the confidentiality of their account credentials and for all activities that occur under their account. Prohibited activities include: attempting to breach security measures, using the service for unlawful purposes, reverse engineering our systems, or exceeding API rate limits. Service level agreements (SLAs) are available for enterprise customers.",
  },
  {
    id: 'ai-usage',
    icon: Brain,
    label: 'AI USAGE',
    title: 'AI Usage Policy',
    body: "Weekend Kompany's AI systems are designed to augment human decision-making, not replace it. This policy governs the responsible use of our AI capabilities. Our AI systems: (1) Provide recommendations, not mandates — all critical decisions require human confirmation; (2) Operate within defined compliance boundaries set by your organization; (3) Maintain full audit trails of all AI-generated outputs; (4) Are trained on diverse, vetted datasets to minimize bias; (5) Undergo regular algorithmic audits by independent third parties. Users must not rely solely on AI-generated outputs for decisions with significant legal, financial, or safety implications without independent human review.",
  },
  {
    id: 'data-governance',
    icon: Database,
    label: 'DATA',
    title: 'Data Governance Framework',
    body: 'Our data governance framework ensures that all data handled by Weekend Kompany systems is managed according to the highest standards of security, privacy, and compliance. Data is classified into four categories: Public, Internal, Confidential, and Restricted. Access controls are enforced based on role-based permissions with principle of least privilege. Data processing activities are documented in our Record of Processing Activities (ROPA). Cross-border data transfers comply with GDPR, LGPD, and other applicable data protection regulations. Data breach response procedures are tested quarterly with a 72-hour notification commitment.',
  },
  {
    id: 'security',
    icon: ShieldCheck,
    label: 'SECURITY',
    title: 'Security Policy',
    body: 'Weekend Kompany maintains a comprehensive security program aligned with ISO 27001, SOC 2 Type II, and industry best practices. Our security measures include: network segmentation and firewall protection, intrusion detection and prevention systems, regular vulnerability assessments and penetration testing, mandatory security training for all personnel, incident response procedures with defined escalation paths, and business continuity planning with disaster recovery protocols. Security incidents are reported to affected customers within 24 hours. Security certifications are available upon request for enterprise customers.',
  },
  {
    id: 'compliance',
    icon: Scale,
    label: 'COMPLIANCE',
    title: 'Regulatory Compliance',
    body: 'Weekend Kompany maintains compliance with major regulatory frameworks including: GDPR (General Data Protection Regulation), SOC 2 Type II, ISO 27001, HIPAA (for healthcare-adjacent deployments), and industry-specific regulations as applicable. Our compliance program includes: regular third-party audits, continuous compliance monitoring, automated regulatory change tracking, and dedicated compliance officers. Enterprise customers receive access to compliance documentation, audit reports, and compliance attestation letters.',
  },
  {
    id: 'responsible-ai',
    icon: HeartHandshake,
    label: 'RESPONSIBLE AI',
    title: 'Responsible AI Framework',
    body: 'Weekend Kompany is committed to developing and deploying AI systems responsibly. Our Responsible AI Framework is built on six pillars: (1) Fairness — our systems are designed to treat all individuals equitably; (2) Transparency — our AI decision-making processes are explainable and auditable; (3) Accountability — we maintain clear lines of responsibility for AI system behavior; (4) Privacy — we protect individual privacy in all AI operations; (5) Reliability — our systems undergo rigorous testing before deployment; (6) Safety — we implement safeguards to prevent harmful outcomes. We publish annual Responsible AI reports detailing our progress and challenges.',
  },
]

export default function Policies() {
  const [activeId, setActiveId] = useState('privacy')
  const activePolicy = policies.find((p) => p.id === activeId) || policies[0]

  return (
    <div>
      <PageHero
        headline="Policies & / Governance"
        body="Weekend Kompany maintains transparent, comprehensive policies governing data usage, AI ethics, security practices, and service terms."
        label="POLICIES"
      />

      <div className="w-full px-6 lg:px-12 pb-32">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <nav>
                <ul className="space-y-1">
                  {policies.map((policy) => (
                    <li key={policy.id}>
                      <button
                        onClick={() => setActiveId(policy.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 font-mono text-xs uppercase tracking-[0.05em] text-left transition-all ${
                          activeId === policy.id
                            ? 'text-cyan-400 bg-cyan-400/10 border-l-2 border-cyan-400'
                            : 'text-white/40 hover:text-white/70 hover:bg-white/5 border-l-2 border-transparent'
                        }`}
                      >
                        <policy.icon size={14} />
                        <span className="flex-1">{policy.label}</span>
                        <ChevronRight size={12} className={activeId === policy.id ? 'opacity-100' : 'opacity-0'} />
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div key={activeId} className="animate-fade-in">
              <p className="section-label mb-3">{activePolicy.label}</p>
              <h2 className="font-heading text-3xl md:text-4xl tracking-[-0.02em] text-white mb-8">
                {activePolicy.title}
              </h2>
              <div className="glass-panel p-8 md:p-10">
                <p className="text-sm text-white/50 leading-[1.8]">{activePolicy.body}</p>
              </div>
              <p className="mt-6 text-xs text-white/30 font-mono">
                Last updated: May 2026. For questions about this policy, contact{' '}
                <a href="mailto:legal@weekendkompany.com" className="text-cyan-400 hover:underline">
                  legal@weekendkompany.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
