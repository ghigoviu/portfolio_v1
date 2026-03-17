import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useTheme } from '../../theme/ThemeContext';

const experiences = [
  {
    year: 'May 2025 - Present', // As listed in the CV 
    role: 'Consultor de ciberseguridad / Security Consulting',
    company: 'Ramdia',
    description: 'Diseño y desarrollo de herramientas de software para respaldar servidores, ciclo de vida de aplicaciones, monitoreo de sistemas y análisis de seguridad empresarial. Implementación de marcos de gobernanza de datos (Dataedo/Informix) y controles ISO 27001.'
  },
  {
    year: 'Oct 2024 - Aug 2025',
    role: 'Desarrollador de E-commerce / E-commerce Developer',
    company: 'Plexo',
    description: 'Diseño e implementación de una plataforma escalable integrando FastAPI para backend. APIs RESTful para filtrado, carritos de compra, gestión de pedidos e inventario en tiempo real con WebSockets.'
  },
  {
    year: 'Jan 2024 - Apr 2025',
    role: 'Software Developer',
    company: 'Ceneval',
    description: 'Desarrollo y mantenimiento de APIs RESTful en Python. Pruebas unitarias/integración, gestión del ciclo de desarrollo y solución de problemas a nivel de código de forma eficaz.'
  },
  {
    year: 'May 2023 - June 2024',
    role: 'Maestro de programación e Inglés',
    company: 'Cetec',
    description: 'Enseñar cursos de inglés y programación a estudiantes, desarrollando planes de clase adaptados, y métodos interactivos para mejorar la experiencia de aprendizaje.'
  },
  {
    year: 'Jan 2022 - Jan 2024',
    role: 'Coordinador de proyectos / Project Manager',
    company: 'Capufe',
    description: 'Desarrollo de sistema para visualizar datos de seguros relacionados con daños en carreteras y agilización de flujos de trabajo en colaboración táctica con equipos multifuncionales.'
  },
  {
    year: 'Aug 2022 - Dec 2022',
    role: 'Desarrollador de landing page',
    company: 'Comeii',
    description: 'Diseño web responsivo para evento académico, garantizando recopilación de requisitos y mejora de la experiencia de usuario.'
  }
];

export const Experience: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === 'cocina';

  return (
    <section id="experience" className={`py-24 px-4 sm:px-6 lg:px-8 border-t ${isDark ? 'border-dark-accent3/20' : 'border-light-accent4/20'}`}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-light-heading dark:text-dark-heading">
          {t('nav.experience')}
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative pl-8 md:pl-0`}
            >
              {/* Timeline Line & Dot */}
              <div className={`absolute left-0 md:left-1/2 w-px h-full -ml-px md:-ml-0.5 top-0 ${isDark ? 'bg-dark-accent3/50' : 'bg-light-accent3/30'}`} />
              <div className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full -ml-2 top-2 border-4 ${
                isDark 
                  ? 'bg-dark-bg border-dark-accent3 shadow-[0_0_10px_rgba(0,229,255,1)]' 
                  : 'bg-light-bg border-light-accent3 shadow-md'
              }`} />

              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:mr-auto' : 'md:pl-12 md:ml-auto'}`}>
                <div className={`p-6 rounded-2xl transition-all duration-300 ${
                  isDark 
                    ? 'hover:bg-dark-bgSecondary/80 border border-transparent hover:border-dark-accent1/30' 
                    : 'hover:bg-white hover:shadow-xl border border-transparent hover:border-light-accent4/30'
                }`}>
                  <span className={`text-sm font-bold tracking-wider uppercase mb-2 block ${isDark ? 'text-dark-accent2' : 'text-light-accent1'}`}>
                    {exp.year}
                  </span>
                  <h3 className={`text-xl font-bold mb-1 ${isDark ? 'text-dark-text' : 'text-light-heading'}`}>
                    {exp.role}
                  </h3>
                  <h4 className={`text-md mb-4 font-medium ${isDark ? 'text-dark-text/70' : 'text-light-text/80'}`}>
                    {exp.company}
                  </h4>
                  <p className={`text-base leading-relaxed ${isDark ? 'text-dark-text/80' : 'text-light-text'}`}>
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
