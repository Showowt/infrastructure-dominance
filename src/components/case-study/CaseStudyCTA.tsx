"use client";

import { ArrowRight, Clock, FileText, Phone, Mail } from "lucide-react";

export function CaseStudyCTA() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA box */}
        <div className="bg-accent/10 border border-accent/30 p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/40 mb-6">
              <Clock className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-medium uppercase tracking-wider">
                Disponible para entrega: 72 horas
              </span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Reciba el Análisis Completo del
              <br />
              <span className="text-accent">Proyecto &quot;4 en 1&quot;</span>
            </h2>

            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Este estudio de caso demuestra solo una fracción de las
              capacidades del Infrastructure Dominance Engine. El análisis
              completo de viabilidad para el proyecto Bocagrande/Castillogrande
              incluye:
            </p>

            {/* Deliverables grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              <div className="bg-primary-900/50 border border-white/10 p-4 text-left">
                <FileText className="w-5 h-5 text-accent mb-2" />
                <p className="text-white font-medium text-sm mb-1">
                  Informe Ejecutivo
                </p>
                <p className="text-white/50 text-xs">
                  40+ páginas de análisis técnico-financiero
                </p>
              </div>
              <div className="bg-primary-900/50 border border-white/10 p-4 text-left">
                <FileText className="w-5 h-5 text-accent mb-2" />
                <p className="text-white font-medium text-sm mb-1">
                  Modelo Financiero
                </p>
                <p className="text-white/50 text-xs">
                  Excel con 3 escenarios y sensibilidades
                </p>
              </div>
              <div className="bg-primary-900/50 border border-white/10 p-4 text-left">
                <FileText className="w-5 h-5 text-accent mb-2" />
                <p className="text-white font-medium text-sm mb-1">
                  Cronograma Optimizado
                </p>
                <p className="text-white/50 text-xs">
                  MS Project / Primavera compatible
                </p>
              </div>
            </div>

            {/* Price comparison */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
              <div className="text-center">
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
                  Estudio tradicional
                </p>
                <p className="text-white/40 line-through text-2xl">$180M COP</p>
                <p className="text-white/40 text-xs">4 meses</p>
              </div>
              <div className="hidden md:block text-accent text-2xl">→</div>
              <div className="text-center">
                <p className="text-accent text-xs uppercase tracking-wider mb-1">
                  Análisis IDE
                </p>
                <p className="text-accent font-display text-3xl font-bold">
                  $45M COP
                </p>
                <p className="text-accent text-xs">72 horas</p>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/573001234567?text=Quiero%20el%20análisis%20completo%20del%20proyecto%204%20en%201%20Bocagrande"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary-950 font-semibold hover:bg-accent/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Solicitar Análisis Completo
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:infrastructure@machinemind.io?subject=Análisis%20Proyecto%204%20en%201%20Bocagrande"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white hover:border-accent/50 hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
                Contactar por Email
              </a>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-primary-900/30 border border-white/10 p-4 text-center">
            <p className="text-accent font-display text-2xl font-bold">340%</p>
            <p className="text-white/60 text-sm">ROI proyectado</p>
          </div>
          <div className="bg-primary-900/30 border border-white/10 p-4 text-center">
            <p className="text-accent font-display text-2xl font-bold">
              8 meses
            </p>
            <p className="text-white/60 text-sm">Ahorro en timeline</p>
          </div>
          <div className="bg-primary-900/30 border border-white/10 p-4 text-center">
            <p className="text-accent font-display text-2xl font-bold">
              $25B COP
            </p>
            <p className="text-white/60 text-sm">Sobrecostos evitados</p>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-white/40 text-sm mt-8">
          Este análisis fue generado en 4 horas utilizando el Infrastructure
          Dominance Engine v1. Los datos son ilustrativos y se basan en
          información pública disponible del proyecto &quot;4 en 1&quot; de la
          Alcaldía de Cartagena.
        </p>
      </div>
    </section>
  );
}
