"use client";

import {
  Rocket,
  Building2,
  Scale,
  Shield,
  Calculator,
  Calendar,
  Users,
} from "lucide-react";

const engines = [
  {
    number: "01",
    icon: Rocket,
    title: "Acelerador de Factibilidad",
    description:
      "Estudios completos de factibilidad en 72 horas. Análisis de terreno, mapa de cumplimiento regulatorio, modelado de costos con 3 escenarios, matriz de riesgos, análisis de impacto, timeline con ruta crítica.",
    output: "Estudio completo de factibilidad",
    speed: "72 horas vs 4 meses",
  },
  {
    number: "02",
    icon: Building2,
    title: "Capa de Inteligencia BIM",
    description:
      "Colombia mandato BIM 2026: 100% de proyectos públicos deben usar BIM. La mayoría de firmas no están listas. Nosotros SOMOS la solución de cumplimiento.",
    output: "Especificaciones BIM-ready (LOD 200-350)",
    speed: "ISO 19650 compliant",
  },
  {
    number: "03",
    icon: Scale,
    title: "Navegador Regulatorio",
    description:
      "Mapeo completo de ley de construcción colombiana: permisos municipales, licencias ambientales (ANLA, CRA, CARDIQUE), cumplimiento sísmico (NSR-10), regulaciones de zona costera (DIMAR).",
    output: "Mapa regulatorio completo",
    speed: "Todas las jurisdicciones",
  },
  {
    number: "04",
    icon: Shield,
    title: "Matriz de Predicción de Riesgos",
    description:
      "Construida de patrones documentados de fallas de proyectos colombianos: disrupciones climáticas, cadena de suministro, disponibilidad laboral, riesgo político, vulnerabilidad a corrupción.",
    output: "Scoring de riesgos cuantificado",
    speed: "Indicadores de alerta temprana",
  },
  {
    number: "05",
    icon: Calculator,
    title: "Inteligencia de Costos",
    description:
      "Modelado de costos en tiempo real calibrado al mercado colombiano: base de datos de materiales, costos laborales por ciudad, tarifas de equipos, cálculos de aranceles, riesgo cambiario.",
    output: "Modelo de costos con 3 escenarios",
    speed: "Datos de mercado en tiempo real",
  },
  {
    number: "06",
    icon: Calendar,
    title: "Optimizador de Timeline",
    description:
      "Programación potenciada por IA que considera realidades colombianas: overlays climáticos, disponibilidad laboral local, timelines de permisos realistas, impacto de temporada de lluvias.",
    output: "Cronograma optimizado Gantt-ready",
    speed: "Buffers basados en datos",
  },
  {
    number: "07",
    icon: Users,
    title: "Centro de Comando de Stakeholders",
    description:
      "Motor de comunicación multi-audiencia: reportes gubernamentales, actualizaciones a inversionistas, boletines comunitarios, briefings a contratistas, releases de prensa, dashboards internos.",
    output: "Comunicación automática",
    speed: "8 formatos de audiencia",
  },
];

export function EnginesSection() {
  return (
    <section id="engines" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm uppercase tracking-widest font-medium">
            El Sistema
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Los 7 Motores de Dominancia
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Cada motor opera simultáneamente. Los outputs se cruzan-referencian.
            Contradicciones se marcan. Oportunidades de optimización se
            identifican.
          </p>
        </div>

        {/* Engines grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engines.map((engine, index) => (
            <div
              key={index}
              className="engine-card bg-primary-900/30 border border-white/10 p-6 hover:border-accent/30 transition-all duration-300 group relative"
            >
              {/* Engine number */}
              <div className="absolute top-4 right-4 text-accent/20 font-display text-4xl font-bold">
                {engine.number}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 bg-accent/10 border border-accent/30 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <engine.icon className="w-6 h-6 text-accent" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-white mb-3">
                {engine.title}
              </h3>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">
                {engine.description}
              </p>

              {/* Output badges */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-accent uppercase tracking-wider">
                    Output:
                  </span>
                  <span className="text-xs text-white/80">{engine.output}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-accent uppercase tracking-wider">
                    Velocidad:
                  </span>
                  <span className="text-xs text-white/80">{engine.speed}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full analysis CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-accent/10 to-infrastructure-blueprint/10 border border-accent/30 p-8">
            <p className="font-mono text-accent mb-4 text-lg">
              FULL ANALYSIS: [Nombre del Proyecto]
            </p>
            <p className="text-white/70 max-w-xl mx-auto mb-6">
              Un comando. Todos los motores. Paquete completo de inteligencia de
              proyecto en 72 horas.
            </p>
            <a
              href="#contact"
              className="btn-primary bg-accent text-primary-950 px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-accent-light transition-all inline-block"
            >
              Solicitar Full Analysis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
