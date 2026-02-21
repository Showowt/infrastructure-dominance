"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#problem", label: "El Problema", labelEn: "The Problem" },
  { href: "#engines", label: "Los Motores", labelEn: "The Engines" },
  { href: "#case-study", label: "Caso de Estudio", labelEn: "Case Study" },
  { href: "#pricing", label: "Inversión", labelEn: "Investment" },
  { href: "#contact", label: "Contacto", labelEn: "Contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary-950/95 backdrop-blur-sm border-b border-accent/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent flex items-center justify-center">
              <span className="font-display font-bold text-primary-950 text-xl">
                M
              </span>
            </div>
            <div className="hidden sm:block">
              <p className="font-display font-semibold text-white text-lg leading-tight">
                MachineMind
              </p>
              <p className="text-accent text-xs uppercase tracking-widest">
                Infrastructure
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/80 hover:text-accent transition-colors duration-200 uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary bg-accent text-primary-950 px-6 py-2.5 text-sm font-semibold uppercase tracking-wider hover:bg-accent-light transition-colors"
            >
              Solicitar Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-primary-950/98 border-t border-accent/20">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white/80 hover:text-accent transition-colors py-2 uppercase tracking-wider"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block bg-accent text-primary-950 px-6 py-3 text-center font-semibold uppercase tracking-wider mt-4"
              >
                Solicitar Demo
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
