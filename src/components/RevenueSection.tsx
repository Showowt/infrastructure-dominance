"use client";

import { Check, ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "SCOUT",
    price: "$1,500 - $3,000",
    delivery: "48 horas",
    description:
      "AI Blind Spot Scan + Mapa de Oportunidades para cualquier proyecto",
    features: [
      "Análisis de puntos ciegos",
      "Mapa de oportunidades",
      "Recomendación estratégica inicial",
      "Resumen ejecutivo",
    ],
    highlighted: false,
  },
  {
    name: "ACCELERATOR",
    price: "$5,000 - $25,000",
    delivery: "72 horas - 2 semanas",
    description:
      "Estudio completo de factibilidad AI (reemplaza estudio manual de 4 meses)",
    features: [
      "Estudio de factibilidad completo",
      "Matriz de riesgos cuantificada",
      "Modelado de costos 3 escenarios",
      "Timeline con ruta crítica",
      "Mapa regulatorio",
      "Especificación BIM básica",
    ],
    highlighted: true,
  },
  {
    name: "COMMAND",
    price: "$25,000 - $75,000",
    delivery: "2-4 semanas",
    description:
      "Inteligencia completa de proyecto: BIM + riesgo + costo + timeline + cumplimiento + stakeholders",
    features: [
      "Todo en ACCELERATOR",
      "Especificación BIM completa (LOD 350)",
      "Arquitectura Digital Twin",
      "Plan de comunicación stakeholders",
      "Framework de monitoreo y evaluación",
      "Entregables en 8 formatos",
    ],
    highlighted: false,
  },
  {
    name: "DOMINANCE",
    price: "$10,000 - $25,000/mes",
    delivery: "Vida del proyecto",
    description:
      "Inteligencia continua de proyecto + monitoreo + digital twin + analítica predictiva",
    features: [
      "Todo en COMMAND",
      "Dashboard en vivo 24/7",
      "Alertas predictivas de riesgo",
      "Reportes automáticos",
      "Actualizaciones de digital twin",
      "Soporte de decisiones AI",
    ],
    highlighted: false,
  },
];

export function RevenueSection() {
  return (
    <section id="pricing" className="relative py-24 md:py-32 bg-primary-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm uppercase tracking-widest font-medium">
            Inversión
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Niveles de Servicio
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Desde análisis rápido de oportunidades hasta inteligencia completa
            de proyecto a lo largo de toda su vida.
          </p>
        </div>

        {/* Pricing grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-6 ${
                tier.highlighted
                  ? "bg-accent/10 border-2 border-accent"
                  : "bg-primary-900/30 border border-white/10"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-primary-950 px-4 py-1 text-xs font-semibold uppercase tracking-wider">
                  Más Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display text-xl font-semibold text-white mb-2">
                  {tier.name}
                </h3>
                <p
                  className={`text-2xl font-bold ${tier.highlighted ? "text-accent" : "text-white"}`}
                >
                  {tier.price}
                </p>
                <p className="text-white/40 text-sm mt-1">
                  Entrega: {tier.delivery}
                </p>
              </div>

              <p className="text-white/60 text-sm mb-6 flex-grow">
                {tier.description}
              </p>

              <ul className="space-y-3 mb-6">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2">
                    <Check
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.highlighted ? "text-accent" : "text-white/40"}`}
                    />
                    <span className="text-white/70 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`text-center py-3 text-sm font-semibold uppercase tracking-wider transition-colors ${
                  tier.highlighted
                    ? "bg-accent text-primary-950 hover:bg-accent-light"
                    : "border border-white/30 text-white hover:bg-white/5 hover:border-accent"
                }`}
              >
                Solicitar Info
              </a>
            </div>
          ))}
        </div>

        {/* Enterprise tier */}
        <div className="mt-12 bg-gradient-to-r from-accent/10 to-infrastructure-blueprint/10 border border-accent/30 p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <span className="text-accent text-xs uppercase tracking-widest font-medium">
                Enterprise
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mt-2 mb-4">
                SOVEREIGN
              </h3>
              <p className="text-white/70 mb-4">
                Plataforma de inteligencia de infraestructura a nivel ciudad +
                todos los proyectos + transparencia ciudadana.
              </p>
              <p className="text-2xl font-bold text-accent">
                $50,000 - $150,000/año
              </p>
            </div>
            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-accent text-primary-950 px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-accent-light transition-colors"
              >
                Contactar para Enterprise
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
