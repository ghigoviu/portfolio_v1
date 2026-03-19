import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useTheme } from '../../theme/ThemeContext';

const talks = [
  {
    title: 'Seguridad en la era de la IA',
    event: 'Google Developers Group',
    date: 'Dic. 2025',
    description: 'Una charla técnica que explora el cambiante panorama de la ciberseguridad moldeado por los sistemas de IA que avanzan rápidamente. La sesión examinó las superficies de ataque emergentes introducidas por las herramientas impulsadas por IA, los riesgos de la automatización a escala y los cambios estratégicos que las organizaciones deben adoptar para proteger los datos, la infraestructura y los procesos de toma de decisiones en un entorno digital cada vez más autónomo.'
  },
  {
    title: 'Developing and Deploying Your Own Website',
    event: 'Startup Weekend',
    date: 'Abril. 2023',
    description: 'Una charla práctica que demuestra cómo diseñar, desarrollar e implementar un sitio web empresarial completamente funcional en menos de 24 horas. La sesión se centró en la priorización, la arquitectura mínima viable, la configuración del alojamiento, el control de versiones y las estrategias de implementación para pasar del concepto al producto en vivo de manera eficiente.'
  }
];

export const Talks: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === 'cocina';

  return (
    <section id="talks" className={`py-24 px-4 sm:px-6 lg:px-8 border-t ${isDark ? 'border-dark-accent3/20' : 'border-light-accent4/20'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-light-heading dark:text-dark-heading">
          {t('nav.talks')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {talks.map((talk, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative p-8 rounded-3xl transition-all duration-300 ${
                isDark 
                  ? 'bg-dark-bgSecondary hover:bg-black border border-dark-accent3/10 hover:border-dark-accent1 shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(217,4,41,0.4)]' 
                  : 'bg-white hover:bg-light-bgSecondary/50 border border-light-accent4/10 hover:border-light-accent3/30 shadow-lg hover:shadow-xl'
              }`}
            >
              <div className="flex flex-col h-full">
                <div className="mb-6 flex justify-between items-start flex-wrap gap-2">
                  <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                    isDark ? 'bg-dark-accent3/20 text-dark-accent2' : 'bg-light-accent3/10 text-light-accent1'
                  }`}>
                    {talk.event}
                  </span>
                  <span className={`text-sm font-medium ${
                    isDark ? 'text-dark-text/60' : 'text-light-text/70'
                  }`}>
                    {talk.date}
                  </span>
                </div>
                
                <h3 className={`text-2xl font-bold mb-4 leading-snug transition-colors ${
                  isDark ? 'text-dark-text group-hover:text-dark-accent1' : 'text-light-heading group-hover:text-light-accent3'
                }`}>
                  {talk.title}
                </h3>
                
                <p className={`text-base leading-relaxed flex-grow mt-2 ${
                  isDark ? 'text-dark-text/80' : 'text-light-text'
                }`}>
                  {talk.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
