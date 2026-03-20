import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { Talks } from './components/sections/Talks'
import { Services } from './components/sections/Services'
import { Blog } from './components/sections/Blog'
import { Toolbox } from './components/sections/Toolbox'
import { BlogListPage } from './pages/BlogListPage'
import { BlogPostPage } from './pages/BlogPostPage'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/portfolio_v1" element={
            <>
              <Home />
              <About />
              <Experience />
              <Talks />
              <Services />
              <Blog />
              <Toolbox />
            </>
          } />
          <Route path="/portfolio_v1/blog" element={<BlogListPage />} />
          <Route path="/portfolio_v1/blog/:slug" element={<BlogPostPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
