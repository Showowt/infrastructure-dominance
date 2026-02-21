"use client";

import { AlertTriangle, TrendingDown, Clock, DollarSign } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Plazos Excesivos",
    description:
      "Estudios de factibilidad que toman 4+ meses. Cada día de retraso cuesta millones.",
    stat: "4 meses",
    statLabel: "tiempo promedio de estudio",
  },
  {
    icon: TrendingDown,
    title: "Sobrecostos Sistemáticos",
    description:
      "El 73% de los proyectos de infraestructura en Colombia exceden su presupuesto inicial.",
    stat: "73%",
    statLabel: "exceden presupuesto",
  },
  {
    icon: AlertTriangle,
    title: "Disputas y Litigios",
    description:
      "Mala ingeniería civil, diseño inicial inadecuado, falta de supervisión generan conflictos costosos.",
    stat: "$2.4B",
    statLabel: "en disputas anuales",
  },
  {
    icon: DollarSign,
    title: "Brechas de Conocimiento",
    description:
      "La Región Caribe especialmente afectada por falta de expertise técnico y datos históricos.",
    stat: "40%",
    statLabel: "menor productividad",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm uppercase tracking-widest font-medium">
            La Realidad
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            El Problema de Infraestructura Colombiana
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Colombia invertirá{" "}
            <span className="text-accent font-semibold">
              $24.9 mil millones USD
            </span>{" "}
            en infraestructura durante el período presidencial actual. El sector
            de construcción crece al{" "}
            <span className="text-accent font-semibold">5.5% anual</span> hasta
            2028. Pero hay un problema masivo.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="engine-card bg-primary-900/30 border border-white/10 p-8 hover:border-accent/30 transition-colors group"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-red-500/10 border border-red-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/20 transition-colors">
                  <problem.icon className="w-7 h-7 text-red-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold text-white mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-white/60 mb-4">{problem.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-display font-bold text-red-400">
                      {problem.stat}
                    </span>
                    <span className="text-white/40 text-sm uppercase tracking-wider">
                      {problem.statLabel}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The 4 en 1 callout */}
        <div className="bg-gradient-to-r from-accent/10 to-infrastructure-blueprint/10 border border-accent/30 p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <span className="text-accent text-sm uppercase tracking-widest font-medium">
                Caso de Estudio Real
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mt-2 mb-4">
                Proyecto &ldquo;4 en 1&rdquo; Bocagrande/Castillogrande
              </h3>
              <p className="text-white/70 mb-6">
                Inversión de{" "}
                <span className="text-accent font-semibold">
                  $168 mil millones COP
                </span>
                . Control de inundaciones + paseo peatonal + rehabilitación vial
                + parques. Su estudio de 4 meses comienza el 27 de febrero.
              </p>
              <p className="text-white font-semibold">
                Nosotros podemos entregar el análisis de factibilidad aumentado
                por IA en 72 horas.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <div className="bg-primary-950/80 border border-accent/20 p-6 text-center">
                <p className="text-white/60 text-sm uppercase tracking-widest mb-2">
                  Tiempo de Entrega
                </p>
                <p className="text-5xl font-display font-bold text-accent mb-2">
                  72h
                </p>
                <p className="text-white/40 text-sm">vs 4 meses tradicional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
