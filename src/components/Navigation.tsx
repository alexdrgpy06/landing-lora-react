export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-xl text-navy-900">Alystech</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#problema" className="text-sm font-medium text-gray-600 hover:text-navy-900 transition-colors">Problema</a>
            <a href="#solucion" className="text-sm font-medium text-gray-600 hover:text-navy-900 transition-colors">Solución</a>
            <a href="#beneficios" className="text-sm font-medium text-gray-600 hover:text-navy-900 transition-colors">Beneficios</a>
            <a href="#como-funciona" className="text-sm font-medium text-gray-600 hover:text-navy-900 transition-colors">Cómo funciona</a>
            <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-navy-900 transition-colors">FAQ</a>
            <a href="#contacto" className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors">Contacto</a>
          </div>
        </div>
      </div>
    </nav>
  );
}