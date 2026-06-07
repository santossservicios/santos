"use client";

import { motion } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";
import Image from "next/image";
import { CONTACT, getWhatsAppUrl } from "@/lib/constants";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[10%] left-[5%] w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-brand-cyan/10 blur-[100px] sm:blur-[140px]" />
      <div className="absolute top-[50%] right-[10%] w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-brand-cyan/8 blur-[90px] sm:blur-[120px]" />
      <div className="absolute bottom-[15%] left-[20%] w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-brand-cyan/6 blur-[80px] sm:blur-[110px]" />
      <div className="absolute top-[25%] right-[30%] w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-brand-cyan/7 blur-[70px] sm:blur-[100px]" />
      <div className="absolute bottom-[40%] left-[60%] w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-brand-cyan/5 blur-[80px] sm:blur-[100px]" />
      <div className="absolute top-[70%] right-[60%] w-52 h-52 sm:w-72 sm:h-72 rounded-full bg-brand-cyan/9 blur-[90px] sm:blur-[130px]" />
    </div>
  );
}

function TypewriterTagline() {
  const words = ["Calidad", "Compromiso", "Garantía"];

  return (
    <div className="flex items-center gap-2 sm:gap-3 text-base sm:text-xl font-medium">
      {words.map((word, i) => (
        <motion.span
          key={word}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 + i * 0.3, duration: 0.5 }}
          className="flex items-center gap-2 sm:gap-3"
        >
          {i > 0 && <span className="text-brand-red">|</span>}
          <span className="text-brand-cyan">{word}</span>
        </motion.span>
      ))}
    </div>
  );
}

function ShimmerButton({
  children,
  href,
  variant = "primary",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
}) {
  const isPrimary = variant === "primary";

  return (
    <a
      href={href}
      target={isPrimary ? "_blank" : undefined}
      rel={isPrimary ? "noopener noreferrer" : undefined}
      className={`group relative inline-flex items-center justify-center gap-2 rounded-full px-6 sm:px-8 py-3.5 text-sm font-semibold transition-all duration-300 w-full sm:w-auto ${
        isPrimary
          ? "bg-brand-cyan text-bg-primary hover:bg-brand-cyan-light hover:shadow-[0_0_30px_rgba(58,203,255,0.3)]"
          : "border border-border-default text-text-primary hover:border-brand-cyan/50 hover:text-brand-cyan"
      }`}
    >
      {isPrimary && (
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
            backgroundSize: "200% 100%",
            animation: "shimmer 2s infinite",
          }}
        />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </a>
  );
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <GridBackground />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div variants={item} className="mb-8">
          <Image
            src="/logo.svg"
            alt="Santos Servicios"
            width={400}
            height={200}
            className="mx-auto h-24 sm:h-40 lg:h-52 w-auto drop-shadow-[0_0_30px_rgba(58,203,255,0.15)]"
            style={{ width: "auto" }}
            priority
          />
        </motion.div>

        <motion.h1
          variants={item}
          className="text-3xl sm:text-5xl lg:text-7xl font-black italic tracking-tight mb-4"
        >
          <span className="bg-gradient-to-r from-white via-white to-text-secondary bg-clip-text text-transparent">
            Soluciones integrales
          </span>
          <br />
          <span className="bg-gradient-to-r from-brand-cyan to-brand-cyan-light bg-clip-text text-transparent">
            para tu hogar
          </span>
        </motion.h1>

        <motion.div variants={item} className="flex justify-center mb-6">
          <TypewriterTagline />
        </motion.div>

        <motion.p
          variants={item}
          className="mx-auto max-w-2xl text-base sm:text-lg text-text-secondary mb-8 sm:mb-10 px-2"
        >
          Más de una década de experiencia en construcción, reformas y
          mantenimiento. Hacemos realidad el proyecto que tenés en mente.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <ShimmerButton href={getWhatsAppUrl()} variant="primary">
            <MessageCircle className="h-5 w-5" />
            Pedí tu presupuesto
          </ShimmerButton>
          <ShimmerButton href="#servicios" variant="secondary">
            Ver servicios
          </ShimmerButton>
        </motion.div>

        <motion.a
          variants={item}
          href={CONTACT.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm text-text-secondary hover:text-brand-cyan transition-colors"
        >
          <InstagramIcon className="h-4 w-4" />
          Seguinos en @santos.servicios
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#servicios" aria-label="Scroll hacia servicios">
          <ChevronDown
            className="h-8 w-8 text-text-muted"
            style={{ animation: "float 2s ease-in-out infinite" }}
          />
        </a>
      </motion.div>
    </section>
  );
}
