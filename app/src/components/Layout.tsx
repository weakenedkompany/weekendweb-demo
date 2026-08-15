import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="construction-field" />
      <div className="construction-orbit construction-orbit--large" />
      <div className="construction-orbit construction-orbit--small" />

      <Navigation />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
