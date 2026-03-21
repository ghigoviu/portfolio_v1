import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../theme/ThemeContext';
import { 
  CheckCircle2, Clock, Shield, Smartphone, CreditCard, 
  ChevronDown, MessageCircle, ArrowRight, X, Mail, Calendar
} from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/525591393363?text=Hola,%20quisiera%20agendar%20una%20consulta%20gratuita%20sobre%20marca%20digital";

export const BrandingPage: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'cocina';

  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [showTable, setShowTable] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showTerms, setShowTerms] = useState(false);

  // Styles based on theme
  const bgClass = isDark ? 'bg-dark-bg text-dark-text' : 'bg-light-bg text-light-text';
  const bgSecClass = isDark ? 'bg-dark-bgSecondary' : 'bg-white';
  const headingClass = isDark ? 'text-dark-heading' : 'text-light-heading';
  const accentClass = isDark ? 'text-dark-accent3' : 'text-light-accent3';
  const borderClass = isDark ? 'border-dark-accent3/20' : 'border-light-accent4/30';
  const btnPrimary = isDark 
    ? 'bg-dark-accent1 text-dark-bg hover:bg-dark-accent1/90 shadow-[0_4px_20px_rgba(217,4,41,0.4)]' 
    : 'bg-light-accent1 text-light-bg hover:bg-light-accent1/90 shadow-lg';
  const btnSecondary = isDark
    ? 'bg-transparent border-2 border-dark-accent2 text-dark-accent2 hover:bg-dark-accent2 hover:text-dark-bg'
    : 'bg-transparent border-2 border-light-accent3 text-light-accent3 hover:bg-light-accent3 hover:text-light-bg';

  const plans = [
    { id: 'starter', name: "Identidad Digital", subtitle: "VCard + Web", price: "$5,000", time: "5 a 10 días hábiles", bullets: ["Página web profesional (Landing Page)", "Tarjeta digital interactiva (vCard) - 5 piezas", "Integración con tus redes sociales", "Contacto guardado directo en el celular"], tag: ["experto", "basico", "google"] },
    { id: 'profesional', name: "Profesional", subtitle: "Captura de Clientes", price: "$7,000", time: "7 a 10 días hábiles", popular: true, bullets: ["Todo lo de Identidad Digital", "Correo profesional con tu dominio", "Formulario inteligente con alertas", "Integración básica con Email Marketing"], tag: ["lead", "experto"] },
    { id: 'negocio', name: "Negocio", subtitle: "Ventas Online 24/7", price: "$10,000", time: "10 a 15 días hábiles", bullets: ["Tienda online (e-commerce) completa", "Catálogo de hasta 30 productos", "Métodos de pago integrados", "Panel de administración autogestionable"], tag: ["ventas"] },
  ];

  const scalePlans = [
    { id: 'crecimiento', name: "Crecimiento", subtitle: "Sistema de Leads Automatizado", price: "Desde $14,000", time: "10 a 15 días hábiles", bullets: ["Hasta 3 landing pages de alta conversión", "Integración WhatsApp Business API", "CRM básico para prospectos", "Automatización de seguimiento (secuencias)"] },
    { id: 'autoridad', name: "Autoridad", subtitle: "Marca Personal + Contenido", price: "Desde $8,000", time: "Recurrente", bullets: ["Diseño de identidad visual premium", "Estrategia de contenidos base", "Páginas dedicadas por servicio", "Blog integrado para posicionamiento SEO"] }
  ];

  const faqs = [
    { q: "¿Puedo pagar en mensualidades?", a: "Sí, dependiendo del volumen del proyecto y el plan elegido, ofrecemos opciones de pago diferido a través de tarjeta de crédito (con pequeñas comisiones según tu banco)." },
    { q: "¿Qué pasa si no me gusta el diseño?", a: "Trabajamos en fases. Antes de programar algo, aprobamos la estructura o el prototipo visual. Tienes 2 rondas de cambios incluidas para asegurarnos de que estés 100% satisfecho." },
    { q: "¿Puedo empezar con un plan básico y después subir de nivel?", a: "Totalmente. Nuestras estructuras son escalables. Puedes empezar con el Plan Starter y más adelante pagar la diferencia para convertirlo en una Tienda Online o un embudo de ventas." },
    { q: "¿Necesito saber de tecnología para manejar mi sitio?", a: "No. Te entregamos un panel autoadministrable muy amigable. Además te damos una asesoría express al entregar para que sepas modificar textos, precios o imágenes." },
    { q: "¿Qué necesito para empezar?", a: "Solamente llenar un formulario de onboarding donde nos cuentas de tu negocio, enviarnos tus logotipos, imágenes y textos (podemos ayudarte con los textos si contratas el servicio de copywriting)." },
    { q: "¿Qué pasa después del primer año con el hosting y dominio?", a: "La renovación es anual. Te enviaremos un recordatorio 30 días antes con el costo de renovación estándar de tu plan (usualmente alrededor de $1,000 a $1,500 MXN para planes básicos y medios)." }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className={`min-h-screen ${bgClass} font-sans`}>
      {/* 1. HERO */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl ${headingClass}`}>
          Tu negocio merece más que solo "estar en internet"
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl opacity-80 leading-relaxed">
          Diseñamos soluciones digitales que generan clientes reales. No hacemos páginas bonitas: <strong>construimos herramientas de venta que trabajan por ti 24/7.</strong>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className={`px-8 py-4 rounded-full font-bold uppercase tracking-wide transition-all ${btnPrimary}`}>
            Agenda tu consulta gratuita
          </a>
          <a href="#planes" className={`px-8 py-4 rounded-full font-bold uppercase tracking-wide transition-all ${btnSecondary}`}>
            Ver planes y precios
          </a>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className={`border-y ${borderClass} py-8`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-80 text-sm font-semibold uppercase tracking-wider text-center">
            <div className="flex items-center gap-2"><Clock className="w-5 h-5" /> Entrega 3 a 15 días</div>
            <div className="flex items-center gap-2"><Shield className="w-5 h-5" /> Precios sin letra chiquita</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> Soporte real post-entrega</div>
            <div className="flex items-center gap-2"><Smartphone className="w-5 h-5" /> Optimizado para celular</div>
            <div className="flex items-center gap-2"><CreditCard className="w-5 h-5" /> Pago mixto / mensualidades</div>
          </div>
        </div>
      </section>

      {/* 3. PROBLEM -> SOLUTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className={`p-8 rounded-3xl border-2 border-dashed ${isDark ? 'border-red-500/30 bg-red-500/5' : 'border-red-500/30 bg-red-50'}`}>
            <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isDark ? 'text-red-400' : 'text-red-600'}`}>
              <X className="w-6 h-6" /> Sin presencia digital profesional
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3"><span className="opacity-50 mt-1">→</span> Tus clientes te buscan en Google y no te encuentran.</li>
              <li className="flex gap-3"><span className="opacity-50 mt-1">→</span> Dependes solo de redes sociales y boca en boca.</li>
              <li className="flex gap-3"><span className="opacity-50 mt-1">→</span> Pierdes prospectos porque no das seguimiento a tiempo.</li>
            </ul>
          </div>
          <div className={`p-8 rounded-3xl border-2 ${isDark ? 'border-green-500/30 bg-green-500/10' : 'border-green-500/30 bg-green-50'}`}>
            <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isDark ? 'text-green-400' : 'text-green-400'}`}>
              <CheckCircle2 className="w-6 h-6" /> Con nosotros
            </h3>
            <ul className="space-y-4 font-medium">
              <li className="flex gap-3"><span className="text-green-500 mt-1">✓</span> Apareces en búsquedas y proyectas confianza inmediata.</li>
              <li className="flex gap-3"><span className="text-green-500 mt-1">✓</span> Tienes un sistema que captura clientes por ti automáticamente.</li>
              <li className="flex gap-3"><span className="text-green-500 mt-1">✓</span> Automatizas el seguimiento y te dedicas solo a cerrar ventas.</li>
            </ul>
          </div>
        </div>
        <blockquote className={`text-center text-xl md:text-2xl font-light italic max-w-4xl mx-auto p-8 rounded-2xl ${bgSecClass} shadow-lg`}>
          "El 75% de los consumidores juzgan la credibilidad de un negocio basándose en el diseño de su sitio web."
          <footer className={`text-sm mt-4 font-bold not-italic ${accentClass}`}>— Stanford Web Credibility Research</footer>
        </blockquote>
      </section>

      {/* 4. PLANES */}
      <section id="planes" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/5 dark:bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${headingClass}`}>¿Qué necesita tu negocio hoy?</h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {[
                { label: "Quiero que me encuentren en Google", val: "google" },
                { label: "Necesito vender productos online", val: "ventas" },
                { label: "Quiero captar más clientes en automático", val: "lead" },
                { label: "Posicionarme como experto", val: "experto" },
                { label: "No sé qué necesito", val: "help" }
              ].map(f => (
                <button 
                  key={f.val}
                  onClick={() => f.val === 'help' ? window.open(WHATSAPP_LINK, '_blank') : setActiveFilter(activeFilter === f.val ? null : f.val)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
                    activeFilter === f.val 
                      ? (isDark ? 'bg-dark-accent3 text-black border-dark-accent3' : 'bg-light-accent3 text-white border-light-accent3')
                      : (isDark ? 'border-dark-text/20 hover:border-dark-accent3' : 'border-light-text/20 hover:border-light-accent3')
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {plans.map(p => {
              const isActive = activeFilter && p.tag?.includes(activeFilter);
              return (
                <div key={p.id} className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 ${bgSecClass} ${
                  isActive ? `ring-2 ring-offset-4 ${isDark ? 'ring-dark-accent3 ring-offset-dark-bg' : 'ring-light-accent3 ring-offset-light-bg'} scale-105 shadow-2xl z-10` : 'shadow-lg hover:shadow-xl hover:-translate-y-1'
                } ${p.popular ? (isDark ? 'border-2 border-dark-accent1' : 'border-2 border-light-accent1') : `border ${borderClass}`}`}>
                  
                  {p.popular && (
                    <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${isDark ? 'bg-dark-accent1 text-white' : 'bg-light-accent1 text-white'}`}>
                      Más popular
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className={`text-2xl font-bold mb-1 ${headingClass}`}>{p.name}</h3>
                    <p className="text-sm opacity-70 mb-4">{p.subtitle}</p>
                    <div className={`text-4xl font-bold ${accentClass}`}>{p.price}</div>
                    <div className="text-xs opacity-60 mt-2 uppercase tracking-wider">Pago único ( + Renovación anual)</div>
                  </div>

                  <div className={`flex items-center gap-2 text-sm font-semibold mb-6 pb-6 border-b ${borderClass}`}>
                    <Clock className="w-4 h-4" /> {p.time}
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {p.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3 text-sm">
                        <CheckCircle2 className={`w-5 h-5 shrink-0 ${isDark ? 'text-dark-accent2' : 'text-light-accent2'}`} />
                        <span className="opacity-90">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className={`w-full text-center py-3 rounded-full font-bold transition-all ${
                    p.popular ? btnPrimary : btnSecondary
                  }`}>
                    Quiero este plan
                  </a>
                </div>
              );
            })}
          </div>

          <div className="mt-24">
            <h3 className={`text-3xl font-bold text-center mb-12 ${headingClass}`}>¿Ya tienes presencia online? Escala con estos planes.</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {scalePlans.map(p => (
                <div key={p.id} className={`p-8 rounded-3xl border ${borderClass} bg-gradient-to-br ${isDark ? 'from-dark-bgSecondary to-black/50' : 'from-white to-light-bgSecondary/20'} shadow-xl`}>
                  <div className="mb-6">
                    <h3 className={`text-2xl font-bold mb-1 ${headingClass}`}>{p.name}</h3>
                    <p className="text-sm opacity-70 mb-4">{p.subtitle}</p>
                    <div className={`text-3xl font-bold ${isDark ? 'text-dark-accent2' : 'text-light-accent3'}`}>{p.price}</div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {p.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2 text-sm">
                        <ArrowRight className="w-4 h-4 shrink-0 opacity-50 mt-0.5" />
                        <span className="opacity-90">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className={`w-full block text-center py-3 rounded-full font-bold uppercase text-sm ${btnSecondary}`}>
                    Consultar disponibilidad
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className={`mt-16 max-w-4xl mx-auto p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 ${isDark ? 'bg-dark-accent1/10 border-dark-accent1/30' : 'bg-light-accent1/10 border-light-accent1/30'} border-2`}>
            <div>
              <h4 className={`text-xl font-bold mb-2 flex items-center gap-2 ${isDark ? 'text-dark-accent1' : 'text-light-accent1'}`}>
                <Shield className="w-6 h-6" /> Protege tu inversión digital
              </h4>
              <p className="font-medium mb-1">Plan Mantenimiento Premium desde $500/mes.</p>
              <p className="text-sm opacity-70">Un sitio hackeado puede costarte más de $15,000 MXN en reparación. El mantenimiento es tu seguro.</p>
            </div>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="shrink-0 font-bold underline whitespace-nowrap">
              Agregar mantenimiento
            </a>
          </div>

        </div>
      </section>

      {/* 5. TABLA COMPARATIVA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center">
          <button onClick={() => setShowTable(!showTable)} className={`inline-flex items-center gap-2 font-bold uppercase tracking-wider ${accentClass} hover:opacity-80 transition-opacity`}>
            {showTable ? "Ocultar comparativa de planes" : "Comparar todos los planes"} <ChevronDown className={`transition-transform duration-300 ${showTable ? 'rotate-180' : ''}`} />
          </button>
        </div>
        <AnimatePresence>
          {showTable && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }} 
              animate={{ height: 'auto', opacity: 1 }} 
              exit={{ height: 0, opacity: 0 }}
              className="mt-8 overflow-hidden"
            >
              <div className="overflow-x-auto pb-4">
                <table className={`w-full text-left border-collapse min-w-[800px] ${bgSecClass} rounded-2xl shadow-lg ring-1 ${borderClass}`}>
                  <thead className={`border-b-2 ${borderClass}`}>
                    <tr>
                      <th className="p-4 font-bold w-1/4">Característica</th>
                      <th className="p-4 font-bold text-center">Starter</th>
                      <th className="p-4 font-bold text-center">Identidad</th>
                      <th className="p-4 font-bold text-center text-light-accent1 dark:text-dark-accent1">Profesional</th>
                      <th className="p-4 font-bold text-center">Negocio</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                    {[
                      { f: "Sitio Web (Landing Page)", v: [true, true, true, true] },
                      { f: "Botón a WhatsApp flotante", v: [true, true, true, true] },
                      { f: "Secciones Integradas", v: ["Hasta 4", "Hasta 4", "Hasta 6", "Múltiples"] },
                      { f: "Tarjeta de presentación digital (vCard)", v: [false, true, true, true] },
                      { f: "Formulario de contacto inteligente", v: ["Básico", "Básico", true, true] },
                      { f: "Dominio propio (.com) primer año", v: [true, true, true, true] },
                      { f: "Cuentas de Correo Profesional", v: [false, false, "Hasta 3", "Hasta 5"] },
                      { f: "Integración con Email Marketing", v: [false, false, true, true] },
                      { f: "Catálogo / Tienda Online", v: [false, false, false, "Hasta 30 prod."] },
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                        <td className="p-4 font-medium text-sm">{row.f}</td>
                        {row.v.map((val, vi) => (
                          <td key={vi} className="p-4 text-center">
                            {val === true ? <CheckCircle2 className="w-5 h-5 mx-auto text-green-500" /> : val === false ? <X className="w-5 h-5 mx-auto opacity-20" /> : <span className="text-sm font-semibold">{val}</span>}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-center mt-4 opacity-60">* Todos los precios expuestos están en MXN. IVA no incluido. Renovación anual aplica para hosting y dominio.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* 6. COMO TRABAJAMOS */}
      <section className={`py-24 px-4 sm:px-6 lg:px-8 border-t ${borderClass}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-16 ${headingClass}`}>El proceso sin complicaciones</h2>
          
          <div className="relative border-l-2 md:border-l-0 md:border-t-2 border-dark-text/20 dark:border-white/20 ml-4 md:ml-0 md:pt-10 flex flex-col md:flex-row justify-between gap-12 md:gap-4">
            {[
              { t: "Consulta gratuita", d: "Videollamada 15m o chat." },
              { t: "Propuesta", d: "Acuerdo y 50% de anticipo." },
              { t: "Información", d: "Envíanos logos, fotos y textos." },
              { t: "Desarrollo", d: "Diseño y construcción visible." },
              { t: "Revisión", d: "2 rondas de ajustes incluidas." },
              { t: "Lanzamiento", d: "Liquidas 50%, publicamos online." },
              { t: "Soporte", d: "15 días para cualquier detalle." },
            ].map((step, i) => (
              <div key={i} className="relative md:flex-1 md:text-center pl-8 md:pl-0">
                <div className={`absolute -left-6 md:left-1/2 md:-top-16 md:-translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-lg ${isDark ? 'bg-dark-accent3 text-black' : 'bg-light-accent3'}`}>
                  {i + 1}
                </div>
                <h4 className="font-bold mb-1 leading-tight">{step.t}</h4>
                <p className="text-xs opacity-70">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PREGUNTAS FRECUENTES */}
      <section className={`py-24 px-4 sm:px-6 lg:px-8 bg-black/5 dark:bg-black/20`}>
        <div className="max-w-3xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${headingClass}`}>Dudas antes de arrancar</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`rounded-2xl overflow-hidden transition-colors ${bgSecClass} shadow-md`}>
                <button 
                  className="w-full px-6 py-5 text-left font-bold flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(idx)}
                >
                  <span className="pr-8">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: 'auto', opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div className="px-6 pb-5 text-sm leading-relaxed opacity-80 border-t border-black/5 dark:border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TERMINOS */}
      <section className="py-12 px-4 text-center">
        <button onClick={() => setShowTerms(!showTerms)} className="text-xs font-semibold uppercase tracking-wider opacity-60 hover:opacity-100 transition-opacity underline">
          Ver términos y condiciones comerciales
        </button>
        <AnimatePresence>
          {showTerms && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }} 
              animate={{ height: 'auto', opacity: 1 }} 
              exit={{ height: 0, opacity: 0 }}
              className="max-w-3xl mx-auto mt-6 text-left text-xs opacity-70 p-6 rounded-xl bg-black/5 dark:bg-white/5 leading-relaxed overflow-hidden"
            >
              <p className="mb-2"><strong>Forma de pago:</strong> 50% al confirmar, 50% al entregar. Transferencia, depósito o tarjeta.</p>
              <p className="mb-2"><strong>Rondas de revisión:</strong> 2 incluidas en todos los planes. Revisiones adicionales: $500 MXN cada una.</p>
              <p className="mb-2"><strong>Contenido:</strong> El cliente proporciona textos, logos y fotografías. Sesión de fotografías de marca (costo adicional desde $1,000 MXN).</p>
              <p className="mb-2"><strong>Cancelación:</strong> Si cancelas antes de la primera revisión, reembolso del 50%. Después de primera revisión, el anticipo cubre el trabajo.</p>
              <p><strong>Tiempos de entrega:</strong> Los tiempos inician tras recibir los requisitos e información por parte del cliente.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* 9. FINAL CTA */}
      <section className={`py-32 px-4 sm:px-6 lg:px-8 text-center ${isDark ? 'bg-dark-accent1 text-white' : 'bg-light-accent3 text-white'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-lg text-white">¿Tu negocio está listo para dejar de perder clientes?</h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 font-medium">Agenda tu consulta gratuita de 15 minutos. Sin compromiso, sin presión.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-10 py-5 bg-white text-black rounded-full font-bold uppercase tracking-wider shadow-2xl hover:scale-105 transition-transform">
              <MessageCircle className="w-5 h-5 text-green-500" /> Mandar WhatsApp
            </a>
            <a href="mailto:rcambray.dev@gmail.com" className="flex items-center gap-2 px-10 py-5 bg-black/20 text-white rounded-full font-bold uppercase tracking-wider hover:bg-black/30 transition-colors border-2 border-white/20">
              <Mail className="w-5 h-5" /> Enviar Email
            </a>
            <a href="https://calendly.com/rcambray-dev/30min" className="flex items-center gap-2 px-10 py-5 bg-black/20 text-white rounded-full font-bold uppercase tracking-wider hover:bg-black/30 transition-colors border-2 border-white/20">
              <Calendar className="w-5 h-5" /> Agendar consulta
            </a>
          </div>
          <p className="mt-8 text-sm opacity-80 font-semibold uppercase tracking-widest">Respuesta en menos de 24 horas</p>
        </div>
      </section>

      {/* 10. FLOATING WHATSAPP CTA */}
      <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-green-500 text-white shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group">
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 bg-black text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
          ¡Pregunta por Whatsapp!
        </span>
      </a>
      
    </div>
  );
};
