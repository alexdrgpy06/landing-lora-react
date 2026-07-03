export default function HowItWorks({ id = 'como-funciona' }: { id?: string }) {
  const steps = [
    {
      number: '01',
      title: 'Nodos de guardia',
      desc: 'Dispositivos portátiles con GPS y botón de pánico. Reportan posición y permiten alertas de emergencia.'
    },
    {
      number: '02',
      title: 'Repetidores solares',
      desc: 'Instalados en puntos elevados, extienden la cobertura kilómetros a la redonda con panel solar.'
    },
    {
      number: '03',
      title: 'Gateway',
      desc: 'Conecta la red LoRa al panel central, unificando guardias y sensores en un solo mapa.'
    },
    {
      number: '04',
      title: 'Panel central',
      desc: 'Interfaz web con mapa, alertas, histórico y reglas de notificación. Sin instalación compleja.'
    }
  ];

  return (
    <section id={id} className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">
            Cómo funciona
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Cuatro elementos simples que se comunican entre sí sin necesidad de torres, operadoras ni cables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-200 rounded-2xl p-6 overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-steel-500 to-blue-500" />
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl font-extrabold text-blue-600">{step.number}</span>
                <h3 className="text-lg font-bold text-navy-900">{step.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-white border border-gray-200 rounded-2xl">
          <h3 className="text-xl font-bold text-navy-900 text-center mb-8">Red Mesh autorreparable</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-2">🔄</div>
              <h4 className="font-semibold text-navy-900 mb-1">Autorreparable</h4>
              <p className="text-gray-600 text-sm">Si un nodo falla, la red busca ruta alternativa</p>
            </div>
            <div>
              <div className="text-4xl mb-2">🔐</div>
              <h4 className="font-semibold text-navy-900 mb-1">Cifrada</h4>
              <p className="text-gray-600 text-sm">Comunicación privada, sin operadoras terceras</p>
            </div>
            <div>
              <div className="text-4xl mb-2">📏</div>
              <h4 className="font-semibold text-navy-900 mb-1">Escalable</h4>
              <p className="text-gray-600 text-sm">Agregue nodos sin límite, la red crece sola</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}