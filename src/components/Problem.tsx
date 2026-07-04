import type { ComponentType, SVGProps } from 'react';
import { EyeIcon, CowIcon, ClockIcon, RadioTowerIcon } from './icons/Icons';

export default function Problem({ id = 'problema' }: { id?: string }) {
  const problems: { Icon: ComponentType<SVGProps<SVGSVGElement>>; title: string; desc: string }[] = [
    {
      Icon: EyeIcon,
      title: 'Vigilancia a ciegas',
      desc: 'Sin datos en tiempo real, las rondas se hacen "por compromiso" y cualquier incidente se descubre horas o días después.'
    },
    {
      Icon: CowIcon,
      title: 'Pérdidas silenciosas',
      desc: 'El abigeato no se detiene solo. Sin detección temprana, el robo de ganado se convierte en una pérdida recurrente y difícil de recuperar.'
    },
    {
      Icon: ClockIcon,
      title: 'Reacción tardía',
      desc: 'Un corte de alambrado o una intrusión pueden pasar inadvertidos hasta la ronda siguiente. Para entonces, el daño está hecho.'
    },
    {
      Icon: RadioTowerIcon,
      title: 'Sin comunicación real',
      desc: 'Radios de voz tradicionales no geolocalizan, no registran historial y no integran datos. Son islas de información.'
    }
  ];

  return (
    <section id={id} className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text mb-4">
            El problema que nadie ve hasta que es tarde
          </h2>
          <p className="text-lg text-dim leading-relaxed">
            En estancias de 20.000 a 30.000 ha no hay señal de celular. Cuando un guardia está en el interior del campo, la empresa no sabe dónde está, no puede recibir un aviso suyo si algo ocurre, y no hay forma de detectar a tiempo un corte de alambrado o el ingreso de intrusos para robar ganado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-panel border border-border rounded-2xl p-6 border-l-4 border-l-red-500 hover:border-border-light transition-colors"
            >
              <problem.Icon className="w-8 h-8 text-dim mb-3" />
              <h3 className="text-lg font-bold text-text mb-2">{problem.title}</h3>
              <p className="text-dim leading-relaxed">{problem.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
