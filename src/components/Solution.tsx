export default function Solution({ id = 'solucion' }: { id?: string }) {
  const components = [
    {
      icon: '🛰️',
      title: 'Nodo de guardia',
      desc: 'GPS + botón de pánico. Batería de semanas. Cada guardia lleva uno.',
      color: 'blue'
    },
    {
      icon: '📡',
      title: 'Repetidor solar',
      desc: 'Extiende la cobertura kilómetros a la redonda. Sin obras civiles.',
      color: 'green'
    },
    {
      icon: '🔗',
      title: 'Gateway',
      desc: 'Puente entre la red LoRa y el panel central de la oficina.',
      color: 'amber'
    },
    {
      icon: '🖥️',
      title: 'Panel central',
      desc: 'Mapa, alertas e histórico en una sola pantalla, sin software especial.',
      color: 'steel'
    }
  ];

  const colors = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    amber: 'bg-amber-500',
    steel: 'bg-slate-600'
  };

  return (
    <section id={id} className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">
            Una red propia que no depende de nadie
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            LoRa/Meshtastic crea una malla de radio de largo alcance que cubre toda la estancia sin torres, operadoras ni cables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {components.map((comp, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-blue-300 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl ${colors[comp.color as keyof typeof colors]} flex items-center justify-center mx-auto mb-4 text-3xl`}>
                {comp.icon}
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">{comp.title}</h3>
              <p className="text-gray-600 leading-relaxed">{comp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}