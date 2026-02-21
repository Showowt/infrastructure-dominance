"use client";

import { Calendar, AlertTriangle, CloudRain, Sun } from "lucide-react";

const phases = [
  {
    name: "Fase 1: Estudios y Diseños",
    traditional: "4 meses",
    optimized: "3 meses",
    savings: "1 mes",
    start: "Feb 2026",
    end: "May 2026",
    tasks: [
      "Estudios topográficos y batimétricos",
      "Diseño hidráulico detallado",
      "Especificaciones BIM",
      "Permisos ambientales",
    ],
    risks: ["DIMAR puede agregar 2-4 meses si no se inicia antes"],
  },
  {
    name: "Fase 2A: Solución Hidráulica",
    traditional: "10 meses",
    optimized: "8 meses",
    savings: "2 meses",
    start: "Jun 2026",
    end: "Ene 2027",
    tasks: [
      "Instalación tablestacas 2km",
      "Box culverts bajo Av. Chile",
      "Estaciones de bombeo (4)",
      "Conexiones colectores",
    ],
    risks: ["Temporada lluvias May-Nov afecta productividad 30%"],
  },
  {
    name: "Fase 2B: Av. Chile + Paseo",
    traditional: "12 meses",
    optimized: "9 meses",
    savings: "3 meses",
    start: "Sep 2026",
    end: "May 2027",
    tasks: [
      "Reconstrucción vial 2.5km",
      "Aceras y accesibilidad",
      "Deck marítimo 2.2km",
      "Iluminación y mobiliario",
    ],
    risks: ["Conflicto con temporada turística dic-ene"],
  },
  {
    name: "Fase 2C: Parques",
    traditional: "6 meses",
    optimized: "4 meses",
    savings: "2 meses",
    start: "Mar 2027",
    end: "Jun 2027",
    tasks: [
      "Parque Navas",
      "Parque Coral Gables",
      "Parque La Concha",
      "Arborización final",
    ],
    risks: ["Puede ejecutarse en paralelo con Fase 2B"],
  },
];

const weatherData = [
  { month: "Ene", rain: 10, optimal: true },
  { month: "Feb", rain: 5, optimal: true },
  { month: "Mar", rain: 15, optimal: true },
  { month: "Abr", rain: 80, optimal: false },
  { month: "May", rain: 150, optimal: false },
  { month: "Jun", rain: 100, optimal: false },
  { month: "Jul", rain: 90, optimal: false },
  { month: "Ago", rain: 110, optimal: false },
  { month: "Sep", rain: 140, optimal: false },
  { month: "Oct", rain: 200, optimal: false },
  { month: "Nov", rain: 180, optimal: false },
  { month: "Dic", rain: 50, optimal: true },
];

export function TimelineOptimization() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-accent/10 border border-accent/30 flex items-center justify-center">
            <Calendar className="w-5 h-5 text-accent" />
          </div>
          <div>
            <span className="text-accent text-sm uppercase tracking-widest font-medium">
              Motor 6
            </span>
            <h2 className="font-display text-2xl font-bold text-white">
              Timeline Optimizado
            </h2>
          </div>
        </div>

        {/* Summary comparison */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-red-500/10 border border-red-500/30 p-6 text-center">
            <p className="text-white/60 text-sm uppercase tracking-wider mb-2">
              Timeline Tradicional
            </p>
            <p className="text-4xl font-display font-bold text-red-400">
              24 meses
            </p>
            <p className="text-white/40 text-sm mt-1">Entrega: Ago 2028</p>
          </div>
          <div className="bg-green-500/10 border border-green-500/30 p-6 text-center">
            <p className="text-white/60 text-sm uppercase tracking-wider mb-2">
              Timeline Optimizado IDE
            </p>
            <p className="text-4xl font-display font-bold text-green-400">
              16 meses
            </p>
            <p className="text-white/40 text-sm mt-1">Entrega: Jun 2027</p>
          </div>
          <div className="bg-accent/10 border border-accent/30 p-6 text-center">
            <p className="text-white/60 text-sm uppercase tracking-wider mb-2">
              Ahorro Total
            </p>
            <p className="text-4xl font-display font-bold text-accent">
              8 meses
            </p>
            <p className="text-white/40 text-sm mt-1">33% más rápido</p>
          </div>
        </div>

        {/* Weather overlay */}
        <div className="bg-primary-900/30 border border-white/10 p-6 mb-8">
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <CloudRain className="w-5 h-5 text-blue-400" />
            Overlay Climático — Precipitación Cartagena (mm/mes)
          </h3>
          <div className="flex items-end gap-1 h-32">
            {weatherData.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div
                  className={`w-full ${data.optimal ? "bg-green-500/60" : "bg-blue-500/60"}`}
                  style={{ height: `${(data.rain / 200) * 100}%` }}
                />
                <p className="text-white/40 text-xs mt-2">{data.month}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-6 mt-4 text-sm">
            <div className="flex items-center gap-2">
              <Sun className="w-4 h-4 text-green-400" />
              <span className="text-white/60">Temporada seca (óptima)</span>
            </div>
            <div className="flex items-center gap-2">
              <CloudRain className="w-4 h-4 text-blue-400" />
              <span className="text-white/60">
                Temporada lluvias (productividad -30%)
              </span>
            </div>
          </div>
        </div>

        {/* Phases */}
        <div className="space-y-4">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="bg-primary-900/30 border border-white/10 p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-white font-semibold">{phase.name}</h3>
                <div className="flex items-center gap-4 mt-2 md:mt-0">
                  <span className="text-white/40 text-sm line-through">
                    {phase.traditional}
                  </span>
                  <span className="text-green-400 font-semibold">
                    {phase.optimized}
                  </span>
                  <span className="text-accent text-sm">
                    (-{phase.savings})
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-2">
                    Actividades
                  </p>
                  <ul className="space-y-1">
                    {phase.tasks.map((task, tIndex) => (
                      <li
                        key={tIndex}
                        className="text-white/70 text-sm flex items-start gap-2"
                      >
                        <span className="text-accent">▸</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-2">
                    Alertas
                  </p>
                  {phase.risks.map((risk, rIndex) => (
                    <div
                      key={rIndex}
                      className="flex items-start gap-2 text-yellow-400 text-sm"
                    >
                      <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      {risk}
                    </div>
                  ))}
                  <p className="text-white/40 text-xs mt-2">
                    {phase.start} → {phase.end}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
