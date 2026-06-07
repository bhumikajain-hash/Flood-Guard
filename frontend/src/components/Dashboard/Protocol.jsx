import React from 'react'
import { useSelector } from 'react-redux';

const Protocol = () => {

    // @ts-ignore
   const sensorHistory = useSelector((state) => state.floodguard.sensorHistory || []);
  const latest = sensorHistory.length > 0 ? sensorHistory[0] : { status: "SAFE" };
  const status = latest.status;

  return (
   <div className="mt-4 p-5 md:p-6 bg-gradient-to-r from-blue-400/10 to-slate-900/40 rounded-2xl border border-cyan-500/20">
  
  <h4 className="text-cyan-100 animate-pulse [text-shadow:1px_1px_3px_rgb(209,202,202)] text-lg md:text-xl font-bold mb-4 flex items-center gap-2">
     <span>🛡️</span> Safety Protocols
  </h4>
  
  {status === "DANGER ALERT" ? (
    <div className="space-y-1 md:space-y-2 ml-2 md:ml-6 text-red-200 text-sm md:text-base">
      <p>🚨 <span className="font-bold">Immediate Evacuation:</span> Move to high ground immediately.</p>
      <p>🚨 <span className="font-bold">Contact:</span> Call District Emergency Services: 108</p>
    </div>
  ) : status === "CAUTION" ? (
    <div className="space-y-1 md:space-y-2 ml-2 md:ml-6 text-yellow-200 text-sm md:text-base">
      <p>⚠️ <span className="font-bold">Preparation:</span> Keep emergency kit ready.</p>
      <p>⚠️ <span className="font-bold">Monitor:</span> Check local weather broadcasts every 30 mins.</p>
    </div>
  ) : (
    <div className="text-green-200 ml-2 md:ml-6 text-sm md:text-base">
      <p>✅ <span className="font-bold">Status:</span> No action required. Maintain routine.</p>
    </div>
  )}
</div>
  )
}

export default Protocol