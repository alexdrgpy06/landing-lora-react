import type { ComponentType, SVGProps } from 'react';
import { MapPinIcon, RadioTowerIcon, GatewayIcon, SignalWaveIcon } from './icons/Icons';

export default function Solution({ id = 'solucion' }: { id?: string }) {
  const components: { Icon: ComponentType<SVGProps<SVGSVGElement>>; title: string; desc: string }[] = [
    {
      Icon: MapPinIcon,
      title: 'Nodo de guardia',
      desc: 'GPS + botón de pánico. Batería de semanas. Cada guardia lleva uno.'
    },
    {
      Icon: RadioTowerIcon,
      title: 'Repetidor solar',
      desc: 'Extiende la cobertura kilómetros a la redonda. Sin obras civiles.'
    },
    {
      Icon: GatewayIcon,
      title: 'Gateway',
      desc: 'Puente entre la red LoRa y el panel central de la oficina.'
    },
    {
      Icon: SignalWaveIcon,
      title: 'Panel central',
      desc: 'Mapa, alertas e histórico en una sola pantalla, sin software especial.'
    }
  ];

  return (
    <section id={id} className="py-20 md:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text mb-4">
            Una red propia que no depende de nadie
          </h2>
          <p className="text-lg text-dim leading-relaxed">
            LoRa/Meshtastic crea una malla de radio de largo alcance que cubre toda la estancia sin torres, operadoras ni cables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {components.map((comp, index) => (
            <div
              key={index}
              className="bg-panel border border-border rounded-2xl p-6 text-center hover:border-mint/40 hover:shadow-lg hover:shadow-brand/5 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl gradient-brand flex items-center justify-center mx-auto mb-4">
                <comp.Icon className="w-8 h-8 text-bg" />
              </div>
              <h3 className="text-lg font-bold text-text mb-2">{comp.title}</h3>
              <p className="text-dim leading-relaxed">{comp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
