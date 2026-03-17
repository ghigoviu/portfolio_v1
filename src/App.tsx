import { Layout } from './components/layout/Layout'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { Blog } from './components/sections/Blog'
import { Toolbox } from './components/sections/Toolbox'

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Experience />
      <Blog />
      <Toolbox />
    </Layout>
  )
}

export default App
