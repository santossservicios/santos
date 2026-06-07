"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
import { CONTACT, getWhatsAppUrl } from "@/lib/constants";
import { WallPanelPattern } from "@/components/patterns";

function ContactLink({
  icon: Icon,
  label,
  value,
  href,
  color,
}: {
  icon: typeof MessageCircle;
  label: string;
  value: string;
  href: string;
  color: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 sm:gap-4 rounded-xl border border-border-hover bg-bg-primary/80 p-3.5 sm:p-4 transition-all duration-300 hover:border-brand-cyan/30 hover:bg-bg-primary active:scale-[0.98]"
    >
      <div
        className="flex shrink-0 items-center justify-center rounded-lg p-2.5 sm:p-3"
        style={{ backgroundColor: `${color}15` }}
      >
        <Icon className="h-5 w-5 sm:h-6 sm:w-6" style={{ color }} />
      </div>
      <div className="min-w-0">
        <p className="text-xs sm:text-sm text-text-secondary">{label}</p>
        <p className="font-medium text-sm sm:text-base text-white group-hover:text-brand-cyan transition-colors truncate">
          {value}
        </p>
      </div>
    </a>
  );
}

export function Contact() {
  return (
    <section id="contacto" className="relative py-16 sm:py-24 lg:py-32 scroll-mt-16">
      <WallPanelPattern />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black italic mb-4">
            <span className="text-brand-cyan">Contactanos</span>
          </h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-brand-cyan to-brand-red rounded-full mb-6" />
          <p className="mx-auto max-w-2xl text-text-secondary text-base sm:text-lg px-2">
            Escribinos y te respondemos a la brevedad. Presupuestos sin cargo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-brand-cyan/20 bg-bg-secondary/90 backdrop-blur-md p-5 sm:p-8 space-y-4 shadow-[0_0_40px_rgba(58,203,255,0.05)]"
        >
          <ContactLink
            icon={MessageCircle}
            label="WhatsApp"
            value="+54 9 11 3632-5263"
            href={getWhatsAppUrl()}
            color="#25D366"
          />
          <ContactLink
            icon={Mail}
            label="Email"
            value={CONTACT.email}
            href={`mailto:${CONTACT.email}`}
            color="#3ACBFF"
          />
          <ContactLink
            icon={InstagramIcon}
            label="Instagram"
            value="@santos.servicios"
            href={CONTACT.instagram}
            color="#E4405F"
          />
          <ContactLink
            icon={Phone}
            label="Teléfono"
            value="+54 9 11 3632-5263"
            href="tel:+5491136325263"
            color="#3ACBFF"
          />

          <div className="pt-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] px-6 py-4 text-base sm:text-lg font-bold text-white transition-all duration-300 hover:bg-[#22c55e] hover:shadow-[0_0_30px_rgba(37,211,102,0.3)] active:scale-[0.98]"
            >
              <MessageCircle className="h-6 w-6" />
              Chateá con nosotros
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
