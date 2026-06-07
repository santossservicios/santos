import { MessageCircle, Mail } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
import Image from "next/image";
import { CONTACT, NAV_LINKS, SERVICES, getWhatsAppUrl } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border-default">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          <div>
            <Image
              src="/logo.png"
              alt="Santos Servicios"
              width={180}
              height={50}
              className="h-12 w-auto mb-4"
              style={{ width: "auto" }}
            />
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Soluciones integrales para tu hogar con calidad, compromiso y
              garantía en cada trabajo.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-lg bg-border-default p-2.5 text-text-secondary hover:bg-brand-cyan/10 hover:text-brand-cyan transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-lg bg-border-default p-2.5 text-text-secondary hover:bg-brand-cyan/10 hover:text-brand-cyan transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center justify-center rounded-lg bg-border-default p-2.5 text-text-secondary hover:bg-brand-cyan/10 hover:text-brand-cyan transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Navegación
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-brand-cyan transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Servicios
            </h3>
            <ul className="space-y-3">
              {SERVICES.slice(0, 7).map((service) => (
                <li key={service.name}>
                  <span className="text-sm text-text-secondary">
                    {service.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border-default flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-text-muted text-center">
            &copy; {new Date().getFullYear()} Santos Servicios. Todos los derechos
            reservados.
          </p>
          <p className="text-xs sm:text-sm text-text-muted">
            Calidad &middot; Compromiso &middot; Garantía
          </p>
        </div>
        <div className="mt-4 pt-4 border-t border-border-default text-center">
          <p className="text-xs text-text-muted">
            Creado por Ignacio Lavezzari
          </p>
        </div>
      </div>
    </footer>
  );
}
