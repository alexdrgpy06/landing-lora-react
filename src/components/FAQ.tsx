import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: '¿Qué pasa si no hay línea de vista entre repetidores?',
    answer: 'La red LoRa funciona por salto: cada nodo retransmite al siguiente. Si un punto no tiene línea de vista directa, se agrega un repetidor intermedio en un punto alto cercano. La malla se adapta a la topografía.'
  },
  {
    question: '¿Qué pasa si se cae un nodo o se rompe un sensor?',
    answer: 'La red es autorreparable: si un nodo deja de funcionar, la señal busca una ruta alternativa a través de los demás nodos. El panel central muestra el estado de cada dispositivo, así se detecta el fallo rápidamente.'
  },
  {
    question: '¿Es difícil de operar?',
    answer: 'No. El panel central es una interfaz web intuitiva: mapa, alertas y posiciones. El personal de la base aprende a usarlo en una jornada. Los guardias solo deben llevar el nodo encendido.'
  },
  {
    question: '¿Cuánto dura la batería?',
    answer: 'Los nodos de guardia duran semanas con una carga normal. Los repetidores solares se recargan automáticamente con panel solar y batería de respaldo, funcionando sin intervención.'
 },
  {
    question: '¿Podemos empezar con una prueba chica?',
    answer: 'Sí. Se recomienda comenzar con un piloto en una estancia para validar el alcance real. Una vez probado, se replica en los demás campos sin rehacer el trabajo.'
  },
  {
    question: '¿Se puede integrar con nuestro sistema actual?',
    answer: 'Sí. El gateway se conecta al mismo servidor de la plataforma de gestión existente. No hace cambiar de sistema: LoRa se suma como una capa más de información.'
  },
  {
    question: '¿Qué alcance tiene la red?',
    answer: 'Entre 5 y 15 km por salto, según topografía. Con repetidores bien ubicados, una estancia de 25.000 ha se cubre con 6 a 10 repetidores.'
  },
  {
    question: '¿Los datos son seguros?',
    answer: 'Sí. Toda la comunicación está cifrada sobre la red LoRa. Los datos viajan por la red propia, no por internet ni por operadoras terceras.'
  }
];

export default function FAQ({ id = 'faq' }: { id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id={id} className="py-20 md:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-text mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-dim leading-relaxed">
            Respuestas directas a las dudas más comunes antes de implementar.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border border-border rounded-xl bg-panel overflow-hidden"
              open={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <summary className="flex items-center gap-3 p-5 cursor-pointer list-none">
                <span className="w-8 h-8 bg-brand/10 rounded-full flex items-center justify-center text-brand font-bold text-lg flex-shrink-0">?</span>
                <span className="text-lg font-semibold text-text">{faq.question}</span>
                <svg className="ml-auto w-5 h-5 text-dim group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-5 border-t border-border animate-slide-down">
                <p className="text-dim leading-relaxed">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}