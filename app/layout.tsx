import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Santos Servicios",
  description:
    "Impermeabilización, techos, durlock, pintura, herrería, yeso y parquizaciones. Calidad, compromiso y garantía en cada trabajo.",
  keywords: [
    "servicios para el hogar",
    "impermeabilización",
    "pintura",
    "techos",
    "durlock",
    "herrería",
    "yeso",
    "parquizaciones",
    "Buenos Aires",
    "Argentina",
  ],
  authors: [{ name: "Santos Servicios" }],
  openGraph: {
    title: "Santos Servicios",
    description:
      "Soluciones integrales para tu hogar con calidad, compromiso y garantía.",
    siteName: "Santos Servicios",
    locale: "es_AR",
    type: "website",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} antialiased`}>
      <body className="bg-bg-primary text-text-primary font-sans">
        {children}
      </body>
    </html>
  );
}
