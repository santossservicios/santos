"use client";

import { motion } from "framer-motion";
import { Shield, Handshake, BadgeCheck, type LucideIcon } from "lucide-react";
import { VALUES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Handshake,
  BadgeCheck,
};

export function Trust() {
  return (
    <section id="nosotros" className="relative py-16 sm:py-24 lg:py-32 bg-bg-secondary scroll-mt-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black italic mb-4">
            ¿Por qué{" "}
            <span className="text-brand-cyan">elegirnos</span>?
          </h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-brand-red to-brand-cyan rounded-full mb-6" />
          <p className="mx-auto max-w-2xl text-text-secondary text-base sm:text-lg px-2">
            Nuestros valores nos definen y son la base de cada trabajo que realizamos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-8">
          {VALUES.map((value, i) => {
            const Icon = iconMap[value.icon];
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-brand-cyan/10 p-5 ring-1 ring-brand-cyan/20">
                  {Icon && <Icon className="h-10 w-10 text-brand-cyan" />}
                </div>
                <h3 className="text-xl sm:text-2xl font-black italic text-white mb-2 sm:mb-3">
                  {value.title}
                </h3>
                <p className="text-text-secondary leading-relaxed max-w-sm mx-auto">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 sm:mt-20 rounded-xl sm:rounded-2xl border border-border-default bg-bg-card p-6 sm:p-12 text-center"
        >
          <p className="text-lg sm:text-2xl font-semibold italic text-white leading-relaxed">
            &ldquo;Hacemos de todo, y lo hacemos{" "}
            <span className="text-brand-cyan">bien</span>. Tu hogar en las
            mejores manos.&rdquo;
          </p>
          <p className="mt-4 text-text-secondary">— Santos Servicios</p>
        </motion.div>
      </div>
    </section>
  );
}
