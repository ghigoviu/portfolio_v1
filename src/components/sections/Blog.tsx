import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '../../theme/ThemeContext';

const articles = [
  {
    title: 'Data leak masivo de datos del SAT',
    category: 'Ciberseguridad',
    date: 'Mar 2026',
    slug: 'data-leak-masivo-sat'
  },
  {
    title: 'Nueva regulación sobre Inteligencia Artificial 2026',
    category: 'Inteligencia artificial',
    date: 'Mar 2026',
    slug: 'ia-regulacion-2026'
  },
  {
    title: 'Preparándote para auditorías Cloud',
    category: 'Regularización',
    date: 'Mar 2026',
    slug: 'auditorias-nube-regularizacion'
  }
];

export const Blog: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === 'cocina';

  return (
    <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-light-heading dark:text-dark-heading">
            {t('nav.blog')}
          </h2>
          <Link to="/portfolio_v1/blog" className={`text-sm font-bold uppercase tracking-wider hover:underline ${isDark ? 'text-dark-accent3' : 'text-light-accent3'}`}>
            Ver Todo
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative p-8 rounded-3xl transition-all duration-300 ${
                isDark 
                  ? 'bg-dark-bgSecondary hover:bg-black border border-dark-accent3/10 hover:border-dark-accent1 shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(217,4,41,0.4)]' 
                  : 'bg-white hover:bg-light-bgSecondary/50 border border-light-accent4/10 hover:border-light-accent3/30 shadow-lg hover:shadow-xl'
              }`}
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <span className={`text-xs font-bold uppercase tracking-widest mb-4 inline-block ${
                    isDark ? 'text-dark-accent2' : 'text-light-accent1'
                  }`}>
                    {article.category}
                  </span>
                  <h3 className={`text-xl md:text-2xl font-bold mb-4 leading-snug transition-colors ${
                    isDark ? 'text-dark-text group-hover:text-dark-accent1' : 'text-light-heading group-hover:text-light-accent3'
                  }`}>
                    {article.title}
                  </h3>
                </div>
                
                <div className={`mt-8 flex justify-between items-center text-sm font-medium ${
                  isDark ? 'text-dark-text/60' : 'text-light-text/70'
                }`}>
                  <span>{article.date}</span>
                  <Link to={`/portfolio_v1/blog/${article.slug}`} className={`transition-transform duration-300 group-hover:translate-x-2 ${isDark ? 'text-dark-accent3' : 'text-light-accent3'}`}>
                    Read →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
