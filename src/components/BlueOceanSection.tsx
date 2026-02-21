"use client";

import {
  Database,
  Shield,
  Zap,
  Brain,
  Link2,
  Repeat,
  Network,
} from "lucide-react";

const vectors = [
  {
    icon: Database,
    title: "Foso de Datos",
    implementation:
      "Cada proyecto genera datos de terreno, clima, suelo, tráfico, sensores que se acumulan en la primera base de datos privada de inteligencia de infraestructura de Colombia.",
    moat: "Después de 10 proyectos, ningún competidor puede igualar nuestra precisión predictiva.",
  },
  {
    icon: Shield,
    title: "Escudo de Cumplimiento",
    implementation:
      "First-mover en mandato BIM 2026 de Colombia: 100% de proyectos públicos deben usar BIM. La mayoría de firmas no están listas.",
    moat: "Nosotros SOMOS la solución de cumplimiento.",
  },
  {
    icon: Zap,
    title: "Arbitraje de Automatización",
    implementation:
      "Estudio manual = 4 meses. Nuestro sistema = 72 horas. Una vez que un gobierno ve la diferencia, volver atrás es imposible.",
    moat: "La velocidad se convierte en el nuevo estándar.",
  },
  {
    icon: Brain,
    title: "Capa de Inteligencia",
    implementation:
      "Modelado predictivo de costos, pronóstico de riesgos, scoring de probabilidad de retrasos de datos acumulados de proyectos.",
    moat: "Insights que crean dependencia.",
  },
  {
    icon: Link2,
    title: "Gravedad de Integración",
    implementation:
      "Conectar a Supabase + portales gubernamentales + sistemas de contratistas + plataformas ciudadanas.",
    moat: "Costo de cambio se vuelve prohibitivo.",
  },
  {
    icon: Repeat,
    title: "Lock-in de Workflow",
    implementation:
      "Entrenar equipos de gobierno en nuestros dashboards y herramientas. El hábito se forma en 30 días.",
    moat: "Doloroso romper workflows establecidos.",
  },
  {
    icon: Network,
    title: "Loop de Distribución",
    implementation:
      "Cada proyecto exitoso = caso de estudio = referencia a otras ciudades. Cartagena a Medellín a Bogotá a Cali.",
    moat: "El éxito genera más clientes.",
  },
];

export function BlueOceanSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm uppercase tracking-widest font-medium">
            Ventaja Competitiva
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Los 7 Vectores del Océano Azul
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Cada vector crea lock-in que los competidores no pueden replicar. La
            intersección de IA + infraestructura colombiana + expertise local no
            existe en ningún otro lugar.
          </p>
        </div>

        {/* Vectors grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {vectors.map((vector, index) => (
            <div
              key={index}
              className="engine-card bg-primary-900/30 border border-white/10 p-6 hover:border-accent/30 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <vector.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold text-white mb-3">
                    {vector.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4">
                    {vector.implementation}
                  </p>
                  <div className="bg-accent/10 border-l-2 border-accent px-4 py-2">
                    <p className="text-accent text-sm font-medium">
                      {vector.moat}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why no one can copy */}
        <div className="mt-16 bg-gradient-to-r from-accent/10 to-infrastructure-blueprint/10 border border-accent/30 p-8 md:p-12">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Por Qué Nadie Puede Copiar Esto
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-white/60 text-sm uppercase tracking-wider mb-2">
                Consultores Tradicionales
              </p>
              <p className="text-white/40 text-sm">
                No pueden igualar la velocidad. 4 meses vs 72 horas.
              </p>
            </div>
            <div className="text-center">
              <p className="text-white/60 text-sm uppercase tracking-wider mb-2">
                Firmas BIM Internacionales
              </p>
              <p className="text-white/40 text-sm">
                No conocen regulaciones, cultura, mercado colombiano.
              </p>
            </div>
            <div className="text-center">
              <p className="text-white/60 text-sm uppercase tracking-wider mb-2">
                Empresas Tech Locales
              </p>
              <p className="text-white/40 text-sm">
                No tienen expertise de dominio en infraestructura.
              </p>
            </div>
            <div className="text-center">
              <p className="text-white/60 text-sm uppercase tracking-wider mb-2">
                Gobierno In-House
              </p>
              <p className="text-white/40 text-sm">
                No tienen capacidad AI, ni inteligencia cross-proyecto.
              </p>
            </div>
            <div className="text-center">
              <p className="text-white/60 text-sm uppercase tracking-wider mb-2">
                Firmas AI Internacionales
              </p>
              <p className="text-white/40 text-sm">
                No tienen datos colombianos, relaciones locales, español.
              </p>
            </div>
            <div className="text-center border border-accent/30 bg-accent/5 p-4">
              <p className="text-accent text-sm uppercase tracking-wider mb-2">
                La Intersección
              </p>
              <p className="text-white text-sm font-medium">
                Nadie ocupa esta posición. Hasta ahora.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
