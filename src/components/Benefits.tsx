import { useState } from 'react';

interface Benefit {
  icon: string;
  title: string;
  desc: string;
  detail: string;
}

const benefits: Benefit[] = [
  {
    icon: '⏱️',
    title: 'Respuesta en minutos',
    desc: 'Una alerta de intrusión o corte llega al instante a la base y al guardia más cercano.',
    detail: 'Antes: el robo se descubre en la ronda de la mañana, horas después. Ahora: la alerta llega en segundos y el guardia puede intervenir mientras el hecho está en curso. El tiempo de reacción pasa de horas a minutos.'
  },
  {
    icon: '👁️',
    title: 'Visibilidad total',
    desc: 'La empresa sabe dónde está cada guardia en tiempo real y puede verificar que las rondas se cumplan.',
    detail: 'El panel muestra la posición de cada guardia actualizada cada minutos. Se puede ver el historial de recorridos, detectar desvíos y asegurar que las zonas críticas sean cubiertas. Sin GPS, las rondas son "fe de vida".'
  },
  {
    icon: '🐄',
    title: 'Menos pérdidas por abigeato',
    desc: 'La detección temprana de cortes de alambrado disuade y frena el robo de ganado.',
    detail: 'Un sensor en el perímetro detecta el corte antes de que el intruso ingrese. La alerta permite interceptar o disuadir. La mera presencia de sensores reduce los intentos, porque el riesgo de ser detectado es alto.'
  },
  {
    icon: '🛡️',
    title: 'Seguridad del personal',
    desc: 'El botón de pánico permite pedir ayuda aun donde no hay señal.',
    detail: 'Un guardia que encuentra una situación de riesgo presiona un botón y la base sabe exactamente dónde está. No depende de tener cobertura ni de gritar por radio.'
  },
  {
    icon: '💼',
    title: 'Servicio diferenciado',
    desc: 'La empresa puede ofrecer a sus clientes un nivel de vigilancia con datos y sensores.',
    detail: 'Mientras la competencia ofrece "guardias y rondas", la empresa ofrece "monitoreo inteligente con alertas en tiempo real". Eso justifica un mejor precio y genera una ventaja comercial real.'
  },
  {
    icon: '📈',
    title: 'Inversión escalable',
    desc: 'Se comienza con un piloto de bajo costo y se amplía estancia por estancia.',
    detail: 'No hace falta cubrir toda la operación de una vez. Se valida la tecnología en una estancia, se ajusta con datos reales y luego se replica. Cada nueva estancia reutiliza la configuración probada.'
  }
];

export default function Benefits({ id = 'beneficios' }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id={id} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">
            Beneficios que se miden en la operación
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Menos pérdidas, respuesta más rápida y un servicio que la competencia no puede igualar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{benefit.desc}</p>
              {openIndex === index && (
                <div className="pt-4 border-t border-gray-100 text-sm text-gray-700 leading-relaxed animate-fade-in">
                  {benefit.detail}
                </div>
              )}
              <div className={`mt-4 text-sm font-medium text-blue-600 flex items-center gap-1 ${openIndex === index ? 'rotate-180' : ''} transition-transform`}>
                {openIndex === index ? 'Ver menos' : 'Ver más'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-green-50 border border-green-200 rounded-2xl flex items-start gap-4">
          <span className="text-4xl">🏆</span>
          <div>
            <h3 className="text-lg font-bold text-green-800 mb-2">Sin precedentes en el mercado</h3>
            <p className="text-green-700">
              No se conocen implementaciones equivalentes en seguridad rural en la región. La combinación de rastreo de personal, sensores perimetrales y red autónoma de largo alcance, integrada a una consola central, constituye una capacidad novedosa. Los sensores se desarrollan a medida, lo que otorga exclusividad sobre la solución.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}