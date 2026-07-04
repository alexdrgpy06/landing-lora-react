export default function Footer() {
  return (
    <footer className="bg-bg border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Alystech" className="w-9 h-9" />
          <span className="font-display font-semibold text-lg text-text">
            Alys<span className="gradient-brand-text">Tech</span>
          </span>
          <span className="text-[11px] uppercase tracking-wider text-dim border border-border-light rounded-full px-2 py-0.5 ml-1">
            LoRa Estancias
          </span>
        </div>
        <p className="text-dim text-sm">
          Soluciones en Software y Seguridad Informática
        </p>
        <p className="text-dim/70 text-xs">
          Landing comercial — LoRa/Meshtastic para seguridad agrícola · www.alystechpy.online
        </p>
      </div>
    </footer>
  );
}
