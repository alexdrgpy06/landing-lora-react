interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  return (
    <header className="relative pt-32 pb-20 bg-gradient-to-br from-navy-900 via-navy-800 to-steel-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
          Seguridad agrícola sin señal,{' '}
          <span className="text-blue-300">sin límites</span>
        </h1>
        <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
          Red LoRa/Meshtastic propia para estancias: rastreo de guardias, sensores perimetrales y alertas en tiempo real — sin celular, sin internet, sin abigeato.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <StatCard value="15+" label="km por salto" icon="📡" />
          <StatCard value="30" label="días de batería" icon="🔋" />
          <StatCard value="<3" label="min para alerta" icon="⚡" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onCtaClick}
            className="px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25"
          >
            Solicitar demo sin compromiso
          </button>
          <button
            onClick={onCtaClick}
            className="px-8 py-4 bg-white/10 text-white font-semibold text-lg rounded-lg hover:bg-white/20 transition-colors border border-white/20 backdrop-blur-sm"
          >
            Ver cómo funciona
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent" />
    </header>
  );
}

function StatCard({ value, label, icon }: { value: string; label: string; icon: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
      <div className="text-4xl mb-2">{icon}</div>
      <div className="text-3xl md:text-4xl font-extrabold">{value}</div>
      <div className="text-sm text-blue-200 uppercase tracking-wider mt-1">{label}</div>
    </div>
  );
}