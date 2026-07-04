export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/85 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="https://www.alystechpy.online" className="flex items-center gap-3">
            <img src="/logo.svg" alt="Alystech" className="w-8 h-8" />
            <span className="font-display font-semibold text-lg text-text">
              Alys<span className="gradient-brand-text">Tech</span>
            </span>
            <span className="hidden sm:inline-block text-[11px] uppercase tracking-wider text-dim border border-border-light rounded-full px-2 py-0.5 ml-1">
              LoRa Estancias
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#problema" className="text-sm font-medium text-dim hover:text-text transition-colors">Problema</a>
            <a href="#solucion" className="text-sm font-medium text-dim hover:text-text transition-colors">Solución</a>
            <a href="#beneficios" className="text-sm font-medium text-dim hover:text-text transition-colors">Beneficios</a>
            <a href="#como-funciona" className="text-sm font-medium text-dim hover:text-text transition-colors">Cómo funciona</a>
            <a href="#faq" className="text-sm font-medium text-dim hover:text-text transition-colors">FAQ</a>
            <a href="#contacto" className="px-4 py-2 gradient-brand text-bg text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity">Contacto</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
