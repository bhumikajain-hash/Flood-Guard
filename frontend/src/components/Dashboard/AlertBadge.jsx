import React from 'react';

const AlertBadge = ({ status }) => {

   const getStatusProps = () => {
    switch (status) {
      case 'SAFE':
        return { color: 'green', text: 'Status: Safe' };
      case 'CAUTION':
        return { color: 'yellow', text: 'Status: Caution' };
      case 'DANGER ALERT':
        return { color: 'red', text: 'CRITICAL: Flood Risk!' };
      default:
        return { color: 'green', text: 'Status: System Ready' };
    }
  };

  const currentStatus = getStatusProps();
  
  const colors = {
    green: 'bg-green-500/10 text-green-400 border-green-500/20',
    yellow: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    red: 'bg-red-500/10 text-red-400 border-red-500/20 animate-pulse'
  };

  return (
     <div className={`inline-flex items-center gap-3 px-5 py-2 rounded-full border text-sm md:text-lg font-bold uppercase tracking-widest ${colors[currentStatus.color]}`}>
     
      <span className={`h-2 md:h-3 w-2 md:w-3 rounded-full ${currentStatus.color === 'red' ? 'bg-red-500 animate-ping' : 'bg-current animate-ping'}`}></span>
      
      <span className="">{currentStatus.text} </span>
    </div>
  );
};

export default AlertBadge;