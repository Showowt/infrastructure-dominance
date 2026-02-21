"use client";

import { Calculator, TrendingUp, TrendingDown, Minus } from "lucide-react";

const scenarios = [
  {
    name: "Conservador",
    icon: TrendingUp,
    color: "red",
    total: 210,
    variance: "+25%",
    assumptions: [
      "TRM sube a $4,500",
      "Retrasos de 6 meses",
      "Contingencia alta (20%)",
      "Sobrecostos materiales importados",
    ],
  },
  {
    name: "Esperado",
    icon: Minus,
    color: "yellow",
    total: 185,
    variance: "+10%",
    assumptions: [
      "TRM estable ~$4,200",
      "Retrasos menores (2-3 meses)",
      "Contingencia estándar (12%)",
      "Precios de mercado actuales",
    ],
  },
  {
    name: "Optimista",
    icon: TrendingDown,
    color: "green",
    total: 168,
    variance: "0%",
    assumptions: [
      "TRM favorable <$4,000",
      "Sin retrasos significativos",
      "Contingencia mínima (8%)",
      "Descuentos por volumen",
    ],
  },
];

const breakdown = [
  { component: "Solución Hidráulica", base: 68, percentage: 40 },
  { component: "Modernización Av. Chile", base: 45, percentage: 27 },
  { component: "Paseo Marítimo", base: 35, percentage: 21 },
  { component: "Renovación Parques", base: 20, percentage: 12 },
];

export function CostModel() {
  return (
    <section className="relative py-16 md:py-24 bg-primary-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-accent/10 border border-accent/30 flex items-center justify-center">
            <Calculator className="w-5 h-5 text-accent" />
          </div>
          <div>
            <span className="text-accent text-sm uppercase tracking-widest font-medium">
              Motor 5
            </span>
            <h2 className="font-display text-2xl font-bold text-white">
              Modelado de Costos — 3 Escenarios
            </h2>
          </div>
        </div>

        {/* Scenarios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {scenarios.map((scenario, index) => {
            const colorClasses = {
              red: {
                bg: "bg-red-500/10",
                border: "border-red-500/30",
                text: "text-red-400",
              },
              yellow: {
                bg: "bg-yellow-500/10",
                border: "border-yellow-500/30",
                text: "text-yellow-400",
              },
              green: {
                bg: "bg-green-500/10",
                border: "border-green-500/30",
                text: "text-green-400",
              },
            }[scenario.color] || { bg: "", border: "", text: "" };

            return (
              <div
                key={index}
                className={`${colorClasses.bg} ${colorClasses.border} border p-6`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <scenario.icon className={`w-6 h-6 ${colorClasses.text}`} />
                  <span
                    className={`font-semibold uppercase text-sm tracking-wider ${colorClasses.text}`}
                  >
                    {scenario.name}
                  </span>
                </div>

                <div className="mb-4">
                  <p className="text-4xl font-display font-bold text-white mb-1">
                    ${scenario.total}B
                  </p>
                  <p className={`text-sm ${colorClasses.text}`}>
                    COP ({scenario.variance} vs presupuesto)
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-2">
                    Supuestos
                  </p>
                  <ul className="space-y-1">
                    {scenario.assumptions.map((assumption, aIndex) => (
                      <li
                        key={aIndex}
                        className="text-white/60 text-sm flex items-start gap-2"
                      >
                        <span className={colorClasses.text}>•</span>
                        {assumption}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cost breakdown */}
        <div className="bg-primary-900/30 border border-white/10 p-6">
          <h3 className="text-white font-semibold mb-6">
            Desglose por Componente (Escenario Esperado)
          </h3>

          <div className="space-y-4">
            {breakdown.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/80">{item.component}</span>
                  <span className="text-accent font-mono">
                    ${item.base}B COP
                  </span>
                </div>
                <div className="h-3 bg-primary-950 overflow-hidden">
                  <div
                    className="h-full bg-accent"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <p className="text-white/40 text-xs mt-1">
                  {item.percentage}% del total
                </p>
              </div>
            ))}
          </div>

          {/* Contingency note */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/60 text-sm">
                  Contingencia Recomendada
                </p>
                <p className="text-white/40 text-xs">
                  Basado en análisis de riesgos identificados
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-display font-bold text-accent">
                  15%
                </p>
                <p className="text-white/40 text-xs">$25B COP adicionales</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key insight */}
        <div className="mt-6 bg-accent/10 border border-accent/30 p-4">
          <p className="text-white/80 text-sm">
            <span className="text-accent font-semibold">Insight IDE:</span> La
            volatilidad del peso colombiano representa el mayor riesgo
            financiero. Recomendamos hedging cambiario para el 40% de
            componentes importados (tablestacas, bombas, equipos
            especializados).
          </p>
        </div>
      </div>
    </section>
  );
}
