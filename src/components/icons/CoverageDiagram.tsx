export default function CoverageDiagram() {
  const nodes = [
    { x: 90, y: 70 },
    { x: 250, y: 40 },
    { x: 60, y: 190 },
    { x: 260, y: 210 },
  ];

  return (
    <svg
      viewBox="0 0 320 240"
      className="w-full h-auto max-w-md mx-auto"
      role="img"
      aria-label="Cada repetidor cubre 15 o más kilómetros por salto"
    >
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="55" fill="none" stroke="#34D399" strokeOpacity="0.35" strokeWidth="1.2" strokeDasharray="4 4" />
          <circle cx={n.x} cy={n.y} r="6" fill="#0f1512" stroke="#6EE7B7" strokeWidth="1.6" />
          <circle cx={n.x} cy={n.y} r="2.2" fill="#34D399" />
        </g>
      ))}
      <line x1={nodes[0].x} y1={nodes[0].y} x2={nodes[1].x} y2={nodes[1].y} stroke="#6EE7B7" strokeOpacity="0.5" strokeWidth="1.2" strokeDasharray="3 4" />
      <line x1={nodes[0].x} y1={nodes[0].y} x2={nodes[2].x} y2={nodes[2].y} stroke="#6EE7B7" strokeOpacity="0.5" strokeWidth="1.2" strokeDasharray="3 4" />
      <line x1={nodes[1].x} y1={nodes[1].y} x2={nodes[3].x} y2={nodes[3].y} stroke="#6EE7B7" strokeOpacity="0.5" strokeWidth="1.2" strokeDasharray="3 4" />
      <line x1={nodes[2].x} y1={nodes[2].y} x2={nodes[3].x} y2={nodes[3].y} stroke="#6EE7B7" strokeOpacity="0.5" strokeWidth="1.2" strokeDasharray="3 4" />

      <text x={(nodes[0].x + nodes[1].x) / 2} y={(nodes[0].y + nodes[1].y) / 2 - 6} fill="#8b9791" fontSize="9" textAnchor="middle" fontFamily="Inter, sans-serif">15+ km</text>
    </svg>
  );
}
