"use client";

import { Check, X, ArrowRight } from "lucide-react";

const comparisons = [
  {
    metric: "Inversión",
    traditional: "$168B COP",
    ai: "$168B COP (3x más output)",
    highlight: true,
  },
  {
    metric: "Fase de Estudio",
    traditional: "4 meses (inicia Feb 27)",
    ai: "72 horas con IA",
    highlight: true,
  },
  {
    metric: "Timeline de Construcción",
    traditional: "20 meses (entrega 2027)",
    ai: "12-14 meses optimizado",
    highlight: false,
  },
  {
    metric: "Alcance",
    traditional: "Inundaciones + Peatonal + Vial + Parques",
    ai: "Mismo + Mantenimiento Predictivo + Digital Twin",
    highlight: false,
  },
  {
    metric: "Gestión de Riesgos",
    traditional: "Supervisión manual, reactiva",
    ai: "Monitoreo AI en tiempo real + Predicción",
    highlight: false,
  },
  {
    metric: "Comunicación",
    traditional: "Reportes cada X semanas",
    ai: "Dashboard en vivo + Alertas automáticas",
    highlight: false,
  },
  {
    metric: "Legado de Datos",
    traditional: "Archivos de papel, dispersos",
    ai: "Digital Twin permanente para 50 años",
    highlight: false,
  },
];

export function SpeedComparison() {
  return (
    <section className="relative py-24 md:py-32 bg-primary-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm uppercase tracking-widest font-medium">
            La Transformación
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Tradicional vs Infrastructure Dominance Engine
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Usando el proyecto &ldquo;4 en 1&rdquo; como caso de estudio real
          </p>
        </div>

        {/* Comparison table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-4 border-b border-white/10">
                  <span className="text-white/60 text-sm uppercase tracking-widest">
                    Métrica
                  </span>
                </th>
                <th className="text-left p-4 border-b border-white/10 bg-red-500/5">
                  <div className="flex items-center gap-2">
                    <X className="w-5 h-5 text-red-400" />
                    <span className="text-red-400 text-sm uppercase tracking-widest">
                      Realidad Actual
                    </span>
                  </div>
                </th>
                <th className="text-left p-4 border-b border-white/10 bg-accent/5">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-accent" />
                    <span className="text-accent text-sm uppercase tracking-widest">
                      Con IDE
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, index) => (
                <tr key={index} className={row.highlight ? "bg-accent/5" : ""}>
                  <td className="p-4 border-b border-white/10">
                    <span className="text-white font-medium">{row.metric}</span>
                  </td>
                  <td className="p-4 border-b border-white/10 bg-red-500/5">
                    <span className="text-white/60">{row.traditional}</span>
                  </td>
                  <td className="p-4 border-b border-white/10 bg-accent/5">
                    <span
                      className={
                        row.highlight
                          ? "text-accent font-semibold"
                          : "text-white"
                      }
                    >
                      {row.ai}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom callout */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-accent/10 border border-accent/30 px-8 py-4">
            <span className="text-white/80">
              El hombre que trae IA a la infraestructura colombiana
            </span>
            <ArrowRight className="w-5 h-5 text-accent" />
            <span className="text-accent font-semibold">
              Se convierte en el estándar
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
