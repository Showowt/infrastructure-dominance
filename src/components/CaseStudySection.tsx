"use client";

import { MapPin, Calendar, DollarSign, Target } from "lucide-react";

const cities = [
  {
    name: "Cartagena",
    status: "Primario",
    details:
      "Zona costera DIMAR, zonas de inundación Bocagrande/Castillogrande/Manga, buffer UNESCO Centro Histórico, impacto turístico, proyecto 4 en 1, expansión aeropuerto",
    timeline: "Meses 1-3",
    target: "$50K-150K",
  },
  {
    name: "Barranquilla",
    status: "Siguiente",
    details:
      "Puerto Colombia, Río Magdalena, infraestructura portuaria, conectividad regional",
    timeline: "Meses 3-5",
    target: "$50K-100K",
  },
  {
    name: "Medellín",
    status: "Fase 2",
    details:
      "Expansión Metro, estabilización de laderas, integración Ruta N, coordinación EPM",
    timeline: "Meses 5-7",
    target: "$75K-200K",
  },
  {
    name: "Bogotá",
    status: "Fase 2",
    details:
      "Coordinación Metro Línea 1, integración Regiotram, expansión TransMilenio, consideraciones de altitud",
    timeline: "Meses 7-10",
    target: "$100K-300K",
  },
  {
    name: "Cali",
    status: "Fase 3",
    details:
      "Zona sísmica 8 (máximo riesgo), manejo de inundaciones Río Cauca, integración MIO",
    timeline: "Meses 10-12",
    target: "$75K-200K",
  },
];

export function CaseStudySection() {
  return (
    <section
      id="case-study"
      className="relative py-24 md:py-32 bg-primary-900/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm uppercase tracking-widest font-medium">
            Estrategia de Despliegue
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            De Cartagena a Todo Colombia
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Cada ciudad sigue el mismo patrón: Probar en un proyecto, firmar 3-5
            contratos, entrenar equipo local, moverse a la siguiente ciudad. El
            foso de datos se acumula con cada proyecto.
          </p>
        </div>

        {/* City timeline */}
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-accent/20" />

          <div className="space-y-8">
            {cities.map((city, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-accent border-4 border-primary-950" />

                {/* Content card */}
                <div
                  className={`flex-1 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
                >
                  <div className="engine-card bg-primary-900/30 border border-white/10 p-6 hover:border-accent/30 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="w-5 h-5 text-accent" />
                          <h3 className="font-display text-xl font-semibold text-white">
                            {city.name}
                          </h3>
                        </div>
                        <span className="inline-block bg-accent/10 border border-accent/30 px-3 py-1 text-xs text-accent uppercase tracking-wider">
                          {city.status}
                        </span>
                      </div>
                    </div>

                    <p className="text-white/60 text-sm mb-4">{city.details}</p>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-accent/60" />
                        <span className="text-sm text-white/80">
                          {city.timeline}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-accent/60" />
                        <span className="text-sm text-white/80">
                          {city.target}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>

        {/* Year 1 target */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-accent/10 border border-accent/30 p-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Target className="w-8 h-8 text-accent" />
              <span className="font-display text-2xl font-bold text-white">
                Meta Año 1
              </span>
            </div>
            <p className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">
              $1M+ USD
            </p>
            <p className="text-white/60">
              Solo de inteligencia de infraestructura. Vertical nuevo. No
              compite con hospitalidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
