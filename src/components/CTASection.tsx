"use client";

import { useState } from "react";
import {
  Send,
  CheckCircle,
  Loader2,
  Building,
  User,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

const projectTypes = [
  "Infraestructura Municipal",
  "Desarrollo Privado",
  "Proyecto Gubernamental",
  "BIM Compliance",
  "Digital Twin",
  "Otro",
];

export function CTASection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="relative py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-accent/10 border border-accent/30 p-12">
            <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Solicitud Recibida
            </h2>
            <p className="text-white/70 text-lg mb-6">
              Nuestro equipo revisará su solicitud y le contactará en las
              próximas 24 horas para discutir cómo Infrastructure Dominance
              Engine puede transformar sus proyectos.
            </p>
            <p className="text-accent font-mono">
              72 horas vs 4 meses. La diferencia comienza ahora.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - CTA text */}
          <div>
            <span className="text-accent text-sm uppercase tracking-widest font-medium">
              Próximo Paso
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Solicite una Demostración
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Vea el Infrastructure Dominance Engine en acción. Proporcionamos
              un análisis de puntos ciegos gratuito de uno de sus proyectos
              actuales.
            </p>

            {/* What you get */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    Análisis de Puntos Ciegos Gratis
                  </h4>
                  <p className="text-white/60 text-sm">
                    Identificamos lo que su proyecto actual no está viendo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    Demo de los 7 Motores
                  </h4>
                  <p className="text-white/60 text-sm">
                    Vea cómo cada motor procesa su proyecto específico.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    Propuesta Personalizada
                  </h4>
                  <p className="text-white/60 text-sm">
                    Plan de acción específico para su situación.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact info */}
            <div className="bg-primary-900/30 border border-white/10 p-6">
              <p className="text-white/40 text-sm uppercase tracking-wider mb-4">
                Contacto Directo
              </p>
              <p className="text-white font-semibold">MachineMind Consulting</p>
              <p className="text-white/60">Cartagena, Colombia</p>
              <p className="text-accent mt-2">info@machinemind.io</p>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-primary-900/30 border border-white/10 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-white/80 text-sm mb-2"
                >
                  Nombre Completo *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-primary-950 border border-white/20 text-white pl-10 pr-4 py-3 focus:outline-none focus:border-accent transition-colors"
                    placeholder="Juan García"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-white/80 text-sm mb-2"
                >
                  Empresa / Entidad *
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-primary-950 border border-white/20 text-white pl-10 pr-4 py-3 focus:outline-none focus:border-accent transition-colors"
                    placeholder="Constructora XYZ / Alcaldía de..."
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-white/80 text-sm mb-2"
                >
                  Correo Electrónico *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-primary-950 border border-white/20 text-white pl-10 pr-4 py-3 focus:outline-none focus:border-accent transition-colors"
                    placeholder="juan@empresa.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-white/80 text-sm mb-2"
                >
                  Teléfono / WhatsApp
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-primary-950 border border-white/20 text-white pl-10 pr-4 py-3 focus:outline-none focus:border-accent transition-colors"
                    placeholder="+57 300 123 4567"
                  />
                </div>
              </div>

              {/* Project Type */}
              <div>
                <label
                  htmlFor="projectType"
                  className="block text-white/80 text-sm mb-2"
                >
                  Tipo de Proyecto *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full bg-primary-950 border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                >
                  <option value="">Seleccione...</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-white/80 text-sm mb-2"
                >
                  Cuéntenos sobre su proyecto
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-white/40" />
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-primary-950 border border-white/20 text-white pl-10 pr-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Describa brevemente su proyecto o necesidad..."
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary bg-accent text-primary-950 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-accent-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Solicitar Demostración
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
