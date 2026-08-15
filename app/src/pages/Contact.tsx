import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageHero from '../components/PageHero'
import { Send, Building2, Handshake, Users, MapPin, Phone, Mail } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const inquiryTypes = [
  'Enterprise Demo',
  'Partnership',
  'Technical Support',
  'Careers',
  'General',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', type: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return
    const ctx = gsap.context(() => {
      gsap.from('.contact-card', {
        scrollTrigger: { trigger: '.contact-card', start: 'top 80%' },
        opacity: 0, y: 30, duration: 0.8, stagger: 0.15, ease: 'power2.out',
      })
    }, contentRef)
    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div ref={contentRef}>
      <PageHero
        headline="Get in / Touch"
        body="Connect with our team for enterprise inquiries, partnership opportunities, or technical support."
        label="CONTACT"
      />

      <div className="w-full px-6 lg:px-12 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-[0.1em] text-white/40 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 bg-surface border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-[0.1em] text-white/40 mb-2">
                    Business Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 bg-surface border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-[0.1em] text-white/40 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-3 bg-surface border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-[0.1em] text-white/40 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="w-full px-4 py-3 bg-surface border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                  >
                    <option value="">Select type</option>
                    {inquiryTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-[0.1em] text-white/40 mb-2">
                  How can we help?
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 bg-surface border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  placeholder="Describe your inquiry..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-4 font-mono text-xs uppercase tracking-[0.1em] bg-cyan-500 text-black hover:bg-cyan-400 transition-colors"
              >
                <Send size={14} />
                {submitted ? 'Message Sent' : 'Send Inquiry'}
              </button>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="contact-card glass-panel p-6">
              <Building2 size={20} className="text-cyan-400 mb-4" />
              <h3 className="font-heading text-lg tracking-[-0.02em] text-white mb-2">
                Enterprise Solutions
              </h3>
              <p className="text-sm text-white/40 mb-3">
                For organizations evaluating Weekend Kompany for enterprise deployment.
              </p>
              <a href="mailto:enterprise@weekendkompany.com" className="font-mono text-xs text-cyan-400 hover:underline">
                enterprise@weekendkompany.com
              </a>
            </div>
            <div className="contact-card glass-panel p-6">
              <Handshake size={20} className="text-cyan-400 mb-4" />
              <h3 className="font-heading text-lg tracking-[-0.02em] text-white mb-2">
                Partnerships
              </h3>
              <p className="text-sm text-white/40 mb-3">
                Technology providers, systems integrators, and consulting firms.
              </p>
              <a href="mailto:partnerships@weekendkompany.com" className="font-mono text-xs text-cyan-400 hover:underline">
                partnerships@weekendkompany.com
              </a>
            </div>
            <div className="contact-card glass-panel p-6">
              <Users size={20} className="text-cyan-400 mb-4" />
              <h3 className="font-heading text-lg tracking-[-0.02em] text-white mb-2">
                Careers
              </h3>
              <p className="text-sm text-white/40 mb-3">
                Explore career opportunities at Weekend Kompany.
              </p>
              <a href="mailto:careers@weekendkompany.com" className="font-mono text-xs text-cyan-400 hover:underline">
                careers@weekendkompany.com
              </a>
            </div>
            <div className="contact-card glass-panel p-6">
              <div className="flex items-start gap-3 mb-4">
                <MapPin size={16} className="text-cyan-400 mt-1" />
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/40 mb-1">
                    Headquarters
                  </p>
                  <p className="text-sm text-white/60">
                    350 Mission Street, Suite 200<br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-cyan-400" />
                <span className="text-sm text-white/60">+1 (415) 555-0192</span>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <Mail size={16} className="text-cyan-400" />
                <a href="mailto:hello@weekendkompany.com" className="text-sm text-cyan-400 hover:underline">
                  hello@weekendkompany.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
