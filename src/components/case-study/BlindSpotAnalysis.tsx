"use client";

import { Eye, AlertTriangle } from "lucide-react";

const blindSpots = [
  {
    category: "Estructural",
    severity: "CRÍTICO",
    title: "Estudio geotécnico marino insuficiente",
    description:
      "El muro de tablestacas de 2km requiere análisis detallado de sedimentos y corrientes marinas. Sin esto, riesgo de socavación y falla estructural.",
    impact: "Potencial falla de infraestructura de $68B COP",
    recommendation:
      "Contratar estudio batimétrico y geotécnico marino especializado ANTES de licitar",
  },
  {
    category: "Ambiental",
    severity: "CRÍTICO",
    title: "Proyección de aumento del nivel del mar subestimada",
    description:
      "El diseño de bombeo usa datos actuales (7.02mm/año) pero no proyecta escenarios 2050 donde se espera aceleración del aumento.",
    impact: "Sistema de bombeo obsoleto en 15-20 años",
    recommendation:
      "Incorporar modelado climático IPCC AR6 en especificaciones de capacidad de bombeo",
  },
  {
    category: "Regulatorio",
    severity: "ALTO",
    title: "Permisos DIMAR no contemplados en cronograma",
    description:
      "Obras en zona costera requieren permisos de DIMAR que típicamente toman 4-8 meses. No están incluidos en la Fase 1.",
    impact: "Retraso potencial de 4-8 meses antes de iniciar obra",
    recommendation: "Iniciar gestión DIMAR inmediatamente, antes de Feb 27",
  },
  {
    category: "Financiero",
    severity: "ALTO",
    title: "Sin cláusula de escalación por volatilidad cambiaria",
    description:
      "Equipos de bombeo y tablestacas son importados. Variación del peso colombiano puede aumentar costos significativamente.",
    impact: "Sobrecosto potencial de 15-25% en componentes importados",
    recommendation:
      "Incluir cláusula de ajuste por TRM en contratos de suministro",
  },
  {
    category: "Operacional",
    severity: "MEDIO",
    title: "Conflicto de temporada turística",
    description:
      "Fase de construcción (20 meses) incluye dos temporadas altas turísticas. Bocagrande genera 48% de ingresos fiscales.",
    impact: "Reducción de ingresos turísticos durante construcción",
    recommendation:
      "Plan de fases que minimice afectación durante dic-ene y semana santa",
  },
  {
    category: "Político",
    severity: "MEDIO",
    title: "Cambio de administración 2027",
    description:
      "El proyecto cruza período electoral. Nueva administración podría modificar prioridades o pausar obra.",
    impact: "Riesgo de paralización o modificación del alcance",
    recommendation:
      "Estructurar contratos con obligaciones multianuales y penalidades",
  },
  {
    category: "Técnico",
    severity: "MEDIO",
    title: "Integración de 4 contratistas diferentes",
    description:
      "Cada componente podría ser adjudicado a contratista diferente. Coordinación entre obras civiles, hidráulicas y paisajismo es compleja.",
    impact: "Conflictos en interfaces, retrabajos, disputas",
    recommendation:
      "Contratar gerencia de proyecto independiente con autoridad sobre todos los contratistas",
  },
  {
    category: "Comunidad",
    severity: "BAJO",
    title: "Oposición de residentes por disrupciones",
    description:
      "Construcción de 20 meses afectará acceso, ruido, y calidad de vida de residentes de alto poder adquisitivo.",
    impact: "Quejas, demandas, presión política",
    recommendation:
      "Plan de comunicación comunitaria y compensaciones por afectaciones",
  },
];

const severityColors: Record<
  string,
  { bg: string; text: string; border: string }
> = {
  CRÍTICO: {
    bg: "bg-red-500/10",
    text: "text-red-400",
    border: "border-red-500/30",
  },
  ALTO: {
    bg: "bg-orange-500/10",
    text: "text-orange-400",
    border: "border-orange-500/30",
  },
  MEDIO: {
    bg: "bg-yellow-500/10",
    text: "text-yellow-400",
    border: "border-yellow-500/30",
  },
  BAJO: {
    bg: "bg-green-500/10",
    text: "text-green-400",
    border: "border-green-500/30",
  },
};

export function BlindSpotAnalysis() {
  return (
    <section className="relative py-16 md:py-24 bg-primary-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-red-500/10 border border-red-500/30 flex items-center justify-center">
            <Eye className="w-5 h-5 text-red-400" />
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-white">
              Análisis de Puntos Ciegos
            </h2>
            <p className="text-white/60 text-sm">
              Lo que el brief del proyecto NO está viendo
            </p>
          </div>
        </div>

        {/* Summary stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-red-500/10 border border-red-500/30 p-4 text-center">
            <p className="text-3xl font-display font-bold text-red-400">2</p>
            <p className="text-white/60 text-xs uppercase tracking-wider">
              Críticos
            </p>
          </div>
          <div className="bg-orange-500/10 border border-orange-500/30 p-4 text-center">
            <p className="text-3xl font-display font-bold text-orange-400">2</p>
            <p className="text-white/60 text-xs uppercase tracking-wider">
              Altos
            </p>
          </div>
          <div className="bg-yellow-500/10 border border-yellow-500/30 p-4 text-center">
            <p className="text-3xl font-display font-bold text-yellow-400">3</p>
            <p className="text-white/60 text-xs uppercase tracking-wider">
              Medios
            </p>
          </div>
          <div className="bg-green-500/10 border border-green-500/30 p-4 text-center">
            <p className="text-3xl font-display font-bold text-green-400">1</p>
            <p className="text-white/60 text-xs uppercase tracking-wider">
              Bajos
            </p>
          </div>
        </div>

        {/* Blind spots list */}
        <div className="space-y-4">
          {blindSpots.map((spot, index) => {
            const colors = severityColors[spot.severity];
            return (
              <div
                key={index}
                className={`${colors.bg} border ${colors.border} p-6`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Severity badge */}
                  <div className="flex items-center gap-3 md:w-32 flex-shrink-0">
                    <AlertTriangle className={`w-5 h-5 ${colors.text}`} />
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider ${colors.text}`}
                    >
                      {spot.severity}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-white/40 text-xs uppercase tracking-wider">
                        {spot.category}
                      </span>
                    </div>
                    <h3 className="font-semibold text-white mb-2">
                      {spot.title}
                    </h3>
                    <p className="text-white/60 text-sm mb-3">
                      {spot.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-white/10">
                      <div>
                        <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
                          Impacto
                        </p>
                        <p className={`text-sm ${colors.text}`}>
                          {spot.impact}
                        </p>
                      </div>
                      <div>
                        <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
                          Recomendación
                        </p>
                        <p className="text-white/80 text-sm">
                          {spot.recommendation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
