import React, { useState, useEffect } from 'react';

const RealTimeClock = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Configuration for 12-hour format with AM/PM
  const timeOptions = { 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit', 
    hour12: true 
  };

  return (
    <div className="text-cyan-200 [text-shadow:0_0_2px_#fff,0_0_10px_#fff,0_0_20px_#22d3ee] font-mono text-sm tracking-widest uppercase">
      {dateTime.toLocaleDateString()} | {dateTime.toLocaleTimeString(undefined, 
// @ts-ignore
      timeOptions)}
    </div>
  );
};

export default RealTimeClock;