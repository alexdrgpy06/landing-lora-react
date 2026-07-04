import { useState } from 'react';
import { CheckIcon } from './icons/Icons';

interface CTAProps {
  id?: string;
  onSubmit: (e: React.FormEvent) => void;
  success: boolean;
}

export default function CTA({ id = 'contacto', onSubmit, success }: CTAProps) {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <section id={id} className="py-20 md:py-28 bg-surface text-text grid-texture">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            ¿Cuánto le cuesta hoy no saber lo que pasa en su campo?
          </h2>
          <p className="text-dim leading-relaxed">
            El primer robo que no ocurra porque su sistema lo detectó a tiempo pagará toda la inversión. Agende un relevamiento sin compromiso y reciba una propuesta a medida.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="glass-panel rounded-2xl p-8 space-y-6">
            {success && (
              <div className="bg-brand/15 border border-brand/40 text-mint px-4 py-3 rounded-lg text-center animate-fade-in flex items-center justify-center gap-2">
                <CheckIcon className="w-5 h-5" />
                Solicitud recibida. Un especialista se contacta en menos de 24 horas.
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="nombre"
                placeholder="Nombre completo"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-panel border border-border-light rounded-lg text-text placeholder:text-dim focus:ring-2 focus:ring-brand focus:border-transparent outline-none"
              />
              <input
                type="text"
                name="empresa"
                placeholder="Empresa / Estancia"
                value={formData.empresa}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-panel border border-border-light rounded-lg text-text placeholder:text-dim focus:ring-2 focus:ring-brand focus:border-transparent outline-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-panel border border-border-light rounded-lg text-text placeholder:text-dim focus:ring-2 focus:ring-brand focus:border-transparent outline-none"
              />
              <input
                type="tel"
                name="telefono"
                placeholder="Teléfono (opcional)"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-panel border border-border-light rounded-lg text-text placeholder:text-dim focus:ring-2 focus:ring-brand focus:border-transparent outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 gradient-brand text-bg font-semibold text-lg rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-brand/20"
            >
              Solicitar información sin compromiso
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
