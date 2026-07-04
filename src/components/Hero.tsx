import type { ComponentType, SVGProps } from 'react';
import { RadioTowerIcon, BatteryIcon, BoltIcon } from './icons/Icons';
import HeroMesh from './icons/HeroMesh';

interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  return (
    <header className="relative pt-32 pb-20 bg-bg text-text overflow-hidden grid-texture">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand/15 via-transparent to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-mint border border-border-light rounded-full px-3 py-1 mb-6">
            Red privada LoRa / Meshtastic
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight mb-6">
            Seguridad agrícola sin señal,{' '}
            <span className="gradient-brand-text">sin límites</span>
          </h1>
          <p className="text-lg md:text-xl text-dim max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            Red LoRa/Meshtastic propia para estancias: rastreo de guardias, sensores perimetrales y alertas en tiempo real — sin celular, sin internet, sin abigeato.
          </p>

          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 mb-12">
            <StatCard value="15+" label="km por salto" Icon={RadioTowerIcon} />
            <StatCard value="30" label="días de batería" Icon={BatteryIcon} />
            <StatCard value="<3" label="min para alerta" Icon={BoltIcon} />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={onCtaClick}
              className="px-8 py-4 gradient-brand text-bg font-semibold text-lg rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-brand/20"
            >
              Solicitar demo sin compromiso
            </button>
            <button
              onClick={onCtaClick}
              className="px-8 py-4 bg-panel text-text font-semibold text-lg rounded-lg hover:bg-panel-2 transition-colors border border-border"
            >
              Ver cómo funciona
            </button>
          </div>
        </div>

        <div className="relative">
          <HeroMesh />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-bg to-transparent" />
    </header>
  );
}

function StatCard({ value, label, Icon }: { value: string; label: string; Icon: ComponentType<SVGProps<SVGSVGElement>> }) {
  return (
    <div className="bg-panel border border-border rounded-2xl p-4 md:p-6 backdrop-blur-sm text-center lg:text-left">
      <Icon className="w-7 h-7 md:w-8 md:h-8 text-brand mb-2 mx-auto lg:mx-0" />
      <div className="text-2xl md:text-3xl font-display font-bold text-text">{value}</div>
      <div className="text-[11px] md:text-xs text-dim uppercase tracking-wider mt-1">{label}</div>
    </div>
  );
}
