import React from 'react';
import { useSelector } from 'react-redux';

const History = () => {
  // @ts-ignore
  const sensorData = useSelector((state) => state.floodguard.sensorHistory || []);

  // Create a reversed copy for display (newest at top)
  const displayData = sensorData.slice(0, 15);

  return (
    <div className="w-full rounded-xl border border-white/10 bg-slate-900/50 mt-8">
      <h3 className="text-white font-bold p-4 text-xl">Sensor History Log</h3>
      <div className="w-full overflow-x-auto">
      <table className="w-full text-left text-xs md:text-sm text-slate-300">
        <thead className="bg-slate-800/50 text-cyan-400 uppercase">
          <tr>
            <th className="text-center py-4 px-2 md:px-4 ">Time</th>
            <th className="text-center py-4 px-2 md:px-4">Water Level</th>
            <th className="text-center py-4 px-2 md:px-4">Rain Intensity</th>
            <th className="text-center py-4 px-2 md:px-4">Soil Moisture</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {displayData.map((entry, index) => {
            // Because displayData is [Newest, ..., Oldest],
            // index + 1 is the "next older" record.
            const prevEntry = displayData[index + 1];

           const getTrend = (current, previous) => {
  if (previous === undefined) return null; // Newest row
  if (current > previous) return 'up';
  if (current < previous) return 'down';
  return 'flat'; // Values are equal
};

        
          const waterTrend = getTrend(entry.waterLevel, prevEntry?.waterLevel);
          const rainTrend = getTrend(entry.rainIntensity, prevEntry?.rainIntensity);
          const soilTrend = getTrend(entry.soilMoisture, prevEntry?.soilMoisture);
            const renderTrend = (trend) => {
              if (trend === null) return '';
              return trend === 'up' ? '↑' : trend === 'down' ? '↓' : '•';
            };

            return (
              <tr key={index} className="hover:bg-slate-800/30 ">
                <td className="text-center py-4 px-2 md:px-4 whitespace-nowrap">{entry.time}</td>
                
               <td className={`text-center py-4 px-2 md:px-4 font-bold 
                  ${waterTrend === null ? 'text-slate-300' : 
                    waterTrend === 'up' ? 'text-red-400' : 
                    waterTrend === 'down' ? 'text-green-400' : 'text-slate-400'}`}>
                  {entry.waterLevel} {renderTrend(waterTrend)}
                </td>
                                
                                {/* Rain Intensity Column */}
                <td className={`text-center py-4 px-2 md:px-4 font-bold ${
                  rainTrend === null ? 'text-slate-300' : 
                  rainTrend === 'up' ? 'text-red-400' : 
                  rainTrend === 'down' ? 'text-green-400' : 'text-slate-400'
                }`}>
                  {entry.rainIntensity} {renderTrend(rainTrend)}
                </td>

                {/* Soil Moisture Column */}
                <td className={`text-center py-4 font-bold ${
                  soilTrend === null ? 'text-slate-300' : 
                  soilTrend === 'up' ? 'text-red-400' : 
                  soilTrend === 'down' ? 'text-green-400' : 'text-slate-400'
                }`}>
                  {entry.soilMoisture} {renderTrend(soilTrend)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default History;