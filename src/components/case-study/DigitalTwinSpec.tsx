"use client";

import { Box, Cpu, Layers, Wifi, Database, Eye } from "lucide-react";

const twinLayers = [
  {
    icon: Layers,
    name: "Capa de Geometría",
    description: "Modelo BIM LOD 400 del proyecto completo",
    specs: [
      "2.5km de corredor vial modelado",
      "2km de tablestacas con conexiones detalladas",
      "4 estaciones de bombeo con MEP completo",
      "3 parques con paisajismo paramétrico",
    ],
    format: "IFC 4.3 / Revit 2024",
  },
  {
    icon: Database,
    name: "Capa de Datos",
    description: "Información en tiempo real del sitio",
    specs: [
      "Sensores de nivel de agua (IoT)",
      "Estaciones meteorológicas locales",
      "Monitoreo de tráfico vehicular",
      "Calidad del aire y ruido",
    ],
    format: "API REST / MQTT",
  },
  {
    icon: Cpu,
    name: "Capa de Simulación",
    description: "Motores de análisis predictivo",
    specs: [
      "Simulación hidráulica SWMM",
      "Análisis estructural FEM",
      "Modelado de tráfico VISSIM",
      "Proyección climática IPCC AR6",
    ],
    format: "Python / Julia",
  },
  {
    icon: Eye,
    name: "Capa de Visualización",
    description: "Interfaz de usuario inmersiva",
    specs: [
      "Visor web 3D interactivo",
      "Dashboards de monitoreo en vivo",
      "Alertas automáticas de riesgo",
      "Reportes ejecutivos automatizados",
    ],
    format: "Three.js / PowerBI",
  },
];

const integrations = [
  {
    system: "Catastro Cartagena",
    purpose: "Linderos y propiedades afectadas",
    status: "Disponible",
  },
  {
    system: "IDEAM",
    purpose: "Datos climatológicos históricos",
    status: "Disponible",
  },
  {
    system: "DIAN Precios",
    purpose: "Referencias de costos unitarios",
    status: "Disponible",
  },
  {
    system: "IGAC Geodesia",
    purpose: "Sistema de coordenadas oficial",
    status: "Disponible",
  },
  {
    system: "EPA Cartagena",
    purpose: "Zonas de protección ambiental",
    status: "En gestión",
  },
  {
    system: "DIMAR",
    purpose: "Batimetría y corrientes marinas",
    status: "Pendiente",
  },
];

export function DigitalTwinSpec() {
  return (
    <section className="relative py-16 md:py-24 bg-primary-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-accent/10 border border-accent/30 flex items-center justify-center">
            <Box className="w-5 h-5 text-accent" />
          </div>
          <div>
            <span className="text-accent text-sm uppercase tracking-widest font-medium">
              Motor 2
            </span>
            <h2 className="font-display text-2xl font-bold text-white">
              Especificación Digital Twin
            </h2>
          </div>
        </div>

        {/* Architecture diagram */}
        <div className="bg-primary-900/50 border border-white/10 p-8 mb-8">
          <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
            <Wifi className="w-5 h-5 text-accent" />
            Arquitectura del Gemelo Digital
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {twinLayers.map((layer, index) => (
              <div
                key={index}
                className="bg-primary-950/50 border border-white/10 p-5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent/10 border border-accent/30 flex items-center justify-center">
                    <layer.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">
                      {layer.name}
                    </h4>
                    <p className="text-accent text-xs">{layer.format}</p>
                  </div>
                </div>

                <p className="text-white/60 text-sm mb-3">
                  {layer.description}
                </p>

                <ul className="space-y-1">
                  {layer.specs.map((spec, sIndex) => (
                    <li
                      key={sIndex}
                      className="text-white/50 text-xs flex items-start gap-2"
                    >
                      <span className="text-accent/60">▸</span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Connection arrows (visual only) */}
          <div className="hidden lg:flex items-center justify-center gap-2 mt-6 text-accent/40">
            <span className="text-xs uppercase tracking-wider">
              Flujo de datos bidireccional
            </span>
            <span>←→</span>
            <span className="text-xs uppercase tracking-wider">
              Actualización en tiempo real
            </span>
          </div>
        </div>

        {/* Data integrations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Integration sources */}
          <div className="bg-primary-900/30 border border-white/10 p-6">
            <h3 className="text-white font-semibold mb-4">
              Integraciones de Datos
            </h3>
            <div className="space-y-3">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-primary-950/50 border border-white/5"
                >
                  <div>
                    <p className="text-white text-sm font-medium">
                      {integration.system}
                    </p>
                    <p className="text-white/40 text-xs">
                      {integration.purpose}
                    </p>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 ${
                      integration.status === "Disponible"
                        ? "bg-green-500/10 text-green-400"
                        : integration.status === "En gestión"
                          ? "bg-yellow-500/10 text-yellow-400"
                          : "bg-red-500/10 text-red-400"
                    }`}
                  >
                    {integration.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div className="bg-primary-900/30 border border-white/10 p-6">
            <h3 className="text-white font-semibold mb-4">
              Entregables del Gemelo Digital
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-accent/5 border border-accent/20">
                <p className="text-accent font-medium text-sm mb-2">
                  Fase 1 — Estudios (72 horas)
                </p>
                <ul className="space-y-1 text-white/60 text-sm">
                  <li>▸ Modelo conceptual 3D georeferenciado</li>
                  <li>▸ Simulación hidráulica preliminar</li>
                  <li>▸ Análisis de viabilidad automatizado</li>
                </ul>
              </div>

              <div className="p-4 bg-primary-950/50 border border-white/10">
                <p className="text-white font-medium text-sm mb-2">
                  Fase 2 — Diseño Detallado
                </p>
                <ul className="space-y-1 text-white/60 text-sm">
                  <li>▸ Modelo BIM LOD 400 completo</li>
                  <li>▸ Clash detection automatizado</li>
                  <li>▸ Quantificación 4D/5D</li>
                </ul>
              </div>

              <div className="p-4 bg-primary-950/50 border border-white/10">
                <p className="text-white font-medium text-sm mb-2">
                  Fase 3 — Construcción
                </p>
                <ul className="space-y-1 text-white/60 text-sm">
                  <li>▸ Monitoreo de avance en tiempo real</li>
                  <li>▸ Detección de desviaciones automática</li>
                  <li>▸ As-built digital actualizado</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* BIM 2026 compliance */}
        <div className="mt-8 bg-accent/10 border border-accent/30 p-6">
          <div className="flex items-start gap-4">
            <Box className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-accent font-semibold mb-2">
                Cumplimiento Norma BIM Colombia 2026
              </h3>
              <p className="text-white/70 text-sm mb-3">
                El proyecto &quot;4 en 1&quot; será uno de los primeros en
                Colombia en cumplir completamente con la nueva normativa BIM
                obligatoria. El gemelo digital IDE supera los requisitos mínimos
                con modelos LOD 400+ e integración de datos en tiempo real.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="text-white/60">✓ IFC 4.3 nativo</span>
                <span className="text-white/60">✓ COBie para operación</span>
                <span className="text-white/60">✓ Coordinación 4D/5D</span>
                <span className="text-white/60">✓ Entorno Común de Datos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
