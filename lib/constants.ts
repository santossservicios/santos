export const CONTACT = {
  whatsapp: "5491136325263",
  whatsappMessage: "Hola, me interesa consultar por ...",
  email: "santossservicios@gmail.com",
  instagram: "https://www.instagram.com/santos.servicios/",
} as const;

export function getWhatsAppUrl(customMessage?: string) {
  const message = encodeURIComponent(customMessage || CONTACT.whatsappMessage);
  return `https://wa.me/${CONTACT.whatsapp}?text=${message}`;
}

export const SERVICES = [
  {
    name: "Impermeabilización",
    icon: "Droplets" as const,
    description: "Protección integral contra filtraciones y humedad en techos, terrazas y muros.",
  },
  {
    name: "Techos",
    icon: "Home" as const,
    description: "Instalación, reparación y mantenimiento de techos de todo tipo.",
  },
  {
    name: "Durlock",
    icon: "LayoutGrid" as const,
    description: "Tabiques, cielorrasos y revestimientos en construcción en seco.",
  },
  {
    name: "Pintura",
    icon: "Paintbrush" as const,
    description: "Pintura interior y exterior con acabado profesional y materiales de primera.",
  },
  {
    name: "Herrería",
    icon: "Wrench" as const,
    description: "Puertas, rejas, portones, escaleras y estructuras metálicas a medida.",
  },
  {
    name: "Yeso",
    icon: "Square" as const,
    description: "Revoques finos, gruesos, molduras y terminaciones en yeso.",
  },
  {
    name: "Parquizaciones",
    icon: "TreePine" as const,
    description: "Diseño, instalación y mantenimiento de espacios verdes y jardines.",
  },
  {
    name: "Y mucho más",
    icon: "Plus" as const,
    description: "Consultanos por cualquier trabajo que necesites para tu hogar o comercio.",
  },
] as const;

export const VALUES = [
  {
    title: "Calidad",
    description: "Utilizamos materiales de primera calidad y técnicas profesionales para garantizar resultados duraderos.",
    icon: "Shield" as const,
  },
  {
    title: "Compromiso",
    description: "Cumplimos con los plazos y presupuestos acordados. Tu proyecto es nuestra prioridad.",
    icon: "Handshake" as const,
  },
  {
    title: "Garantía",
    description: "Todos nuestros trabajos cuentan con garantía. Tu tranquilidad es nuestro respaldo.",
    icon: "BadgeCheck" as const,
  },
] as const;

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
] as const;
