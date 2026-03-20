import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { useTheme } from '../theme/ThemeContext';

const API_BASE = 'http://localhost:3000'; // Replace with production URL

interface Post {
  id: number;
  slug: string;
  title: string;
  date: string;
  tag: string;
  excerpt: string;
  contentHtml?: string;
}

export const BlogListPage: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'cocina';
  
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const tagFilter = searchParams.get('tag');

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchPosts = async () => {
      try {
        let url = `${API_BASE}/api/posts?page=1`;
        if (tagFilter) {
          url += `&tag=${encodeURIComponent(tagFilter)}`;
        }
        const res = await fetch(url);
        const data = await res.json();
        setPosts(data.posts || []);
      } catch (err) {
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [tagFilter]);

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <Link to="/" className={`inline-block mb-6 text-sm font-bold uppercase tracking-wider hover:underline ${isDark ? 'text-dark-accent3' : 'text-light-accent3'}`}>
            ← Volver al Inicio
          </Link>
          <h2 className="text-4xl md:text-5xl font-bold text-light-heading dark:text-dark-heading">
            Blog de Actualidad en tecnología
          </h2>
          {tagFilter && (
            <p className={`mt-4 ${isDark ? 'text-dark-text/70' : 'text-light-text/70'}`}>
              Filtrando por: <strong>{tagFilter}</strong>
            </p>
          )}
        </div>

        {loading ? (
          <p className={isDark ? 'text-dark-text' : 'text-light-text'}>Cargando artículos...</p>
        ) : posts.length === 0 ? (
          <p className={isDark ? 'text-dark-text' : 'text-light-text'}>No se encontraron artículos.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between ${
                  isDark 
                    ? 'bg-dark-bgSecondary hover:bg-black border border-dark-accent3/10 hover:border-dark-accent1 shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(217,4,41,0.4)]' 
                    : 'bg-white hover:bg-light-bgSecondary/50 border border-light-accent4/10 hover:border-light-accent3/30 shadow-lg hover:shadow-xl'
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className={`text-xs font-bold uppercase tracking-widest ${
                      isDark ? 'text-dark-accent2' : 'text-light-accent1'
                    }`}>
                      {post.tag}
                    </span>
                    <span className={`text-xs font-medium ${isDark ? 'text-dark-text/60' : 'text-light-text/70'}`}>
                      {new Date(post.date).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                  </div>
                  <h3 className={`text-xl md:text-2xl font-bold mb-4 leading-snug transition-colors ${
                    isDark ? 'text-dark-text group-hover:text-dark-accent1' : 'text-light-heading group-hover:text-light-accent3'
                  }`}>
                    {post.title}
                  </h3>
                  <p className={`text-sm mb-6 ${isDark ? 'text-dark-text/80' : 'text-light-text'}`}>
                    {post.excerpt}
                  </p>
                </div>
                
                <div className="mt-4">
                  <Link to={`/blog/${post.slug}`} className={`inline-block font-bold mt-2 uppercase text-sm tracking-wider transition-transform duration-300 group-hover:translate-x-2 ${isDark ? 'text-dark-accent3' : 'text-light-accent3'}`}>
                    Leer artículo →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
