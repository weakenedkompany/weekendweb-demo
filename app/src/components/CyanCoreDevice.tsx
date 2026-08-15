const nodeGroups = [
  { x: 210, y: 155, label: 'INPUT' },
  { x: 410, y: 105, label: 'MODEL' },
  { x: 590, y: 205, label: 'POLICY' },
  { x: 470, y: 355, label: 'EXECUTE' },
  { x: 255, y: 320, label: 'AUDIT' },
]

export default function CyanCoreDevice() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute right-[-10vw] top-[8vh] w-[88vw] max-w-[980px] opacity-90 md:right-[2vw] md:w-[62vw]">
        <svg
          viewBox="0 0 820 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="vector-system-map h-auto w-full"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="systemLine" x1="158" y1="99" x2="652" y2="393" gradientUnits="userSpaceOnUse">
              <stop stopColor="var(--accent-blue)" stopOpacity="0.92" />
              <stop offset="1" stopColor="var(--accent-blue)" stopOpacity="0.18" />
            </linearGradient>
            <radialGradient id="systemWash" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(445 250) rotate(90) scale(245 310)">
              <stop stopColor="var(--accent-blue)" stopOpacity="0.16" />
              <stop offset="0.58" stopColor="var(--accent-blue)" stopOpacity="0.045" />
              <stop offset="1" stopColor="var(--accent-blue)" stopOpacity="0" />
            </radialGradient>
          </defs>

          <rect x="102" y="58" width="610" height="398" stroke="hsl(var(--border))" />
          <rect x="140" y="94" width="534" height="326" stroke="hsl(var(--border))" strokeDasharray="7 9" />
          <path d="M102 190H712M102 322H712M285 58V456M530 58V456" stroke="hsl(var(--border))" />
          <circle cx="410" cy="260" r="198" stroke="hsl(var(--border))" />
          <circle cx="410" cy="260" r="122" stroke="hsl(var(--border))" strokeDasharray="5 8" />
          <circle cx="410" cy="260" r="58" fill="url(#systemWash)" stroke="url(#systemLine)" />

          <path
            className="vector-flow vector-flow--one"
            d="M210 155C280 90 343 84 410 105C502 132 552 153 590 205C635 268 574 327 470 355C374 382 307 363 255 320C191 266 156 205 210 155Z"
            stroke="url(#systemLine)"
            strokeWidth="1.5"
          />
          <path
            className="vector-flow vector-flow--two"
            d="M255 320C302 250 347 201 410 105M210 155C288 207 370 242 590 205M470 355C444 283 426 205 410 105"
            stroke="var(--accent-blue)"
            strokeOpacity="0.42"
            strokeWidth="1"
          />

          <g className="vector-pulse">
            <circle cx="410" cy="260" r="8" fill="var(--accent-blue)" />
            <circle cx="410" cy="260" r="20" stroke="var(--accent-blue)" strokeOpacity="0.34" />
            <path d="M382 260H438M410 232V288" stroke="var(--accent-blue)" strokeOpacity="0.52" />
          </g>

          {nodeGroups.map((node, index) => (
            <g key={node.label} className="vector-node" style={{ animationDelay: `${index * 180}ms` }}>
              <rect x={node.x - 43} y={node.y - 18} width="86" height="36" fill="hsl(var(--background))" stroke="hsl(var(--border))" />
              <circle cx={node.x - 29} cy={node.y} r="4" fill="var(--accent-blue)" />
              <text x={node.x - 14} y={node.y + 4} fill="currentColor" fontSize="10" fontFamily="JetBrains Mono, monospace" letterSpacing="1.8">
                {node.label}
              </text>
            </g>
          ))}

          <g className="technical-label" transform="translate(102 34)">
            <text fill="currentColor">VECTOR MAP / OPERATIONAL INTELLIGENCE</text>
          </g>
          <g className="technical-label" transform="translate(574 481)">
            <text fill="currentColor">WK-SYSTEM / 05 NODES</text>
          </g>
        </svg>
      </div>
    </div>
  )
}
