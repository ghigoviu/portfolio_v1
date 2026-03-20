import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../theme/ThemeContext';

const API_BASE = 'http://localhost:3000';

interface Post {
  id: number;
  slug: string;
  title: string;
  date: string;
  tag: string;
  excerpt: string;
  contentHtml: string;
}

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { theme } = useTheme();
  const isDark = theme === 'cocina';
  
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchPost = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/posts/${slug}`);
        if (!res.ok) {
          setError(true);
          return;
        }
        const data = await res.json();
        setPost(data);
      } catch (err) {
        console.error('Error fetching post:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    if (slug) fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className={isDark ? 'text-dark-text' : 'text-light-text'}>Cargando artículo...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <p className={`text-xl mb-4 ${isDark ? 'text-dark-text' : 'text-light-text'}`}>Artículo no encontrado.</p>
        <Link to="/blog" className={`underline ${isDark ? 'text-dark-accent3' : 'text-light-accent3'}`}>
          Regresar al blog
        </Link>
      </div>
    );
  }

  return (
    <article className="py-32 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <Link to="/blog" className={`inline-block mb-8 text-sm font-bold uppercase tracking-wider hover:underline ${isDark ? 'text-dark-accent3' : 'text-light-accent3'}`}>
          ← Regresar al Blog
        </Link>
        
        <header className="mb-10 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${isDark ? 'bg-dark-accent2/20 text-dark-accent2' : 'bg-light-accent1/10 text-light-accent1'}`}>
              {post.tag}
            </span>
            <span className={`text-sm ${isDark ? 'text-dark-text/60' : 'text-light-text/70'}`}>
              {new Date(post.date).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-light-heading dark:text-dark-heading">
            {post.title}
          </h1>
        </header>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`prose prose-lg md:prose-xl max-w-none ${
            isDark 
              ? 'prose-invert prose-headings:text-dark-heading prose-p:text-dark-text/90 prose-a:text-dark-accent3 hover:prose-a:text-dark-accent1 prose-strong:text-dark-text' 
              : 'prose-headings:text-light-heading prose-p:text-light-text prose-a:text-light-accent3 hover:prose-a:text-light-accent1 prose-strong:text-light-text'
          }`}
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* CTA module reused/concept */}
        <div className={`mt-16 p-8 rounded-2xl text-center ${
          isDark 
            ? 'bg-dark-bgSecondary border border-dark-accent3/20 shadow-lg' 
            : 'bg-light-bgSecondary/30 border border-light-accent4/20 shadow-sm'
        }`}>
          <h3 className="text-2xl font-bold mb-4 text-light-heading dark:text-dark-heading">¿Necesitas asesoría en tecnología?</h3>
          <p className={`mb-6 ${isDark ? 'text-dark-text/80' : 'text-light-text/80'}`}>
            Contamos con expertos para guiar tu infraestructura al siguiente nivel.
          </p>
          <a href="https://linktr.ee/rcambray.dev" target="_blank" rel="noreferrer" className={`inline-block px-8 py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-md ${
            isDark ? 'bg-dark-accent1 text-dark-bg hover:opacity-90' : 'bg-light-accent1 text-light-bg hover:bg-light-accent1/90'
          }`}>
            Solicitar consultoría de TI ahora
          </a>
        </div>
      </div>
    </article>
  );
};
