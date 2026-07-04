export default function Footer() {
  return (
    <footer className="bg-bg border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4 text-center">
        <a href="https://www.alystechpy.online" className="flex items-center gap-3">
          <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Alystech" className="w-9 h-9" />
          <span className="font-display font-semibold text-lg text-text">
            Alys<span className="gradient-brand-text">Tech</span>
          </span>
          <span className="text-[11px] uppercase tracking-wider text-dim border border-border-light rounded-full px-2 py-0.5 ml-1">
            LoRa Estancias
          </span>
        </a>
        <p className="text-dim text-sm">
          Soluciones en Software y Seguridad Informática
        </p>
        <p className="text-dim/70 text-xs">
          Un producto de{' '}
          <a href="https://www.alystechpy.online" className="text-dim hover:text-text underline underline-offset-2 transition-colors">
            alystechpy.online
          </a>
          {' '}— LoRa/Meshtastic para seguridad agrícola
        </p>
      </div>
    </footer>
  );
}
