interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <p className={`font-mono text-xs uppercase tracking-[0.15em] text-cyan-400 ${className}`}>
      {children}
    </p>
  )
}
