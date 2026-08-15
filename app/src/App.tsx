import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import AIAgents from './pages/AIAgents'
import WorkflowAutomation from './pages/WorkflowAutomation'
import LegalIntelligence from './pages/LegalIntelligence'
import SecurityTrust from './pages/SecurityTrust'
import EnterpriseSolutions from './pages/EnterpriseSolutions'
import Documentation from './pages/Documentation'
import Policies from './pages/Policies'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import Philosophy from './pages/Philosophy'
import Infrastructure from './pages/Infrastructure'
import FutureRoadmap from './pages/FutureRoadmap'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/ai-agents" element={<AIAgents />} />
          <Route path="/workflow-automation" element={<WorkflowAutomation />} />
          <Route path="/legal-intelligence" element={<LegalIntelligence />} />
          <Route path="/security-trust" element={<SecurityTrust />} />
          <Route path="/enterprise-solutions" element={<EnterpriseSolutions />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/future-roadmap" element={<FutureRoadmap />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
