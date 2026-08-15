import { Link } from 'react-router-dom'

const footerLinks = [
  {
    title: 'Company',
    links: [
      { label: 'About', path: '/about' },
      { label: 'Careers', path: '/careers' },
      { label: 'Philosophy', path: '/philosophy' },
      { label: 'Contact', path: '/contact' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'AI Agents', path: '/ai-agents' },
      { label: 'Workflow Automation', path: '/workflow-automation' },
      { label: 'Legal Intelligence', path: '/legal-intelligence' },
      { label: 'Enterprise Solutions', path: '/enterprise-solutions' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', path: '/documentation' },
      { label: 'Infrastructure', path: '/infrastructure' },
      { label: 'Future Roadmap', path: '/future-roadmap' },
      { label: 'Security & Trust', path: '/security-trust' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Policies', path: '/policies' },
      { label: 'Privacy Policy', path: '/policies' },
      { label: 'Terms of Service', path: '/policies' },
      { label: 'AI Usage Policy', path: '/policies' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative w-full bg-void border-t border-white/5">
      {/* Giant Brand Text */}
      <div className="w-full px-6 lg:px-12 pt-24 pb-16 overflow-hidden">
        <h2 className="font-heading text-[8vw] md:text-[6vw] tracking-[-0.04em] text-white/[0.04] leading-none select-none whitespace-nowrap">
          WEEKEND KOMPANY
        </h2>
      </div>

      {/* Links Grid */}
      <div className="w-full px-6 lg:px-12 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.15em] text-cyan-400 mb-5">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="font-mono text-xs text-white/40 hover:text-white/70 transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full px-6 lg:px-12 py-6 border-t border-white/5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/30">
            &copy; {new Date().getFullYear()} Weekend Kompany. All rights reserved.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/30">
            Intelligent Infrastructure for Modern Operations
          </p>
        </div>
      </div>
    </footer>
  )
}
