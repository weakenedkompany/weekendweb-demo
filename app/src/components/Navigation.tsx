import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Moon, Sun, X } from 'lucide-react'
import logoMark from '../../Group.svg'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'AI Agents', path: '/ai-agents' },
  { label: 'Workflow', path: '/workflow-automation' },
  { label: 'Legal', path: '/legal-intelligence' },
  { label: 'Security', path: '/security-trust' },
  { label: 'Docs', path: '/documentation' },
  { label: 'Contact', path: '/contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const location = useLocation()

  useEffect(() => {
    const savedTheme = localStorage.getItem('weekend-theme')
    const initialTheme = savedTheme === 'dark' ? 'dark' : 'light'
    setTheme(initialTheme)
    document.documentElement.classList.toggle('dark', initialTheme === 'dark')
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    localStorage.setItem('weekend-theme', nextTheme)
    document.documentElement.classList.toggle('dark', nextTheme === 'dark')
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-md border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={logoMark}
                alt="Weekend Kompany"
                className="logo-mark h-7 w-auto transition-opacity duration-300 group-hover:opacity-70"
              />
              <span className="font-heading text-xl leading-none text-white/90 hidden sm:block">
                Weekend Kompany
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] transition-colors ${
                    location.pathname === link.path
                      ? 'text-cyan-400'
                      : 'text-white/50 hover:text-white/80'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={toggleTheme}
                className="inline-flex h-9 w-9 items-center justify-center border border-white/20 bg-background/60 text-white/70 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
              </button>
              <Link
                to="/contact"
                className="hidden sm:block px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] border border-white/20 text-white/80 hover:bg-white hover:text-black transition-all duration-300"
              >
                Enterprise Demo
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="xl:hidden text-white/70 hover:text-white transition-colors"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-background/98 backdrop-blur-xl transition-all duration-500 xl:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-start justify-center h-full px-12 gap-6">
          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-heading text-3xl tracking-[-0.02em] transition-all duration-300 ${
                location.pathname === link.path
                  ? 'text-cyan-400'
                  : 'text-white/60 hover:text-white'
              }`}
              style={{ transitionDelay: mobileOpen ? `${i * 50}ms` : '0ms' }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
