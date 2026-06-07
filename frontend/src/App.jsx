import React from 'react'
import Dashboard from './pages/Dashboard';
import RealTimeClock from './components/RealTimeClock';
import Footer from './components/Footer';


const App = () => {
  
  return (
    <div className=" min-h-screen bg-slate-950 flex flex-col text-slate-100">
      {/* Header */}
      <header className="mb-6 md:mb-10 pt-8 px-4 text-center">
        <h1 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-cyan-800 to-cyan-400 bg-clip-text text-transparent [text-shadow:0_0_5px_rgba(34,211,238,0.8)] ">"Flood-Guard"</h1>
       <p className="text-slate-300 ml-2 mt-2 mb-2 italic font-light tracking-widest uppercase text-xs md:text-sm">Real-Time Environmental Disaster Monitoring</p>
       <RealTimeClock />
      </header>

    <Dashboard />

    <Footer  />
   </div>
  );
}

export default App