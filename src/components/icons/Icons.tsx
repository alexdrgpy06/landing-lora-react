import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
};

export function RadioTowerIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v18" />
      <path d="M8 8a4 4 0 0 1 8 0" />
      <path d="M5.5 5.5a8 8 0 0 1 13 0" />
      <path d="M9.5 15h5l1.2 6h-7.4z" />
      <circle cx="12" cy="8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function BatteryIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="7" width="16" height="10" rx="2" />
      <path d="M21 10.5v3" />
      <rect x="5" y="9.5" width="9" height="5" rx="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function BoltIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 5 6v5.5c0 4.6 3 8 7 9.5 4-1.5 7-4.9 7-9.5V6z" />
      <path d="M9 12l2 2 4-4.5" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.6 7-12a7 7 0 0 0-14 0c0 5.4 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.4" />
    </svg>
  );
}

export function MeshIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="5" cy="6" r="2" />
      <circle cx="19" cy="6" r="2" />
      <circle cx="12" cy="12" r="2.4" />
      <circle cx="5" cy="18" r="2" />
      <circle cx="19" cy="18" r="2" />
      <path d="M6.6 7.2 10 10.4M17.4 7.2 14 10.4M6.6 16.8 10 13.6M17.4 16.8 14 13.6" strokeDasharray="2 2.4" />
    </svg>
  );
}

export function CowIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 10c0-1.8 1.3-3 3-3 .7-1.6 2.3-2.5 3.9-2.2.9-1 2.5-1.1 3.5-.1.6-.3 1.4-.2 1.9.3.5-.2 1.2 0 1.5.6 1.4.1 2.2 1.4 1.9 2.7" />
      <path d="M4.5 10.2C3 10.6 2.3 12 3 13.3c.5 1 1.7 1.4 2.7 1" />
      <path d="M19.5 10.2c1.4.4 2.1 1.8 1.4 3.1-.5 1-1.7 1.4-2.7 1" />
      <path d="M6 11.5v3.8c0 2.6 2 4.2 4.2 4.5M18 11.5v3.8c0 2.6-2 4.2-4.2 4.5" />
      <path d="M9.4 19.6v2M14.6 19.6v2" />
      <circle cx="9.5" cy="9.5" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="9.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SignalWaveIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2 12h2.5l2-5 3 10 2.5-13 2.5 13 3-10 2-5H22" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function EyeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="2.6" />
    </svg>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
      <path d="M7.5 10.5V7a4.5 4.5 0 0 1 9 0v3.5" />
      <circle cx="12" cy="15" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function BriefcaseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 13h18" />
    </svg>
  );
}

export function ChartIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20V10M11 20V4M18 20v-7" />
      <path d="M3 20h18" />
    </svg>
  );
}

export function TrophyIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 4h8v5a4 4 0 0 1-8 0z" />
      <path d="M8 5H5a3 3 0 0 0 3 5M16 5h3a3 3 0 0 1-3 5" />
      <path d="M12 13v3M9 20h6M9.5 20c0-1.7.9-2.6 2.5-2.6s2.5.9 2.5 2.6" />
    </svg>
  );
}

export function RefreshIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 11A8 8 0 0 0 6.3 6.3L4 8.6" />
      <path d="M4 4v4.6h4.6" />
      <path d="M4 13a8 8 0 0 0 13.7 4.7l2.3-2.3" />
      <path d="M20 20v-4.6h-4.6" />
    </svg>
  );
}

export function RulerIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="8" width="18" height="8" rx="1.5" transform="rotate(-8 12 12)" />
      <path d="M7.5 8.6l.6 2M11 8l.6 2M14.5 7.4l.6 2M18 6.8l.6 2" />
    </svg>
  );
}

export function WifiOffIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 3l18 18" />
      <path d="M5 12.5a13 13 0 0 1 3.5-2.4M19 12.5a13 13 0 0 0-4.3-2.9M8.5 16a7.5 7.5 0 0 1 4-1.6M15.5 16a7.4 7.4 0 0 0-1.7-1.4" />
      <circle cx="12" cy="19.5" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function GatewayIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="6" y="9" width="12" height="11" rx="1.5" />
      <path d="M9 9V7a3 3 0 0 1 6 0v2" />
      <path d="M9.5 13h5M9.5 16h5" />
      <circle cx="12" cy="4" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PhoneAlertIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="6" y="2.5" width="12" height="19" rx="2.4" />
      <path d="M10 19h4" />
      <path d="M12 8.5v3.6" />
      <circle cx="12" cy="14.4" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12.5 9.5 17 19 6.5" />
    </svg>
  );
}

export function SensorIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v4" />
      <path d="M8 6a5.6 5.6 0 0 1 8 0" />
      <path d="M5.3 3.5a9.4 9.4 0 0 1 13.4 0" />
      <rect x="8" y="10" width="8" height="9" rx="1.5" />
      <path d="M10.5 14h3" />
    </svg>
  );
}

export function AlertCutIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 6l7.5 6.5M21 6l-7.5 6.5" />
      <path d="M10.5 12.5 3 19M13.5 12.5 21 19" />
      <circle cx="12" cy="12.5" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}
