"use client";

import { motion } from "framer-motion";
import {
  Droplets,
  Home,
  LayoutGrid,
  Paintbrush,
  Wrench,
  Square,
  TreePine,
  Plus,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { BrickPattern } from "@/components/patterns";

const iconMap: Record<string, LucideIcon> = {
  Droplets,
  Home,
  LayoutGrid,
  Paintbrush,
  Wrench,
  Square,
  TreePine,
  Plus,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Services() {
  return (
    <section id="servicios" className="relative py-16 sm:py-24 lg:py-32 scroll-mt-16">
      <BrickPattern />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black italic mb-4">
            Nuestros{" "}
            <span className="text-brand-cyan">Servicios</span>
          </h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-brand-cyan to-brand-red rounded-full mb-6" />
          <p className="mx-auto max-w-2xl text-text-secondary text-base sm:text-lg px-2">
            Ofrecemos una amplia gama de servicios para cubrir todas las
            necesidades de tu hogar o comercio.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6"
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.name}
                variants={cardVariant}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.2 },
                }}
                className="group relative rounded-xl sm:rounded-2xl border border-border-default bg-bg-card p-4 sm:p-6 transition-all duration-300 hover:border-brand-cyan/40 hover:shadow-[0_0_30px_rgba(58,203,255,0.06)]"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="mb-3 sm:mb-4 inline-flex items-center justify-center rounded-lg sm:rounded-xl bg-brand-cyan/10 p-2.5 sm:p-3">
                    {Icon && (
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-brand-cyan" />
                    )}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">
                    {service.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed hidden sm:block">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
