import { useState } from 'react';

export default function Calculator() {
  const [ha, setHa] = useState(25000);
  const [cab, setCab] = useState(5000);
  const [val, setVal] = useState(800);
  const [tasa, setTasa] = useState(2);

  const perdida = cab * val * (tasa / 100);

  return (
    <section className="py-20 md:py-28 bg-blue-50 border-y border-blue-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">
            ¿Cuánto le cuesta el silencio?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Calcule la exposición anual de su estancia sin protección perimetral inteligente.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-blue-100 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Hectáreas</label>
                <input
                  type="number"
                  value={ha}
                  onChange={(e) => setHa(Math.max(1000, parseInt(e.target.value) || 0))}
                  min={1000}
                  step={1000}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Cabezas de ganado</label>
                <input
                  type="number"
                  value={cab}
                  onChange={(e) => setCab(Math.max(100, parseInt(e.target.value) || 0))}
                  min={100}
                  step={100}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Valor por cabeza (USD)</label>
                <input
                  type="number"
                  value={val}
                  onChange={(e) => setVal(Math.max(100, parseInt(e.target.value) || 0))}
                  min={100}
                  step={50}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Tasa de robo anual (%)</label>
                <input
                  type="number"
                  value={tasa}
                  onChange={(e) => setTasa(Math.max(0.5, Math.min(10, parseFloat(e.target.value) || 0)))}
                  min={0.5}
                  max={10}
                  step={0.5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center border border-blue-200 shadow-sm">
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">PÉRDIDA ANUAL ESTIMADA</div>
            <div className="text-5xl md:text-6xl font-extrabold text-navy-900 mb-2">
              ${perdida.toLocaleString('en-US')}
            </div>
            <p className="text-gray-500 text-sm">por abigeato sin detección temprana</p>
            <p className="text-xs text-gray-400 mt-4">* Cálculo referencial. La detección temprana reduce estas pérdidas significativamente.</p>
          </div>
        </div>
      </div>
    </section>
  );
}