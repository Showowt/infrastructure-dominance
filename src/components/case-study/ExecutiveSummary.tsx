"use client";

import { FileText, AlertTriangle, TrendingUp, CheckCircle } from "lucide-react";

export function ExecutiveSummary() {
  return (
    <section className="relative py-16 md:py-24 bg-primary-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-accent/10 border border-accent/30 flex items-center justify-center">
            <FileText className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-white">
              Resumen Ejecutivo
            </h2>
            <p className="text-white/60 text-sm">
              2 páginas para tomadores de decisiones
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main summary */}
          <div className="lg:col-span-2 bg-primary-900/30 border border-white/10 p-6 md:p-8">
            <h3 className="font-display text-xl font-semibold text-white mb-4">
              Proyecto &ldquo;4 en 1&rdquo; Bocagrande/Castillogrande
            </h3>

            <div className="space-y-4 text-white/70">
              <p>
                <strong className="text-white">Contexto Crítico:</strong> El
                nivel del mar en la bahía de Cartagena ha aumentado a un
                promedio de{" "}
                <span className="text-accent font-semibold">
                  7.02 mm anuales desde 2000
                </span>{" "}
                — más del doble del promedio global de 2.9 mm/año. Bocagrande y
                Castillogrande contribuyen el{" "}
                <span className="text-accent font-semibold">
                  48% de los ingresos fiscales
                </span>{" "}
                de la ciudad.
              </p>

              <p>
                <strong className="text-white">Inversión:</strong> $168 mil
                millones COP (~$38M USD) para un proyecto integral de 4
                componentes: solución hidráulica, modernización de Av. Chile,
                paseo marítimo, y renovación de 3 parques.
              </p>

              <p>
                <strong className="text-white">Timeline Propuesto:</strong> Fase
                1 (Estudios y Diseños): 4 meses. Fase 2 (Ejecución): 20 meses.
                Entrega estimada: 2027.
              </p>

              <p>
                <strong className="text-white">Evaluación IDE:</strong> El
                proyecto es técnicamente viable pero presenta{" "}
                <span className="text-red-400 font-semibold">
                  8 puntos ciegos críticos
                </span>{" "}
                que podrían resultar en sobrecostos del 25-40% y retrasos de
                6-12 meses si no se abordan proactivamente.
              </p>
            </div>

            {/* Key recommendations */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <h4 className="text-white font-semibold mb-3">
                Recomendaciones Prioritarias:
              </h4>
              <ol className="space-y-2 text-white/70 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">1.</span>
                  Realizar estudio geotécnico marino ANTES de licitar obra de
                  tablestacas
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">2.</span>
                  Integrar monitoreo de nivel del mar en tiempo real en diseño
                  de bombeo
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">3.</span>
                  Establecer protocolo de coordinación inter-secretarías desde
                  Fase 1
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">4.</span>
                  Incluir cláusula de escalación de costos por variación
                  cambiaria en contratos
                </li>
              </ol>
            </div>
          </div>

          {/* Quick stats sidebar */}
          <div className="space-y-4">
            {/* Viability score */}
            <div className="bg-green-500/10 border border-green-500/30 p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-green-400 font-semibold uppercase text-sm tracking-wider">
                  Viable
                </span>
              </div>
              <p className="text-4xl font-display font-bold text-green-400 mb-2">
                78/100
              </p>
              <p className="text-white/60 text-sm">
                Puntuación de Factibilidad
              </p>
              <p className="text-white/40 text-xs mt-2">
                Con mitigación de riesgos identificados
              </p>
            </div>

            {/* Risk level */}
            <div className="bg-yellow-500/10 border border-yellow-500/30 p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-yellow-400" />
                <span className="text-yellow-400 font-semibold uppercase text-sm tracking-wider">
                  Riesgo
                </span>
              </div>
              <p className="text-4xl font-display font-bold text-yellow-400 mb-2">
                MEDIO
              </p>
              <p className="text-white/60 text-sm">Nivel de Riesgo Global</p>
              <p className="text-white/40 text-xs mt-2">
                8 riesgos identificados, 3 críticos
              </p>
            </div>

            {/* ROI projection */}
            <div className="bg-accent/10 border border-accent/30 p-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-accent" />
                <span className="text-accent font-semibold uppercase text-sm tracking-wider">
                  ROI
                </span>
              </div>
              <p className="text-4xl font-display font-bold text-accent mb-2">
                340%
              </p>
              <p className="text-white/60 text-sm">
                Retorno Proyectado (10 años)
              </p>
              <p className="text-white/40 text-xs mt-2">
                Basado en protección de base tributaria
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
