"use client";

import { Clock, MapPin, DollarSign, Calendar, CheckCircle } from "lucide-react";

export function CaseStudyHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-infrastructure-blueprint/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 px-4 py-2">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm uppercase tracking-widest font-medium">
              Análisis Completado en 72 Horas
            </span>
          </div>
        </div>

        {/* Title */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6">
          <span className="text-white">Proyecto</span>
          <br />
          <span className="gradient-text">&ldquo;4 en 1&rdquo;</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/80 text-center max-w-3xl mx-auto mb-8">
          Bocagrande & Castillogrande — Análisis de Factibilidad AI
        </p>

        {/* Key metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          <div className="bg-primary-900/50 border border-white/10 p-4 text-center">
            <DollarSign className="w-6 h-6 text-accent mx-auto mb-2" />
            <p className="text-2xl font-display font-bold text-white">$168B</p>
            <p className="text-white/60 text-xs uppercase tracking-wider">
              COP Inversión
            </p>
          </div>
          <div className="bg-primary-900/50 border border-white/10 p-4 text-center">
            <MapPin className="w-6 h-6 text-accent mx-auto mb-2" />
            <p className="text-2xl font-display font-bold text-white">2.5 km</p>
            <p className="text-white/60 text-xs uppercase tracking-wider">
              Av. Chile
            </p>
          </div>
          <div className="bg-primary-900/50 border border-white/10 p-4 text-center">
            <Calendar className="w-6 h-6 text-accent mx-auto mb-2" />
            <p className="text-2xl font-display font-bold text-white">Feb 27</p>
            <p className="text-white/60 text-xs uppercase tracking-wider">
              Inicio Estudios
            </p>
          </div>
          <div className="bg-primary-900/50 border border-white/10 p-4 text-center">
            <Clock className="w-6 h-6 text-green-400 mx-auto mb-2" />
            <p className="text-2xl font-display font-bold text-green-400">
              72h
            </p>
            <p className="text-white/60 text-xs uppercase tracking-wider">
              Nuestro Análisis
            </p>
          </div>
        </div>

        {/* The comparison */}
        <div className="bg-primary-900/30 border border-accent/20 p-6 md:p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <p className="text-white/60 text-sm uppercase tracking-wider mb-2">
                Estudio Tradicional
              </p>
              <p className="text-3xl font-display font-bold text-red-400">
                4 Meses
              </p>
              <p className="text-white/40 text-sm mt-1">Inicia Feb 27, 2026</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-white/60 text-sm uppercase tracking-wider mb-2">
                Infrastructure Dominance Engine
              </p>
              <p className="text-3xl font-display font-bold text-green-400">
                72 Horas
              </p>
              <p className="text-white/40 text-sm mt-1">
                Este análisis está listo AHORA
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="text-center mt-12">
          <p className="text-white/40 text-sm uppercase tracking-widest mb-2">
            Análisis Completo Abajo
          </p>
          <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent mx-auto" />
        </div>
      </div>
    </section>
  );
}
