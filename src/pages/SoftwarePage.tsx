import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../theme/ThemeContext';
import { 
  CheckCircle2, Shield, Database, Cloud, 
  ChevronDown, MessageCircle, ArrowRight, X, Mail, Calendar, Code, Cpu, Terminal, Wrench, Smartphone
} from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/525591393363?text=Hola,%20quisiera%20agendar%20una%20consulta%20gratuita%20sobre%20desarrollo%20de%20software";

export const SoftwarePage: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'cocina';

  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
    { 
      id: 'web-mobile', 
      name: "Desarrollo Web & Mobile", 
      subtitle: "Soluciones a medida para digitalizar negocios", 
      price: "Desde $20,000", 
      time: "Variable", 
      popular: true, 
      icon: <Code className="w-5 h-5" />,
      bullets: [
        "Aplicaciones web progresivas (PWA)", 
        "Apps móviles iOS & Android", 
        "APIs escalables y Arquitectura cloud-native", 
        "Resultado: Digitalización completa y nuevas fuentes de ingresos"
      ], 
      tag: ["web", "mobile", "startup"] 
    },
    { 
      id: 'cloud', 
      name: "Soluciones en la Nube", 
      subtitle: "Migración y optimización de infraestructura", 
      price: "Desde $15,000", 
      time: "Variable", 
      icon: <Cloud className="w-5 h-5" />,
      bullets: [
        "Migración a AWS / Azure / GCP", 
        "Configuración de servidores y contenedores", 
        "CI/CD (automatización de despliegues)", 
        "Resultado: Menos costos + más escalabilidad"
      ], 
      tag: ["cloud", "devops"] 
    },
    { 
      id: 'sistemas', 
      name: "Sistemas Empresariales", 
      subtitle: "Software interno personalizado", 
      price: "Desde $15,000", 
      time: "Variable", 
      icon: <Database className="w-5 h-5" />,
      bullets: [
        "CRM personalizados y ERP ligeros", 
        "Sistemas de control de inventario", 
        "Automatización de procesos logísticos", 
        "Resultado: Ahorro de tiempo + reducción de errores operativos"
      ], 
      tag: ["sistemas", "automatizacion"] 
    },
    { 
      id: 'ia', 
      name: "IA & Automatización", 
      subtitle: "Soluciones de IA enfocadas en negocio", 
      price: "Desde $20,000", 
      time: "A medida", 
      icon: <Cpu className="w-5 h-5" />,
      bullets: [
        "Chatbots inteligentes (WhatsApp, web)", 
        "Análisis predictivo de datos", 
        "Sistemas de recomendación y NLP", 
        "Resultado: Atención 24/7 + decisiones basadas en datos"
      ], 
      tag: ["ia", "automatizacion"] 
    },
    { 
      id: 'consultoria', 
      name: "Consultoría & Estrategia", 
      subtitle: "Roadmap de desarrollo", 
      price: "1 - 3k / hora", 
      time: "Por hora", 
      icon: <Terminal className="w-5 h-5" />,
      bullets: [
        "Auditoría tecnológica exhaustiva", 
        "Estrategia digital y evaluación de arquitectura", 
        "Optimización de sistemas existentes", 
        "Resultado: Tomas decisiones correctas sin desperdiciar dinero"
      ], 
      tag: ["consultoria"] 
    },
    { 
      id: 'devops', 
      name: "DevOps & Mantenimiento", 
      subtitle: "Estabilidad y entregas rápidas", 
      price: "Desde $12,000", 
      time: "Recurrente o fijo", 
      icon: <Wrench className="w-5 h-5" />,
      bullets: [
        "Docker & Kubernetes", 
        "Integración continua y automatización de pipelines", 
        "Mantenimiento y soporte (Desde $2,000/mes)", 
        "Resultado: Continuidad operativa sin preocupaciones"
      ], 
      tag: ["devops", "cloud"] 
    },
  ];

  const scalePlans = [
    { 
      id: 'startup-pack', 
      name: "Startup Pack", 
      subtitle: "Validación rápida de ideas", 
      price: "$25,000 - $40,000", 
      time: "A medida", 
      bullets: ["Web/App MVP funcional", "Backend básico y API", "Instalación y Deploy en cloud"] 
    },
    { 
      id: 'business-pack', 
      name: "Business Automation Pack", 
      subtitle: "Empresas en crecimiento", 
      price: "$40,000 - $80,000", 
      time: "A medida", 
      bullets: ["Sistema interno + automatización de procesos", "Integraciones con servicios externos", "Dashboard administrativo y de reportes"] 
    },
    { 
      id: 'ai-transformation', 
      name: "AI Transformation Pack", 
      subtitle: "Escalar con Inteligencia Artificial", 
      price: "$80,000+", 
      time: "A medida", 
      bullets: ["Implementación de IA + automatización avanzada", "Integración completa en tu ecosistema", "Gobierno y analítica de datos en tiempo real"] 
    }
  ];

  const faqs = [
    { q: "¿En qué tecnologías desarrollan?", a: "Trabajamos con un stack moderno y eficiente: React, Angular o Vue para Front-End; Node.js, Python, Java o .NET para Back-End; Azure, AWS o GCP para Cloud; así como Flutter y React Native para Mobile. Además de soluciones con Machine Learning y automatización inteligente." },
    { q: "¿Qué incluye la Garantía de Ingeniería?", a: "Seguridad por diseño (OWASP, cifrado), documentación técnica completa (arquitectura, diccionario de datos) y transferencia de conocimiento mediante capacitación a tu equipo." },
    { q: "¿Qué pasa si mi proyecto es muy complejo?", a: "Realizamos una fase inicial de Consultoría y Arquitectura (Discovery) para planificar todo a detalle garantizando que el sistema escale correctamente." },
    { q: "¿Ofrecen soporte técnico post-despliegue?", a: "Sí, tenemos planes de mantenimiento que garantizan la operación y seguridad con SLAs definidos." }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className={`min-h-screen ${bgClass} font-sans`}>
      {/* 1. HERO */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl ${headingClass}`}>
          Desarrollo de Software & Soluciones en la Nube
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl opacity-80 leading-relaxed">
          Somos un equipo especializado enfocado en ayudar a empresas a <strong>automatizar procesos, reducir costos y escalar sus operaciones</strong> mediante software de última generación.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className={`px-8 py-4 rounded-full font-bold uppercase tracking-wide transition-all ${btnPrimary}`}>
            Agenda tu consulta técnica
          </a>
          <a href="#soluciones" className={`px-8 py-4 rounded-full font-bold uppercase tracking-wide transition-all ${btnSecondary}`}>
            Explorar Servicios
          </a>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className={`border-y ${borderClass} py-8`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-80 text-sm font-semibold uppercase tracking-wider text-center">
            <div className="flex items-center gap-2"><Cloud className="w-5 h-5" /> Azure, AWS, GCP</div>
            <div className="flex items-center gap-2"><Terminal className="w-5 h-5" /> Node.js, Python, .NET</div>
            <div className="flex items-center gap-2"><Code className="w-5 h-5" /> React, Angular, Vue</div>
            <div className="flex items-center gap-2"><Smartphone className="w-5 h-5" /> Flutter, React Native</div>
            <div className="flex items-center gap-2"><Cpu className="w-5 h-5" /> IA & NLP</div>
          </div>
        </div>
      </section>

      {/* 3. PROBLEM -> SOLUTION (Adaptado a Software) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className={`p-8 rounded-3xl border-2 border-dashed ${isDark ? 'border-red-500/30 bg-red-500/5' : 'border-red-500/30 bg-red-50'}`}>
            <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isDark ? 'text-red-400' : 'text-red-600'}`}>
              <X className="w-6 h-6" /> Sistemas obsoletos y desconectados
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3"><span className="opacity-50 mt-1">→</span> Procesos manuales que generan pérdida de tiempo y errores.</li>
              <li className="flex gap-3"><span className="opacity-50 mt-1">→</span> Costos de infraestructura elevados por mala optimización.</li>
              <li className="flex gap-3"><span className="opacity-50 mt-1">→</span> Datos encerrados en silos, impidiendo la toma de mejores decisiones.</li>
            </ul>
          </div>
          <div className={`p-8 rounded-3xl border-2 ${isDark ? 'border-green-500/30 bg-green-500/10' : 'border-green-500/30 bg-green-50'}`}>
            <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isDark ? 'text-green-400' : 'text-green-400'}`}>
              <CheckCircle2 className="w-6 h-6" /> Ingeniería de Software Moderna
            </h3>
            <ul className="space-y-4 font-medium">
              <li className="flex gap-3"><span className="text-green-500 mt-1">✓</span> Automatización total que libera a tu equipo de trabajo repetitivo.</li>
              <li className="flex gap-3"><span className="text-green-500 mt-1">✓</span> Arquitectura Cloud Native para escalar y reducir costos operativos.</li>
              <li className="flex gap-3"><span className="text-green-500 mt-1">✓</span> IA y analítica que transforman datos en verdaderas ventajas competitivas.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. SERVICIOS PRINCIPALES */}
      <section id="soluciones" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/5 dark:bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${headingClass}`}>Catálogo de Servicios</h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {[
                { label: "Apps Web & Mobile", val: "web" },
                { label: "Sistemas & Backend", val: "sistemas" },
                { label: "Infra Cloud", val: "cloud" },
                { label: "DevOps", val: "devops" },
                { label: "Inteligencia Artificial", val: "ia" },
                { label: "Consultoría", val: "consultoria" }
              ].map(f => (
                <button 
                  key={f.val}
                  onClick={() => setActiveFilter(activeFilter === f.val ? null : f.val)}
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
                      Solución Destacada
                    </div>
                  )}

                  <div className="mb-8 mt-2">
                    <div className={`mb-4 inline-flex items-center justify-center p-3 rounded-xl ${isDark ? 'bg-dark-accent1/20 text-dark-accent1' : 'bg-light-accent1/20 text-light-accent1'}`}>
                       {p.icon}
                    </div>
                    <h3 className={`text-2xl font-bold mb-1 ${headingClass}`}>{p.name}</h3>
                    <p className="text-sm opacity-70 mb-4 h-10">{p.subtitle}</p>
                    <div className={`text-3xl font-bold ${accentClass}`}>{p.price}</div>
                    <div className="text-xs opacity-60 mt-2 uppercase tracking-wider">MXN</div>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {p.bullets.map((b, i) => (
                      <li key={i} className={`flex gap-3 text-sm ${i === p.bullets.length - 1 ? 'font-semibold' : ''}`}>
                        <CheckCircle2 className={`w-5 h-5 shrink-0 ${isDark ? 'text-dark-accent2' : 'text-light-accent2'}`} />
                        <span className="opacity-90">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className={`w-full text-center py-3 rounded-full font-bold transition-all ${
                    p.popular ? btnPrimary : btnSecondary
                  }`}>
                    Cotizar servicio
                  </a>
                </div>
              );
            })}
          </div>

          <div className="mt-24">
            <h3 className={`text-3xl font-bold text-center mb-12 ${headingClass}`}>Paquetes Integrales - Modelos Productizados</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {scalePlans.map(p => (
                <div key={p.id} className={`p-8 rounded-3xl border ${borderClass} bg-gradient-to-br ${isDark ? 'from-dark-bgSecondary to-black/50' : 'from-white to-light-bgSecondary/20'} shadow-xl flex flex-col`}>
                  <div className="mb-6 flex-grow">
                    <h3 className={`text-xl font-bold mb-1 ${headingClass}`}>{p.name}</h3>
                    <p className="text-sm opacity-70 mb-4">{p.subtitle}</p>
                    <div className={`text-2xl font-bold ${isDark ? 'text-dark-accent2' : 'text-light-accent3'}`}>{p.price}</div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {p.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2 text-sm leading-tight">
                        <ArrowRight className="w-4 h-4 shrink-0 opacity-50 mt-0.5" />
                        <span className="opacity-90">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className={`w-full block text-center py-3 rounded-full font-bold uppercase text-sm ${btnSecondary}`}>
                    Agendar reunión
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className={`mt-16 max-w-4xl mx-auto p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 ${isDark ? 'bg-dark-accent1/10 border-dark-accent1/30' : 'bg-light-accent1/10 border-light-accent1/30'} border-2`}>
            <div>
              <h4 className={`text-xl font-bold mb-2 flex items-center gap-2 ${isDark ? 'text-dark-accent1' : 'text-light-accent1'}`}>
                <Shield className="w-6 h-6 inline-block" /> Nuestra Garantía de Ingeniería
              </h4>
              <ul className="text-sm opacity-80 space-y-2 mt-4 list-disc pl-5">
                <li><strong>Seguridad por Diseño:</strong> Todo desarrollo incluye protección contra vulnerabilidades (OWASP Top 10) y cifrado de datos.</li>
                <li><strong>Documentación Técnica:</strong> Entregamos manuales de arquitectura y diccionarios de datos para que tu sistema nunca sea una "caja negra".</li>
                <li><strong>Transferencia de Conocimiento:</strong> Capacitamos a tu equipo para que la adopción tecnológica sea del 100%.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 8. PREGUNTAS FRECUENTES */}
      <section className={`py-24 px-4 sm:px-6 lg:px-8 border-t ${borderClass}`}>
        <div className="max-w-3xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${headingClass}`}>Dudas frecuentes</h2>
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

      {/* 9. FINAL CTA */}
      <section className={`py-32 px-4 sm:px-6 lg:px-8 text-center ${isDark ? 'bg-dark-accent1 text-white' : 'bg-light-accent3 text-white'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-lg text-white">¿Todo listo para escalar tus operaciones?</h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 font-medium">Lleva tu arquitectura de software y procesos al siguiente nivel.</p>
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
          <p className="mt-8 text-sm opacity-80 font-semibold uppercase tracking-widest">Respuesta garantizada en 24h</p>
        </div>
      </section>

      {/* 10. FLOATING WHATSAPP CTA */}
      <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-green-500 text-white shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group">
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 bg-black text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
          ¡Chatea con un experto!
        </span>
      </a>
      
    </div>
  );
};
