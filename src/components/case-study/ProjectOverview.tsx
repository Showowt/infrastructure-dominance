"use client";

import { Droplets, Construction, Waves, Trees } from "lucide-react";

const components = [
  {
    icon: Droplets,
    number: "01",
    title: "Solución Hidráulica",
    description: "Sistema integral de control de inundaciones",
    details: [
      "Muro de tablestacas de 2 km a lo largo del malecón",
      "Box culverts subterráneos bajo Av. Chile",
      "Tanques de retención subterráneos",
      "4 estaciones de bombeo automático",
      "Colectores especiales entre Portomarine y Base Naval",
    ],
    locations: "Parque Navas, Coral Gables, La Concha, Punta Castillogrande",
    investment: "$68B COP (est.)",
  },
  {
    icon: Construction,
    number: "02",
    title: "Modernización Av. Chile",
    description: "Reconstrucción completa de la vía principal",
    details: [
      "2.5 km de reconstrucción total",
      "Nuevas aceras con accesibilidad universal",
      "Infraestructura de recolección de aguas lluvias integrada",
      "Colectores laterales en ambos lados",
      "Señalización y mobiliario urbano nuevo",
    ],
    locations: "Bocagrande - Castillogrande",
    investment: "$45B COP (est.)",
  },
  {
    icon: Waves,
    number: "03",
    title: "Paseo Marítimo",
    description: "Transformación del corredor costero",
    details: [
      "2.2 km de malecón rediseñado",
      "Estructura de deck elevado 5m hacia la bahía",
      "Ciclovía familiar",
      "Muelles renovados con bahías de pasajeros",
      "Iluminación moderna y mobiliario urbano",
    ],
    locations: "Frente costero Bocagrande-Castillogrande",
    investment: "$35B COP (est.)",
  },
  {
    icon: Trees,
    number: "04",
    title: "Renovación de Parques",
    description: "Revitalización total de espacios públicos",
    details: [
      "Parque Navas - renovación completa",
      "Parque Coral Gables - nuevos espacios verdes",
      "Parque La Concha - integración con paseo marítimo",
      "Zonas de recreación familiar",
      "Arborización y paisajismo",
    ],
    locations: "3 parques principales",
    investment: "$20B COP (est.)",
  },
];

export function ProjectOverview() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12">
          <span className="text-accent text-sm uppercase tracking-widest font-medium">
            Motor 1: Acelerador de Factibilidad
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            Alcance del Proyecto
          </h2>
          <p className="text-white/70 max-w-3xl">
            Desglose de los 4 componentes principales del proyecto integral de
            renovación urbana y solución hidráulica para Bocagrande y
            Castillogrande.
          </p>
        </div>

        {/* Components grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {components.map((component, index) => (
            <div
              key={index}
              className="bg-primary-900/30 border border-white/10 p-6 hover:border-accent/30 transition-colors"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 border border-accent/30 flex items-center justify-center">
                    <component.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-accent/60 text-xs font-mono">
                      {component.number}
                    </p>
                    <h3 className="font-display text-xl font-semibold text-white">
                      {component.title}
                    </h3>
                  </div>
                </div>
                <span className="text-accent font-mono text-sm">
                  {component.investment}
                </span>
              </div>

              <p className="text-white/60 text-sm mb-4">
                {component.description}
              </p>

              {/* Details list */}
              <ul className="space-y-2 mb-4">
                {component.details.map((detail, dIndex) => (
                  <li key={dIndex} className="flex items-start gap-2 text-sm">
                    <span className="text-accent mt-1">▸</span>
                    <span className="text-white/70">{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Location */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-white/40 text-xs uppercase tracking-wider">
                  Ubicación
                </p>
                <p className="text-white/60 text-sm">{component.locations}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Total investment */}
        <div className="mt-8 bg-accent/10 border border-accent/30 p-6 flex flex-col md:flex-row items-center justify-between">
          <div>
            <p className="text-white/60 text-sm uppercase tracking-wider">
              Inversión Total del Proyecto
            </p>
            <p className="text-3xl font-display font-bold text-accent">
              $168 mil millones COP
            </p>
          </div>
          <div className="mt-4 md:mt-0 text-right">
            <p className="text-white/60 text-sm">Equivalente aproximado</p>
            <p className="text-white font-semibold">~$38 millones USD</p>
          </div>
        </div>
      </div>
    </section>
  );
}
