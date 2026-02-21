"use client";

import { Shield } from "lucide-react";

const risks = [
  {
    id: 1,
    name: "Falla geotécnica tablestacas",
    probability: 35,
    impact: 95,
    score: 33,
    category: "Técnico",
  },
  {
    id: 2,
    name: "Retraso permisos DIMAR",
    probability: 70,
    impact: 45,
    score: 32,
    category: "Regulatorio",
  },
  {
    id: 3,
    name: "Sobrecosto por TRM",
    probability: 60,
    impact: 50,
    score: 30,
    category: "Financiero",
  },
  {
    id: 4,
    name: "Temporada de lluvias",
    probability: 80,
    impact: 35,
    score: 28,
    category: "Climático",
  },
  {
    id: 5,
    name: "Cambio administración",
    probability: 40,
    impact: 60,
    score: 24,
    category: "Político",
  },
  {
    id: 6,
    name: "Conflictos contratistas",
    probability: 55,
    impact: 40,
    score: 22,
    category: "Operacional",
  },
  {
    id: 7,
    name: "Oposición comunitaria",
    probability: 45,
    impact: 30,
    score: 14,
    category: "Social",
  },
  {
    id: 8,
    name: "Escasez de mano de obra",
    probability: 30,
    impact: 35,
    score: 11,
    category: "Recursos",
  },
];

export function RiskMatrix() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-accent/10 border border-accent/30 flex items-center justify-center">
            <Shield className="w-5 h-5 text-accent" />
          </div>
          <div>
            <span className="text-accent text-sm uppercase tracking-widest font-medium">
              Motor 4
            </span>
            <h2 className="font-display text-2xl font-bold text-white">
              Matriz de Riesgos Cuantificada
            </h2>
          </div>
        </div>

        {/* Risk matrix visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Matrix grid */}
          <div className="bg-primary-900/30 border border-white/10 p-6">
            <h3 className="text-white font-semibold mb-4">
              Matriz Probabilidad x Impacto
            </h3>
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Grid background */}
              <div className="absolute inset-0 grid grid-cols-5 grid-rows-5 gap-px bg-white/10">
                {[...Array(25)].map((_, i) => {
                  const row = Math.floor(i / 5);
                  const col = i % 5;
                  let bg = "bg-green-500/10";
                  if (row + col >= 6) bg = "bg-red-500/20";
                  else if (row + col >= 4) bg = "bg-yellow-500/15";
                  else if (row + col >= 2) bg = "bg-green-500/15";
                  return <div key={i} className={bg} />;
                })}
              </div>

              {/* Risk points */}
              {risks.map((risk) => (
                <div
                  key={risk.id}
                  className="absolute w-8 h-8 -ml-4 -mt-4 bg-accent border-2 border-white flex items-center justify-center text-xs font-bold text-primary-950 cursor-pointer hover:scale-125 transition-transform"
                  style={{
                    left: `${risk.probability}%`,
                    bottom: `${risk.impact}%`,
                  }}
                  title={risk.name}
                >
                  {risk.id}
                </div>
              ))}

              {/* Axis labels */}
              <div className="absolute -bottom-8 left-0 right-0 text-center text-white/60 text-xs uppercase tracking-wider">
                Probabilidad →
              </div>
              <div className="absolute -left-8 top-0 bottom-0 flex items-center">
                <span className="text-white/60 text-xs uppercase tracking-wider -rotate-90 whitespace-nowrap">
                  ← Impacto
                </span>
              </div>
            </div>
          </div>

          {/* Risk table */}
          <div className="bg-primary-900/30 border border-white/10 p-6">
            <h3 className="text-white font-semibold mb-4">
              Ranking de Riesgos por Score
            </h3>
            <div className="space-y-3">
              {risks
                .sort((a, b) => b.score - a.score)
                .map((risk, index) => (
                  <div
                    key={risk.id}
                    className="flex items-center gap-4 p-3 bg-primary-950/50 border border-white/5"
                  >
                    <div className="w-8 h-8 bg-accent flex items-center justify-center text-primary-950 font-bold text-sm">
                      {risk.id}
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">
                        {risk.name}
                      </p>
                      <p className="text-white/40 text-xs">{risk.category}</p>
                    </div>
                    <div className="text-right">
                      <p
                        className={`text-lg font-bold ${
                          risk.score > 25
                            ? "text-red-400"
                            : risk.score > 15
                              ? "text-yellow-400"
                              : "text-green-400"
                        }`}
                      >
                        {risk.score}
                      </p>
                      <p className="text-white/40 text-xs">
                        P:{risk.probability}% I:{risk.impact}%
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Risk summary */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-red-500/10 border border-red-500/30 p-4 text-center">
            <p className="text-3xl font-display font-bold text-red-400">3</p>
            <p className="text-white/60 text-sm">
              Riesgos Altos (Score &gt;25)
            </p>
          </div>
          <div className="bg-yellow-500/10 border border-yellow-500/30 p-4 text-center">
            <p className="text-3xl font-display font-bold text-yellow-400">3</p>
            <p className="text-white/60 text-sm">
              Riesgos Medios (Score 15-25)
            </p>
          </div>
          <div className="bg-green-500/10 border border-green-500/30 p-4 text-center">
            <p className="text-3xl font-display font-bold text-green-400">2</p>
            <p className="text-white/60 text-sm">
              Riesgos Bajos (Score &lt;15)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
