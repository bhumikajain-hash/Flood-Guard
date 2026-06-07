
import React from 'react';
import { THRESHOLDS } from '../../utils/threshold';

const SensorCard = ({ title, value, unit }) => {
  const getStatus = (value, type) => {
     if (value === undefined || value === null) {
  return { label: 'Loading', color: 'text-slate-500', bg: 'bg-slate-500/10' };
}
    if (type === 'water level') {
      if (value < THRESHOLDS.waterLevel.danger) return { label: 'Danger', color: 'text-red-500', bg: 'bg-red-500/10' };
      if (value < THRESHOLDS.waterLevel.caution) return { label: 'Caution', color: 'text-yellow-500', bg: 'bg-yellow-500/10' };
      return { label: 'Safe', color: 'text-green-500', bg: 'bg-green-500/10' };
    }
       if (type === 'rain intensity') {
      if (value > THRESHOLDS.rainIntensity.danger) return { label: 'Danger', color: 'text-red-500', bg: 'bg-red-500/10' };
      if (value > THRESHOLDS.rainIntensity.caution) return { label: 'Caution', color: 'text-yellow-500', bg: 'bg-yellow-500/10' };
      return { label: 'Safe', color: 'text-green-500', bg: 'bg-green-500/10' };
    }
    if (type === 'soil moisture') {
      if (value > THRESHOLDS.soilMoisture.danger) return { label: 'Danger', color: 'text-red-500', bg: 'bg-red-500/10' };
      if (value > THRESHOLDS.soilMoisture.caution) return { label: 'Caution', color: 'text-yellow-500', bg: 'bg-yellow-500/10' };
      return { label: 'Safe', color: 'text-green-500', bg: 'bg-green-500/10' };
    }
    return { label: 'Unknown', color: 'text-slate-500', bg: 'bg-slate-500/10' };
    // ... add rain and soil logic similarly ...
  
  };

  const status = getStatus(value, title.toLowerCase());
    

  return (
    <div className="relative group p-4 md:p-6 rounded-2xl bg-slate-900/50 backdrop-blur-md border border-slate-800 transition-all duration-300 hover:border-slate-600 hover:shadow-2xl">
      
      {/* Decorative Glow Effect: Check status.label */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${status.label === 'Danger' ? 'from-red-600 to-orange-600' : 'from-blue-600 to-cyan-500'} rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500`}></div>

      <div className="relative">
        <h3 className="text-slate-300 text-[10px] md:text-xs font-bold uppercase tracking-widest">{title}</h3>
        
        <div className="flex items-baseline mt-2 gap-1">
          <span className="ttext-3xl md:text-4xl font-light text-white tracking-tight">{value}</span>
          <span className="text-sm md:text-lg text-slate-500">{unit}</span>
        </div>

        {/* Status Badge: Use status.bg and status.color correctly */}
        <div className={`inline-flex items-center mt-3 md:mt-4 px-2.5 py-0.5 md:px-3 md:py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${status.bg} ${status.color}`}>
          <span className={`mr-1.5 h-1.5 w-1.5 animate-pulse rounded-full ${status.label === 'Danger' ? 'bg-red-400' : status.label === 'Caution' ? 'bg-yellow-400' : 'bg-green-400'}`}></span>
          {status.label}
        </div>
      </div>
    </div>
  );
};

export default SensorCard;