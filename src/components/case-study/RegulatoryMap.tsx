"use client";

import {
  Scale,
  FileCheck,
  Clock,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

const regulations = [
  {
    entity: "DIMAR",
    fullName: "Dirección General Marítima",
    requirement: "Permiso de Construcción en Zona Costera",
    status: "PENDIENTE",
    timeline: "4-8 meses",
    critical: true,
    details: [
      "Estudio de impacto ambiental marino",
      "Evaluación de corrientes y sedimentos",
      "Plan de manejo de ecosistemas marinos",
      "Audiencia pública requerida",
    ],
    recommendation:
      "Iniciar gestión ANTES de Feb 27 para evitar retrasos en obra",
  },
  {
    entity: "EPA Cartagena",
    fullName: "Establecimiento Público Ambiental",
    requirement: "Licencia Ambiental",
    status: "EN PROCESO",
    timeline: "3-4 meses",
    critical: true,
    details: [
      "Estudio de impacto ambiental (EIA)",
      "Plan de manejo ambiental (PMA)",
      "Compensaciones por afectación de manglares",
      "Monitoreo de calidad del agua",
    ],
    recommendation: "Coordinar con DIMAR para estudio conjunto de impacto",
  },
  {
    entity: "Curaduría Urbana",
    fullName: "Curaduría Urbana de Cartagena",
    requirement: "Licencia de Construcción",
    status: "PENDIENTE",
    timeline: "2-3 meses",
    critical: false,
    details: [
      "Planos arquitectónicos aprobados",
      "Cumplimiento NSR-10 (sísmica)",
      "Norma urbanística POT 2020",
      "Retiros y alturas según zonificación",
    ],
    recommendation: "Puede tramitarse en paralelo con permisos ambientales",
  },
  {
    entity: "ANLA",
    fullName: "Autoridad Nacional de Licencias Ambientales",
    requirement: "Diagnóstico Ambiental de Alternativas",
    status: "NO REQUERIDO",
    timeline: "N/A",
    critical: false,
    details: [
      "No aplica para proyectos locales",
      "EPA Cartagena tiene jurisdicción",
      "Solo requerido para megaproyectos nacionales",
    ],
    recommendation: "Verificar si obras de dragado requieren intervención ANLA",
  },
  {
    entity: "Alcaldía de Cartagena",
    fullName: "Secretaría de Infraestructura",
    requirement: "Permiso de Ocupación de Espacio Público",
    status: "PENDIENTE",
    timeline: "1-2 meses",
    critical: false,
    details: [
      "Plan de manejo de tráfico",
      "Señalización temporal",
      "Rutas alternas aprobadas",
      "Horarios de obra restringidos",
    ],
    recommendation: "Coordinar con temporada turística para minimizar impacto",
  },
  {
    entity: "MinVivienda",
    fullName: "Ministerio de Vivienda",
    requirement: "Norma BIM 2026",
    status: "APLICABLE",
    timeline: "Obligatorio desde Ene 2026",
    critical: true,
    details: [
      "Modelos BIM LOD 300+ requeridos",
      "Interoperabilidad IFC obligatoria",
      "Entregables digitales en todas las fases",
      "Capacitación de equipos técnicos",
    ],
    recommendation:
      "IDE ya cumple con estándares BIM - ventaja competitiva significativa",
  },
];

const statusColors: Record<
  string,
  { bg: string; text: string; icon: typeof CheckCircle }
> = {
  PENDIENTE: {
    bg: "bg-yellow-500/10",
    text: "text-yellow-400",
    icon: Clock,
  },
  "EN PROCESO": {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    icon: AlertCircle,
  },
  APROBADO: {
    bg: "bg-green-500/10",
    text: "text-green-400",
    icon: CheckCircle,
  },
  "NO REQUERIDO": {
    bg: "bg-white/5",
    text: "text-white/40",
    icon: CheckCircle,
  },
  APLICABLE: {
    bg: "bg-accent/10",
    text: "text-accent",
    icon: FileCheck,
  },
};

export function RegulatoryMap() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-accent/10 border border-accent/30 flex items-center justify-center">
            <Scale className="w-5 h-5 text-accent" />
          </div>
          <div>
            <span className="text-accent text-sm uppercase tracking-widest font-medium">
              Motor 3
            </span>
            <h2 className="font-display text-2xl font-bold text-white">
              Mapa Regulatorio Colombiano
            </h2>
          </div>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-yellow-500/10 border border-yellow-500/30 p-4 text-center">
            <p className="text-3xl font-display font-bold text-yellow-400">3</p>
            <p className="text-white/60 text-xs uppercase tracking-wider">
              Pendientes
            </p>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 p-4 text-center">
            <p className="text-3xl font-display font-bold text-blue-400">1</p>
            <p className="text-white/60 text-xs uppercase tracking-wider">
              En Proceso
            </p>
          </div>
          <div className="bg-accent/10 border border-accent/30 p-4 text-center">
            <p className="text-3xl font-display font-bold text-accent">1</p>
            <p className="text-white/60 text-xs uppercase tracking-wider">
              Norma Nueva
            </p>
          </div>
          <div className="bg-red-500/10 border border-red-500/30 p-4 text-center">
            <p className="text-3xl font-display font-bold text-red-400">3</p>
            <p className="text-white/60 text-xs uppercase tracking-wider">
              Críticos
            </p>
          </div>
        </div>

        {/* Regulations list */}
        <div className="space-y-4">
          {regulations.map((reg, index) => {
            const statusStyle = statusColors[reg.status];
            const StatusIcon = statusStyle.icon;

            return (
              <div
                key={index}
                className={`bg-primary-900/30 border ${
                  reg.critical ? "border-red-500/30" : "border-white/10"
                } p-6`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Entity info */}
                  <div className="md:w-48 flex-shrink-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-white">
                        {reg.entity}
                      </span>
                      {reg.critical && (
                        <span className="text-red-400 text-xs px-2 py-0.5 bg-red-500/20 border border-red-500/30">
                          CRÍTICO
                        </span>
                      )}
                    </div>
                    <p className="text-white/40 text-xs">{reg.fullName}</p>
                  </div>

                  {/* Requirement details */}
                  <div className="flex-1">
                    <h3 className="text-white font-medium mb-2">
                      {reg.requirement}
                    </h3>

                    <ul className="space-y-1 mb-3">
                      {reg.details.map((detail, dIndex) => (
                        <li
                          key={dIndex}
                          className="text-white/60 text-sm flex items-start gap-2"
                        >
                          <span className="text-accent">▸</span>
                          {detail}
                        </li>
                      ))}
                    </ul>

                    <div className="bg-accent/5 border border-accent/20 p-3">
                      <p className="text-white/80 text-sm">
                        <span className="text-accent font-semibold">
                          Recomendación IDE:
                        </span>{" "}
                        {reg.recommendation}
                      </p>
                    </div>
                  </div>

                  {/* Status and timeline */}
                  <div className="md:w-40 flex-shrink-0 text-right">
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 ${statusStyle.bg}`}
                    >
                      <StatusIcon className={`w-4 h-4 ${statusStyle.text}`} />
                      <span
                        className={`text-sm font-medium ${statusStyle.text}`}
                      >
                        {reg.status}
                      </span>
                    </div>
                    <p className="text-white/40 text-sm mt-2">{reg.timeline}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Critical path warning */}
        <div className="mt-8 bg-red-500/10 border border-red-500/30 p-6">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-red-400 font-semibold mb-2">
                Ruta Crítica Regulatoria
              </h3>
              <p className="text-white/70 text-sm mb-3">
                El permiso DIMAR es el mayor cuello de botella. Con un tiempo de
                tramitación de 4-8 meses, debe iniciarse inmediatamente para
                evitar retrasos en la fecha de inicio del 27 de febrero.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-white/40">Acción requerida:</span>
                <span className="text-accent font-medium">
                  Radicar solicitud DIMAR antes del 28 de febrero
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
