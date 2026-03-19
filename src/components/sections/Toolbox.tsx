import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useTheme } from '../../theme/ThemeContext';
import { LordIcon } from '../common/LordIcon';

const tools = [
  { name: 'React & TS', type: 'Frontend' },
  { name: 'Node.js', type: 'Backend' },
  { name: 'Python', type: 'Scripting/Sec' },
  { name: 'PHP Laravel', type: 'Backend' },
  { name: 'NestJS', type: 'Backend' },
  { name: 'FastAPI', type: 'Backend' },
  { name: 'Java & Spring Boot', type: 'Backend' },
  { name: 'MySQL', type: 'Database' },
  { name: 'Informix & DB2', type: 'Database'},
  { name: 'AWS & Azure', type: 'Cloud' },
  { name: 'Jira & Agile', type: 'Management' },
  { name: 'Docker', type: 'Containerization'},
  { name: 'Git & GitHub', type: 'Version Control'},
  { name: 'Dataedo', type: 'Documentation'},
  { name: 'Postman', type: 'API Testing'},
  { name: 'Swagger', type: 'API Documentation'},

];

export const Toolbox: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === 'cocina';

  return (
    <section id="toolbox" className={`py-24 px-4 sm:px-6 lg:px-8 border-t ${isDark ? 'border-dark-accent3/20' : 'border-light-accent4/20'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-bold mb-4 text-light-heading dark:text-dark-heading">
            {t('nav.toolbox')}
          </h2>
          <p className={`max-w-2xl mx-auto ${isDark ? 'text-dark-text/70 font-inter' : 'text-light-text'}`}>
            {isDark ? "Arsenal técnico y herramientas tácticas. Utilidades para resolver problemas." : "Mezcla de herramientas premium para garantizar la mejor calidad en cada entrega."}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-300 cursor-default ${
                isDark 
                  ? 'bg-dark-bgSecondary/60 border border-dark-accent3/20 hover:border-dark-accent2 hover:bg-dark-bgSecondary hover:shadow-[0_0_15px_rgba(255,215,0,0.2)]' 
                  : 'bg-light-bgSecondary/30 border border-transparent hover:border-light-accent4 hover:bg-white hover:shadow-md'
              }`}
            >
              {/* Using a generic Lordicon for tools as placeholder */}
              <div className="mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                 <LordIcon 
                    icon={{
                       light: 'https://cdn.lordicon.com/wzwygmng.json', 
                       dark: 'https://cdn.lordicon.com/wzwygmng.json'
                    }} 
                    size={48} 
                    trigger="hover" 
                  />
              </div>
              <h3 className={`font-bold text-center mb-1 ${isDark ? 'text-dark-text' : 'text-light-heading'}`}>
                {tool.name}
              </h3>
              <span className={`text-[10px] uppercase tracking-wider font-bold ${isDark ? 'text-dark-accent3/70' : 'text-light-text/60'}`}>
                {tool.type}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
