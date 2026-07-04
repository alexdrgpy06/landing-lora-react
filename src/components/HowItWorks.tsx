import type { ComponentType, SVGProps } from 'react';
import { MapPinIcon, RadioTowerIcon, GatewayIcon, SignalWaveIcon, RefreshIcon, LockIcon, RulerIcon } from './icons/Icons';
import StepFlowDiagram from './icons/StepFlowDiagram';
import CoverageDiagram from './icons/CoverageDiagram';

export default function HowItWorks({ id = 'como-funciona' }: { id?: string }) {
  const steps: { number: string; Icon: ComponentType<SVGProps<SVGSVGElement>>; title: string; desc: string }[] = [
    {
      number: '01',
      Icon: MapPinIcon,
      title: 'Nodos de guardia',
      desc: 'Dispositivos portátiles con GPS y botón de pánico. Reportan posición y permiten alertas de emergencia.'
    },
    {
      number: '02',
      Icon: RadioTowerIcon,
      title: 'Repetidores solares',
      desc: 'Instalados en puntos elevados, extienden la cobertura kilómetros a la redonda con panel solar.'
    },
    {
      number: '03',
      Icon: GatewayIcon,
      title: 'Gateway',
      desc: 'Conecta la red LoRa al panel central, unificando guardias y sensores en un solo mapa.'
    },
    {
      number: '04',
      Icon: SignalWaveIcon,
      title: 'Panel central',
      desc: 'Interfaz web con mapa, alertas, histórico y reglas de notificación. Sin instalación compleja.'
    }
  ];

  return (
    <section id={id} className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text mb-4">
            Cómo funciona
          </h2>
          <p className="text-lg text-dim leading-relaxed">
            Cuatro elementos simples que se comunican entre sí sin necesidad de torres, operadoras ni cables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-panel border border-border rounded-2xl p-6 overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-1 gradient-brand" />
              <div className="flex items-center gap-3 mb-3">
                <step.Icon className="w-6 h-6 text-brand flex-shrink-0" />
                <span className="text-2xl font-display font-bold text-mint">{step.number}</span>
              </div>
              <h3 className="text-lg font-bold text-text mb-2">{step.title}</h3>
              <p className="text-dim leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-8 bg-panel border border-border rounded-2xl mb-16">
          <h3 className="text-xl font-bold text-text text-center mb-10">De sensor a alerta, en un solo salto de red</h3>
          <StepFlowDiagram />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="p-8 bg-panel border border-border rounded-2xl">
            <h3 className="text-xl font-bold text-text text-center mb-8">Red mesh autorreparable</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div>
                <RefreshIcon className="w-8 h-8 text-brand mx-auto mb-2" />
                <h4 className="font-semibold text-text mb-1">Autorreparable</h4>
                <p className="text-dim text-sm">Si un nodo falla, la red busca ruta alternativa</p>
              </div>
              <div>
                <LockIcon className="w-8 h-8 text-brand mx-auto mb-2" />
                <h4 className="font-semibold text-text mb-1">Cifrada</h4>
                <p className="text-dim text-sm">Comunicación privada, sin operadoras terceras</p>
              </div>
              <div>
                <RulerIcon className="w-8 h-8 text-brand mx-auto mb-2" />
                <h4 className="font-semibold text-text mb-1">Escalable</h4>
                <p className="text-dim text-sm">Agregue nodos sin límite, la red crece sola</p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-panel border border-border rounded-2xl text-center">
            <h3 className="text-xl font-bold text-text mb-2">Cobertura por repetidor</h3>
            <p className="text-dim text-sm mb-4">Cada salto alcanza 15+ km según topografía</p>
            <CoverageDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}
