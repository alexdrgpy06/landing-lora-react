import { SensorIcon, MeshIcon, GatewayIcon, PhoneAlertIcon } from './Icons';

const steps = [
  { Icon: SensorIcon, label: 'Sensor perimetral' },
  { Icon: MeshIcon, label: 'Salto por la malla' },
  { Icon: GatewayIcon, label: 'Gateway central' },
  { Icon: PhoneAlertIcon, label: 'Alerta al instante' },
];

export default function StepFlowDiagram() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-2">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center gap-2 md:gap-0 md:contents">
          <div className="flex flex-col items-center text-center w-28">
            <div className="w-16 h-16 rounded-2xl bg-panel border border-border flex items-center justify-center mb-3">
              <step.Icon className="w-7 h-7 text-brand" />
            </div>
            <span className="text-xs text-dim leading-tight">{step.label}</span>
          </div>
          {i < steps.length - 1 && (
            <svg
              className="hidden md:block flex-1 min-w-8 h-4 text-mint/40 mx-1"
              viewBox="0 0 60 16"
              preserveAspectRatio="none"
            >
              <line x1="2" y1="8" x2="52" y2="8" stroke="currentColor" strokeWidth="1.6" strokeDasharray="5 5" className="animate-dash" />
              <path d="M48 3 L56 8 L48 13" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
          {i < steps.length - 1 && (
            <svg className="md:hidden w-4 h-8 text-mint/40 rotate-90" viewBox="0 0 60 16">
              <line x1="2" y1="8" x2="52" y2="8" stroke="currentColor" strokeWidth="1.6" strokeDasharray="5 5" />
              <path d="M48 3 L56 8 L48 13" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}
