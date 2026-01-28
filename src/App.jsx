import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import { ReactLenis } from 'lenis/react'

function App() {
  return (
    <div className="relative w-screen bg-black overflow-x-hidden">
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
        <Navbar />
        <Home />
      </ReactLenis>
    </div>
  )
}

export default App
