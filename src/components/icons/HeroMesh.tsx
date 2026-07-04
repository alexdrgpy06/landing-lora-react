export default function HeroMesh() {
  const nodes = [
    { x: 90, y: 90 },
    { x: 230, y: 50 },
    { x: 380, y: 95 },
    { x: 60, y: 230 },
    { x: 400, y: 250 },
    { x: 170, y: 260 },
    { x: 300, y: 300 },
  ];
  const gateway = { x: 230, y: 190 };

  return (
    <svg
      viewBox="0 0 480 360"
      className="w-full h-auto max-w-xl mx-auto"
      role="img"
      aria-label="Diagrama de red mesh LoRa cubriendo una estancia sin señal celular"
    >
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#34D399" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6EE7B7" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>

      <circle cx={gateway.x} cy={gateway.y} r="170" fill="url(#glow)" />

      {/* range rings around gateway */}
      <circle cx={gateway.x} cy={gateway.y} r="80" fill="none" stroke="#6EE7B7" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="4 5" />
      <circle cx={gateway.x} cy={gateway.y} r="140" fill="none" stroke="#6EE7B7" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="4 5" />

      {/* connections node -> gateway */}
      {nodes.map((n, i) => (
        <line
          key={i}
          x1={n.x}
          y1={n.y}
          x2={gateway.x}
          y2={gateway.y}
          stroke="#34D399"
          strokeOpacity="0.55"
          strokeWidth="1.4"
          strokeDasharray="5 5"
          className="animate-dash"
        />
      ))}

      {/* nodes */}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="16" fill="#0f1512" stroke="#1c2621" strokeWidth="1" />
          <circle cx={n.x} cy={n.y} r="16" fill="none" stroke="#6EE7B7" strokeOpacity="0.5" strokeWidth="8" className="animate-pulse-ring" />
          <circle cx={n.x} cy={n.y} r="5" fill="url(#nodeGrad)" />
        </g>
      ))}

      {/* central gateway */}
      <g>
        <rect x={gateway.x - 26} y={gateway.y - 26} width="52" height="52" rx="12" fill="#0b0f0d" stroke="#34D399" strokeWidth="1.6" />
        <path d={`M${gateway.x - 10} ${gateway.y + 10} v-18 a10 10 0 0 1 20 0 v18`} fill="none" stroke="#6EE7B7" strokeWidth="1.6" strokeLinecap="round" />
        <rect x={gateway.x - 12} y={gateway.y - 2} width="24" height="16" rx="2.5" fill="none" stroke="#34D399" strokeWidth="1.6" />
        <circle cx={gateway.x} cy={gateway.y - 18} r="2" fill="#6EE7B7" />
      </g>

      {/* crossed-out signal bars: "sin celular" */}
      <g transform="translate(24,24)">
        <rect x="-8" y="-10" width="70" height="34" rx="8" fill="#0b0f0d" fillOpacity="0.7" stroke="#1c2621" />
        <g stroke="#8b9791" strokeWidth="2" strokeLinecap="round">
          <line x1="4" y1="12" x2="4" y2="18" />
          <line x1="12" y1="6" x2="12" y2="18" />
          <line x1="20" y1="0" x2="20" y2="18" />
          <line x1="28" y1="-6" x2="28" y2="18" />
        </g>
        <line x1="-2" y1="-8" x2="34" y2="24" stroke="#ef4444" strokeWidth="2.4" strokeLinecap="round" />
        <text x="42" y="10" fill="#8b9791" fontSize="9" fontFamily="Inter, sans-serif">SIN SEÑAL</text>
      </g>
    </svg>
  );
}
