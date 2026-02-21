"use client";

import { Linkedin, Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-primary-950 border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent flex items-center justify-center">
                <span className="font-display font-bold text-primary-950 text-xl">
                  M
                </span>
              </div>
              <div>
                <p className="font-display font-semibold text-white text-lg leading-tight">
                  MachineMind
                </p>
                <p className="text-accent text-xs uppercase tracking-widest">
                  Infrastructure
                </p>
              </div>
            </div>
            <p className="text-white/60 text-sm max-w-md mb-4">
              Infrastructure Dominance Engine — El sistema de inteligencia AI
              que comprime estudios de 4 meses en 72 horas. Transformando la
              infraestructura colombiana.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:info@machinemind.io"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-accent hover:border-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-accent hover:border-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#problem"
                  className="text-white/60 hover:text-accent transition-colors text-sm"
                >
                  El Problema
                </a>
              </li>
              <li>
                <a
                  href="#engines"
                  className="text-white/60 hover:text-accent transition-colors text-sm"
                >
                  Los 7 Motores
                </a>
              </li>
              <li>
                <a
                  href="#case-study"
                  className="text-white/60 hover:text-accent transition-colors text-sm"
                >
                  Estrategia
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-white/60 hover:text-accent transition-colors text-sm"
                >
                  Inversión
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/60 hover:text-accent transition-colors text-sm"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm">
                  Cartagena de Indias
                  <br />
                  Colombia
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href="mailto:info@machinemind.io"
                  className="text-white/60 hover:text-accent transition-colors text-sm"
                >
                  info@machinemind.io
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              &copy; {currentYear} MachineMind Consulting. Todos los derechos
              reservados.
            </p>
            <p className="text-white/40 text-sm font-mono">
              INFRASTRUCTURE DOMINANCE ENGINE v1.0
            </p>
          </div>
        </div>

        {/* Tagline */}
        <div className="mt-8 text-center">
          <p className="text-white/20 text-xs uppercase tracking-widest">
            Ellos toman 4 meses para estudiar. Nosotros entregamos en 72 horas.
            Después construimos mientras ellos siguen leyendo.
          </p>
        </div>
      </div>
    </footer>
  );
}
