import SensorCard from '../components/Dashboard/SensorCard';
import LiveChart from '../components/Dashboard/LiveChart';
import AlertBadge from '../components/Dashboard/AlertBadge';
import RiskDetail from '../components/Dashboard/RiskDetail';
import History from '../components/Dashboard/History';
import { useDispatch } from 'react-redux';
import { fetchSensorData} from '../store/action/floodguardAction';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {

  const dispatch = useDispatch();
  // @ts-ignore
  const sensorHistory = useSelector((state) => state.floodguard.sensorHistory);
  // const latest = sensorHistory.length > 0 ? sensorHistory[sensorHistory.length - 1] : 
  //              { waterLevel: 0, rainIntensity: 0, soilMoisture: 0, status: "SAFE" };
  const latest = sensorHistory.length > 0 ? sensorHistory[0] : 
               { waterLevel: 0, rainIntensity: 0, soilMoisture: 0, status: "SAFE" };
// Extract values for the cards
const waterlevel = latest.waterLevel;
const rainIntensity = latest.rainIntensity;
const soilMoisture = latest.soilMoisture;
const status = latest.status; // Pass this to your AlertBadge

  useEffect(() => {
        // Initial fetch
        // @ts-ignore
        dispatch(fetchSensorData());

        // Set up the interval for real-time updates (every 3 seconds)
        const interval = setInterval(() => {
            // @ts-ignore
            dispatch(fetchSensorData());
        }, 3000);

        return () => clearInterval(interval);
    }, [dispatch]);


  return (
   
     <div className=" flex-grow w-full ">

      <div className="max-w-7xl  mx-auto space-y-8 p-5 md:p-8 ">
        {/* Status Row */}
        <div className="flex flex-col md:flex-row justify-between items-center">
      
        <span className="font-bold mb-3 text-2xl animate-pulse text-cyan-200 [text-shadow:0_0_8px_rgba(34,211,238,0.8)]">
          Active Monitoring
        </span>
          <AlertBadge status={status}  />
        </div>

        {/* 1. Sensor Cards */}
        <div className="grid grid-cols-1  md:grid-cols-3 gap-6">
          <SensorCard title="Water Level" value={sensorHistory[0]?.waterLevel} unit="cm"  />
          <SensorCard title="Rain Intensity" value={sensorHistory[0]?.rainIntensity} unit="mm/hr"  />
          <SensorCard title="Soil Moisture" value={sensorHistory[0]?.soilMoisture} unit="%"  />
        </div>

        <div className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 p-5 md:p-6 rounded-3xl">
          <RiskDetail history={sensorHistory} />
        </div>

        {/* 2. Side-by-Side Charts (Simultaneous) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {[
            { title: 'Water Level History', data: sensorHistory, key: 'waterLevel', color: '#38bdf8' },
            { title: 'Rain Intensity History', data: sensorHistory, key: 'rainIntensity', color: '#f59e0b' },
            { title: 'Soil Moisture History', data: sensorHistory, key: 'soilMoisture', color: '#10b981' }
          ].map((c, i) => (
            <div key={i} className="bg-slate-900/40 backdrop-blur-md  p-5 md:p-6 border border-slate-700/50 rounded-3xl h-64 w-full relative"
           >
              <h3 className="text-[10px] uppercase text-slate-400 font-bold tracking-widest mb-4">{c.title}</h3>
              <LiveChart data={[...c.data].reverse()} dataKey={c.key} color={c.color} />
             
            </div>
          ))}
        </div>

        <History /> 
      </div>

</div>
  
  );
};

export default Dashboard;
