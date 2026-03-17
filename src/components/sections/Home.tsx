import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useTheme } from '../../theme/ThemeContext';
import { Download, Link as LinkIcon } from 'lucide-react';
import { ShuffleText } from '../common/ShuffleText';

// Import Assets
import lightPhoto from '../../assets/foto_lightmode.jpg';
import darkPhoto from '../../assets/foto_darkmode.png';

export const Home: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === 'cocina';

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: isDark ? 0.3 : 0.8,
        staggerChildren: isDark ? 0.1 : 0.2 
      } 
    }
  } as any;

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: isDark ? 'spring' : 'tween',
        stiffness: isDark ? 300 : 100,
        damping: isDark ? 10 : 20,
        duration: isDark ? 0.4 : 0.8
      }
    }
  } as any;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div 
          animate={{
            scale: isDark ? [1, 1.05, 1] : [1, 1.1, 1],
            opacity: isDark ? [0.1, 0.2, 0.1] : [0.05, 0.1, 0.05]
          }}
          transition={{ duration: isDark ? 3 : 8, repeat: Infinity, ease: "linear" }}
          className={`absolute -top-1/4 -right-1/4 w-3/4 h-3/4 rounded-full blur-[100px] ${
            isDark ? 'bg-dark-accent1' : 'bg-light-accent3'
          }`}
        />
        <motion.div 
          animate={{
            scale: isDark ? [1, 1.1, 1] : [1, 1.05, 1],
            opacity: isDark ? [0.1, 0.15, 0.1] : [0.05, 0.08, 0.05]
          }}
          transition={{ duration: isDark ? 4 : 10, repeat: Infinity, ease: "linear" }}
          className={`absolute -bottom-1/4 -left-1/4 w-3/4 h-3/4 rounded-full blur-[100px] ${
            isDark ? 'bg-dark-accent3' : 'bg-light-accent1'
          }`}
        />
      </div>

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={theme} // Re-trigger animations on theme change
      >
        {/* Left Column: Text & CTA */}
        <div className="flex flex-col items-start text-left order-2 lg:order-1">
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block py-1 px-3 rounded-full bg-light-accent4/20 dark:bg-dark-accent3/20 text-light-accent3 dark:text-dark-accent3 text-sm font-semibold tracking-wider uppercase backdrop-blur-sm border border-light-accent4/30 dark:border-dark-accent3/30 hover:scale-105 transition-transform duration-300">
              <ShuffleText text={t('hero.greeting')} />
            </span>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mb-6 relative w-full">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-light-heading dark:text-dark-heading leading-tight drop-shadow-sm cursor-default">
              <span className="block mb-2">
                <ShuffleText text="RODRIGO" />
                <br className="max-lg:hidden"/> <ShuffleText text="CAMBRAY" />
              </span>
            </h1>
            {/* Subtle Glitch effect in dark mode on hover */}
            {isDark && (
              <div className="absolute inset-0 pointer-events-none flex items-center justify-start opacity-0 hover:opacity-100 mix-blend-screen text-dark-accent1 blur-[1px] transition-opacity duration-300">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight translate-x-1 -translate-y-1">RODRIGO<br className="max-lg:hidden"/> CAMBRAY</h1>
              </div>
            )}
          </motion.div>

          <motion.div variants={itemVariants} className="mb-10 w-full">
            <h2 className="text-xl md:text-2xl font-light text-light-text dark:text-dark-text/90 md:leading-relaxed flex flex-col space-y-2 cursor-default">
              <span className={isDark ? "font-inter font-medium text-dark-accent3" : "font-lato text-light-accent3"}><ShuffleText text="Software Engineer" /></span>
              <span className={isDark ? "font-inter font-medium" : "font-lato"}><ShuffleText text="Cybersecurity Consultant" /></span>
              <span className={isDark ? "font-inter font-medium text-dark-accent2" : "font-lato text-light-accent1"}><ShuffleText text="Project Manager" /></span>
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto mt-4">
            <a 
              href="https://linktr.ee/rcambray.dev" 
              target="_blank" 
              rel="noreferrer"
              className={`flex items-center justify-center gap-2 px-8 py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-md ${
                isDark 
                  ? 'bg-dark-accent1 text-dark-bg hover:opacity-90 hover:shadow-[0_0_20px_rgba(217,4,41,0.6)]' 
                  : 'bg-light-accent1 text-light-bg hover:bg-light-accent1/90 hover:shadow-lg hover:scale-105'
            }`}>
              <LinkIcon className="w-4 h-4" />
              <span>Linktree</span>
            </a>
            
            <a 
              href="/resources/CV_RodrigoCambray.pdf" 
              download
              className={`flex items-center justify-center gap-2 px-8 py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 border-2 ${
                isDark 
                  ? 'border-dark-text/30 text-dark-text hover:border-dark-accent3 hover:text-dark-accent3 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] bg-transparent' 
                  : 'border-light-text/30 text-light-text hover:border-light-accent3 hover:text-light-accent3 hover:scale-105 bg-transparent hover:shadow-sm'
            }`}>
              <Download className="w-4 h-4" />
              <span>{t('hero.cta_resume')}</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Photography */}
        <motion.div 
          variants={itemVariants}
          className="order-1 lg:order-2 w-full max-w-md mx-auto lg:max-w-full"
        >
          <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer border-4 border-white/10 dark:border-black/50">
            {/* Background Image that swaps on theme change */}
            <div 
              className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105`}
              style={{ backgroundImage: `url(${isDark ? darkPhoto : lightPhoto})` }}
            />
            
            {/* Subtle Overlay to ensure blending */}
            <div className={`absolute inset-0 opacity-40 mix-blend-multiply transition-colors duration-700 ${
              isDark ? 'bg-gradient-to-tr from-dark-bg to-transparent' : 'bg-gradient-to-tr from-light-bgSecondary to-transparent'
            }`} />
          </div>
        </motion.div>
        
      </motion.div>
    </section>
  );
};
