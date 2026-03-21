import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useTheme } from '../../theme/ThemeContext';
import { MessageCircle } from 'lucide-react';
import { LordIcon } from '../common/LordIcon';
import { Link } from 'react-router-dom';

export const Services: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === 'cocina';
  const isEs = i18n.language === 'es';

  const servicesMap = [
    {
      title: isEs ? 'Desarrollo de marca empresarial' : 'Business Branding',
      desc: isEs 
        ? 'Desarrollo de marca empresarial en línea, creación de identidad visual, diseño de logotipos, tarjetas de presentación y papelería corporativa.' 
        : 'Online business branding development, visual identity creation, logo design, business cards, and corporate stationery.',
      iconLight: 'https://cdn.lordicon.com/system-regular-4-camera.json',
      iconDark: 'https://cdn.lordicon.com/system-regular-4-camera.json',
      link: 'branding'
    },
    {
      title: isEs ? 'Ingeniería de Software' : 'Software Engineering',
      desc: isEs 
        ? 'Desarrollo Full-Stack orientado fuertemente al backend, control de arquitecturas cloud, bases de datos complejas e integraciones eficientes de APIs.' 
        : 'Backend-focused Full-Stack development, managing cloud architectures, complex databases, and efficient API integrations.',
      iconLight: 'https://cdn.lordicon.com/system-regular-39-code.json',
      iconDark: 'https://cdn.lordicon.com/system-regular-39-code.json',
      link: 'software'
    },
    {
      title: isEs ? 'Ciberseguridad' : 'Cybersecurity',
      desc: isEs 
        ? 'Hardening de servidores, cumplimiento normativo ISO 27001, gobernanza de datos y monitoreo proactivo para detectar y prevenir vulnerabilidades antes de que sean explotadas.' 
        : 'Server hardening, ISO 27001 compliance, data governance, and proactive monitoring to detect and prevent vulnerabilities before they are exploited.',
      iconLight: 'https://cdn.lordicon.com/system-regular-12-shield.json',
      iconDark: 'https://cdn.lordicon.com/system-regular-12-shield.json',
      link: 'cybersecurity'
    },
    {
      title: isEs ? 'Gestión de Proyectos de TI' : 'IT Project Management',
      desc: isEs 
        ? 'Liderazgo ágil, análisis de requerimientos para traducción entre áreas técnicas y de negocio, asegurando entregas efectivas y de alta calidad dentro del tiempo esperado.' 
        : 'Agile leadership, requirements analysis for bridging technical and business areas, ensuring effective, high-quality deliveries within the expected timeline.',
      iconLight: 'https://cdn.lordicon.com/system-regular-11-clock.json',
      iconDark: 'https://cdn.lordicon.com/system-regular-11-clock.json',
      link: 'management'
    }
  ];

  return (
    <section id="services" className={`py-24 px-4 sm:px-6 lg:px-8 border-t ${isDark ? 'border-dark-accent3/20' : 'border-light-accent4/20'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-bold mb-4 text-light-heading dark:text-dark-heading">
            {t('nav.services')}
          </h2>
          <p className={`max-w-2xl mx-auto mt-4 ${isDark ? 'text-dark-text/70 font-inter' : 'text-light-text font-montserrat'}`}>
            {isDark 
              ? "Servicios ejecutados con rigor técnico, donde cada byte cuenta y cada vulnerabilidad es mitigada." 
              : "Soluciones digitales integrales que combinan robustez técnica con una excelente planeación estratégica."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {servicesMap.map((service, idx) => (
          <Link to={service.link} key={idx} className="block no-underline" onClick={() => window.scrollTo(0, 0)}>
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-8 rounded-3xl transition-all duration-300 relative group overflow-hidden ${
                isDark 
                  ? 'bg-dark-bgSecondary/50 border border-dark-accent3/20 hover:border-dark-accent1 hover:bg-black/50 hover:shadow-[0_0_20px_rgba(217,4,41,0.2)]' 
                  : 'bg-white border border-light-accent4/10 hover:border-light-accent3/30 shadow-lg hover:shadow-xl'
              }`}
            >
              {isDark && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-dark-accent1 mix-blend-screen filter blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              )}
              
              <div className="mb-6 h-16 flex items-center justify-start text-light-accent3 dark:text-dark-accent1">
                {/* <LordIcon icon={{ light: service.iconLight, dark: service.iconDark }} size={64} trigger="hover" /> */}
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-light-accent3/10 dark:bg-dark-accent1/10">
                   <LordIcon 
                      icon={{
                         light: 'https://cdn.lordicon.com/wzwygmng.json',
                         dark: 'https://cdn.lordicon.com/wzwygmng.json'
                      }} 
                      size={48} 
                      trigger="hover" 
                    />
                </div>
              </div>
              
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-dark-text' : 'text-light-heading'}`}>
                {service.title}
              </h3>
              
              <p className={`leading-relaxed ${isDark ? 'text-dark-text/70' : 'text-light-text/90'}`}>
                {service.desc}
              </p>
            </motion.div>
          </Link>
          ))} 
        </div>

        {/* CTA WhatsApp */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`max-w-4xl mx-auto rounded-3xl p-10 overflow-hidden relative flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8 shadow-2xl ${
              isDark 
                ? 'bg-gradient-to-r from-dark-bgSecondary via-black to-dark-bgSecondary border border-dark-accent3/30' 
                : 'bg-gradient-to-r from-light-accent4/30 via-light-accent4/10 to-light-accent4/30 border border-light-accent4/50'
            }`}
        >
            <div className={`absolute inset-0 opacity-30 ${isDark ? 'bg-[url("https://www.transparenttextures.com/patterns/dark-matter.png")]' : ''}`} />
            
            <div className="relative z-10 max-w-xl">
              <h3 className={`text-3xl font-bold mb-4 ${isDark ? 'text-dark-heading drop-shadow-[0_0_10px_rgba(230,57,70,0.8)]' : 'text-light-heading'}`}>
                {isEs ? '¿Listo para iniciar tu próximo proyecto?' : 'Ready to start your next project?'}
              </h3>
              <p className={`text-lg ${isDark ? 'text-dark-text/90 font-inter' : 'text-light-text'}`}>
                {isEs 
                  ? 'Escríbeme directamente para discutir cómo mi perfil técnico puede solucionar tus necesidades.' 
                  : 'Write me directly to discuss how my technical profile can securely solve your needs.'}
              </p>
            </div>
            
            <div className="relative z-10 shrink-0">
               <a 
                  href="https://wa.me/525591393363" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-md ${
                    isDark 
                      ? 'bg-[#25D366] text-black hover:bg-[#128C7E] hover:shadow-[0_0_20px_rgba(37,211,102,0.6)]' 
                      : 'bg-[#25D366] text-white hover:bg-[#128C7E] hover:shadow-lg hover:scale-105'
                }`}>
                  <MessageCircle className="w-5 h-5" />
                  <span>{isEs ? 'Contactar por WhatsApp' : 'Message on WhatsApp'}</span>
                </a>
            </div>
        </motion.div>
      </div>
    </section>
  );
};
