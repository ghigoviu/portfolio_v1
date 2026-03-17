import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useTheme } from '../../theme/ThemeContext';
import { LordIcon } from '../common/LordIcon';

export const About: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === 'cocina';

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 } 
    }
  };

  const isEs = i18n.language === 'es';

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}
        >
          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-light-heading dark:text-dark-heading">
              {t('nav.about')}
            </h2>
            
            <div className={`space-y-6 text-lg leading-relaxed ${isDark ? 'text-dark-text/90 font-inter' : 'text-light-text font-montserrat'}`}>
              <p>
                {isDark ? (
                  isEs
                    ? "Mi enfoque se caracteriza por una precisión quirúrgica en el desarrollo de soluciones de backend. Mantengo un manejo sumamente cuidadoso de las herramientas de IA para potenciar el desarrollo, integrando la revisión exhaustiva de código y la aplicación estricta de metodologías de seguridad de la información."
                    : "My approach is characterized by surgical precision in backend solution development. I maintain a highly careful handling of AI tools to enhance development, integrating comprehensive code review and the strict application of information security methodologies."
                ) : (
                  isEs
                    ? "Soy un entusiasta de la programación y áreas afines a la inteligencia artificial. Formado como Full-Stack y especializado en frameworks de Back end. Siempre estoy en constante aprendizaje de nuevas herramientas y técnicas que me permitan mejorar mis habilidades como programador."
                    : "I’m enthusiastic about programming and artificial intelligence topics. Formed as Full Stack and specialized in Backend Frameworks. Constantly learning new tools and techniques that allow me to improve my developer skills."
                )}
              </p>
              {!isDark && (
                <>
                  <p>
                    {isEs
                      ? "Además, creo que es importante ayudar a otros a crecer en el área. Por eso, participo en eventos de desarrollo y comparto mis conocimientos con aquellos interesados en aprender."
                      : "I also believe in the importance of helping colleagues to grow in the tech field. That’s why I participate in events to develop and share my knowledge with those who are interested in learning."}
                  </p>
                  <p>
                    {isEs
                      ? "En definitiva, la programación y la inteligencia artificial son las áreas que me apasionan y que me permiten seguir aprendiendo y creciendo."
                      : "To sum up, programming and artificial intelligence are the fields which passionate me the most and that allows me to keep learning and growing."}
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative flex justify-center items-center">
            {/* An abstract shape acting as the background for the icon */}
            <motion.div 
              className={`absolute w-64 h-64 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 ${
                isDark ? 'bg-dark-accent1' : 'bg-light-accent4'
              }`}
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0]
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            
            <div className={`relative z-10 p-12 rounded-3xl backdrop-blur-sm border ${
              isDark 
                ? 'bg-dark-bgSecondary/50 border-dark-accent3/20 shadow-[0_0_30px_rgba(0,229,255,0.1)]' 
                : 'bg-white/50 border-light-accent3/10 shadow-xl'
            }`}>
              {/* Dynamic Icon placeholder */}
              <div className="w-32 h-32 flex items-center justify-center text-light-accent3 dark:text-dark-accent1">
                  <LordIcon 
                    icon={{
                       light: 'https://cdn.lordicon.com/wzwygmng.json',
                       dark: 'https://cdn.lordicon.com/wzwygmng.json'
                    }} 
                    size={120} 
                    trigger="loop" 
                  />
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
