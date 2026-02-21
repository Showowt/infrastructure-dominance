"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Zap, Clock, TrendingUp } from "lucide-react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-infrastructure-blueprint/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />

        {/* Data streams */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="data-stream"
            style={{
              left: `${20 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 bg-accent/10 border border-accent/30 px-4 py-2 mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Zap className="w-4 h-4 text-accent" />
          <span className="text-accent text-sm uppercase tracking-widest font-medium">
            Inteligencia Artificial para Infraestructura
          </span>
        </div>

        {/* Main headline */}
        <h1
          className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-white">Infrastructure</span>
          <br />
          <span className="gradient-text">Dominance Engine</span>
        </h1>

        {/* Subheadline */}
        <p
          className={`text-xl sm:text-2xl md:text-3xl text-white/90 font-light max-w-4xl mx-auto mb-8 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          El Sistema de Inteligencia que Comprime
          <br className="hidden sm:block" />
          <span className="text-accent font-semibold">
            {" "}
            Estudios de 4 Meses{" "}
          </span>
          en
          <span className="text-accent font-semibold"> 72 Horas</span>
        </p>

        {/* The tagline */}
        <div
          className={`bg-primary-900/50 border border-accent/20 p-6 md:p-8 max-w-4xl mx-auto mb-12 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-lg md:text-xl text-white/80 font-mono">
            <span className="text-accent">ELLOS</span> toman 4 meses para
            estudiar.
            <br />
            <span className="text-accent">NOSOTROS</span> entregamos en 72
            horas.
            <br />
            <span className="text-white font-semibold">
              Después construimos mientras ellos siguen leyendo reportes.
            </span>
          </p>
        </div>

        {/* Key metrics */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="bg-primary-900/30 border border-white/10 p-6">
            <Clock className="w-8 h-8 text-accent mx-auto mb-3" />
            <p className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
              72h
            </p>
            <p className="text-white/60 text-sm uppercase tracking-wider">
              vs 4 Meses
            </p>
          </div>
          <div className="bg-primary-900/30 border border-white/10 p-6">
            <TrendingUp className="w-8 h-8 text-accent mx-auto mb-3" />
            <p className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
              $24.9B
            </p>
            <p className="text-white/60 text-sm uppercase tracking-wider">
              USD en Juego
            </p>
          </div>
          <div className="bg-primary-900/30 border border-white/10 p-6">
            <Zap className="w-8 h-8 text-accent mx-auto mb-3" />
            <p className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
              7
            </p>
            <p className="text-white/60 text-sm uppercase tracking-wider">
              Motores AI
            </p>
          </div>
        </div>

        {/* CTA buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="#contact"
            className="btn-primary bg-accent text-primary-950 px-8 py-4 text-lg font-semibold uppercase tracking-wider hover:bg-accent-light transition-all inline-flex items-center justify-center gap-2"
          >
            Solicitar Demostración
          </a>
          <a
            href="#engines"
            className="border border-white/30 text-white px-8 py-4 text-lg font-medium uppercase tracking-wider hover:bg-white/5 hover:border-accent transition-all inline-flex items-center justify-center gap-2"
          >
            Ver Los 7 Motores
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <a
            href="#problem"
            className="flex flex-col items-center text-white/40 hover:text-accent transition-colors"
          >
            <span className="text-xs uppercase tracking-widest mb-2">
              Explorar
            </span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
