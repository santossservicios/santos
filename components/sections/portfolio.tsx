"use client";

import { motion } from "framer-motion";
import { Camera, Clock, ArrowUpRight, ImageIcon } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { DiagonalPattern } from "@/components/patterns";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const categories = [
  {
    title: "Trabajos terminados",
    description: "Mirá el resultado final de nuestros proyectos con fotos del antes y después.",
    icon: Camera,
  },
  {
    title: "En proceso",
    description: "Seguí el avance de los trabajos que estamos realizando en tiempo real.",
    icon: Clock,
  },
  {
    title: "Próximos proyectos",
    description: "Enterate de los nuevos desafíos que tenemos por delante.",
    icon: ImageIcon,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Portfolio() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-bg-secondary">
      <DiagonalPattern />
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
            Mirá nuestros{" "}
            <span className="text-brand-cyan">trabajos</span>
          </h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-brand-cyan to-brand-red rounded-full mb-6" />
          <p className="mx-auto max-w-2xl text-text-secondary text-base sm:text-lg px-2">
            Seguinos en Instagram para ver proyectos terminados, trabajos en
            curso y lo que viene.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.a
                key={cat.title}
                variants={cardVariant}
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-xl sm:rounded-2xl border border-border-default bg-bg-card p-5 sm:p-7 transition-all duration-300 hover:border-brand-cyan/40 hover:shadow-[0_0_30px_rgba(58,203,255,0.06)] active:scale-[0.98]"
              >
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-brand-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center justify-center rounded-lg sm:rounded-xl bg-brand-cyan/10 p-2.5 sm:p-3">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-brand-cyan" />
                    </div>
                    <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 text-text-muted group-hover:text-brand-cyan transition-colors" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 sm:mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-4"
        >
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#833AB4] via-[#E4405F] to-[#F77737] px-7 sm:px-10 py-4 text-base sm:text-lg font-bold text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(228,64,95,0.3)] active:scale-[0.98]"
          >
            <InstagramIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            Ver todos los trabajos
            <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-base text-text-secondary hover:text-brand-cyan transition-colors"
          >
            @santos.servicios
          </a>
        </motion.div>
      </div>
    </section>
  );
}
