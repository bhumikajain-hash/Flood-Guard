import React from 'react'
import { useSelector } from 'react-redux';
import { THRESHOLDS } from '../../utils/threshold';
import Protocol from './Protocol';


const RiskDetail = ({ history }) => {

  if (!history || history.length === 0) {
    return <div className="p-6 text-slate-500">Loading system intelligence...</div>;
  }

  // Get the latest reading
  const latest = history[0];

   const getStatus = (value, type) => {
    if (type === 'water') {
    

      if (value < THRESHOLDS.waterLevel.danger) return { label: 'Danger', color: 'text-red-500', bg: 'bg-red-500/10', message: 'dangerously high and may lead to flooding.Therefore immediate action is required.', Heading:'Government is on high alert , Please co-operate with authorities' ,};
      if (value < THRESHOLDS.waterLevel.caution) return { label: 'Caution', color: 'text-yellow-500', bg: 'bg-yellow-500/10', message: 'elevated and may lead to flooding. Please monitor the situation closely.' , Heading:'Government is on alert, Please stay vigilant and follow official updates' };
      return { label: 'Safe', color: 'text-green-500', bg: 'bg-green-500/10', message: 'within safe limits.', Heading:'Everything is in control.' };
    }

       if (type === 'rain') {
      if (value > THRESHOLDS.rainIntensity.danger) return { label: 'Danger', color: 'text-red-500', bg: 'bg-red-500/10', message: 'dangerously high and may lead to flooding. Please take necessary precautions.', Heading:'Government is on high alert, Please co-operate with authorities' };
      if (value > THRESHOLDS.rainIntensity.caution) return { label: 'Caution', color: 'text-yellow-500', bg: 'bg-yellow-500/10', message: 'elevated and may lead to flooding. Please monitor the situation closely.' , Heading:'Government is on alert, Please stay vigilant and follow official updates'};
      return { label: 'Safe', color: 'text-green-500', bg: 'bg-green-500/10', message: 'within safe limits.',Heading:'Everything is in control.' };
    }

    if (type === 'soil') {
      if (value > THRESHOLDS.soilMoisture.danger) return { label: 'Danger', color: 'text-red-500', bg: 'bg-red-500/10', message: 'dangerously high and may lead to flooding. Please take necessary precautions.', Heading:'Government is on high alert, Please co-operate with authorities'};
      if (value > THRESHOLDS.soilMoisture.caution) return { label: 'Caution', color: 'text-yellow-500', bg: 'bg-yellow-500/10', message: 'elevated and may lead to flooding. Please monitor the situation closely.' , Heading:'Government is on alert, Please stay vigilant and follow official updates'};
      return { label: 'Safe', color: 'text-green-500', bg: 'bg-green-500/10', message: 'within safe limits.' ,Heading:'Everything is in control.' };
    }

    return { label: 'Unknown', color: 'text-slate-500', bg: 'bg-slate-500/10', message: 'Unable to determine risk level.', Heading:'Unable to determine risk level.' };
    // ... add rain and soil logic similarly ...
  
  };

  const wStatus = getStatus(latest.waterLevel, 'water');
  const rStatus = getStatus(latest.rainIntensity, 'rain');
  const sStatus = getStatus(latest.soilMoisture, 'soil');
  // At the top of your component, before your calculations:
if (!history || history.length === 0) {
  return <div className="p-6 text-slate-500">Loading system intelligence...</div>;
}
  return (
   <>
   
<div className="bg-gradient-to-r from-blue-400/10 to-slate-900/40 border border-cyan-500/20 p-5 md:p-8 rounded-3xl backdrop-blur-md ">
  <h3 className="text-white font-bold uppercase tracking-wide text-xl md:text-2xl mb-3 [text-shadow:0_0_8px_rgba(34,211,238,0.8)]">
    System Intelligence & Threat Prediction
  </h3>

  <div className="text-white text-sm md:text-md space-y-3">
   <p>🌡️ The waterlevel is <span className={`font-bold ${wStatus.color}`}>{latest.waterLevel !== undefined ? latest.waterLevel : 'N/A'}</span>. which is {wStatus.message} <strong className={`block md:inline font-bold ${wStatus.color}`}>{wStatus.Heading}</strong> </p>

    <p>🌧️ RainIntensity is <span className={`font-bold ${rStatus.color}`}>{latest.rainIntensity !== undefined ? latest.rainIntensity : 'N/A'}</span>. which is {rStatus.message}<strong className={`block md:inline font-bold ${rStatus.color}`}>{rStatus.Heading}</strong></p>


    <p>💧 Soil Moisture is <span className={`font-bold ${sStatus.color}`}>{latest.soilMoisture !== undefined ? latest.soilMoisture : 'N/A'}</span>. which is {sStatus.message} <strong className={`block md:inline font-bold ${sStatus.color}`}>{sStatus.Heading}</strong> </p>

    <div className="mt-4 pt-3 border-t border-cyan-500/10">
           <p className="text-lg md:text-xl text-cyan-100 [text-shadow:1px_1px_2px_rgb(209,202,202)] font-bold ">
             Flood Risk Status: <span className={`font-bold ${latest.status === 'DANGER ALERT' ? 'text-red-400' : latest.status === 'CAUTION' ? 'text-yellow-400' : 'text-green-400'}`}>{latest.status}</span> 
              </p >
             
            <p className="mt-2 text-xs md:text-sm font-bold">
             {latest.status === 'DANGER ALERT' ? <span className="font-bold text-red-500 animate-pulse animate-bounce ">
             🚨 Critical risk level detected! Immediate action is required to mitigate potential flooding impacts. Please follow official guidelines and stay safe. <span className="text-xl">Authorities are on high alert. </span>
             </span> : latest.status === 'CAUTION' ? <span className="font-bold  animate-bounce animate-pulse text-yellow-500">
            ⚠️ Elevated risk level detected! Please stay vigilant and monitor the situation closely for any updates.
             </span> : <span className="font-bold animate-pulse animate-bounce text-green-500">
              ✅ Everything is currently within safe limits. Continue to stay informed and be prepared for any changes in conditions.
              <span className="text-xl"> Stay safe, Stay Alert!</span>
             </span>}
           </p>
        </div>
  </div>

</div>

<Protocol />


</>

  )
}
export default RiskDetail