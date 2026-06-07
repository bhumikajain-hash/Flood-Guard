

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip } from 'recharts';

const LiveChart = ({ data, dataKey, color }) => (
  <ResponsiveContainer width="100%"  height={200}>
    <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
      <defs>
        <linearGradient id={`grad-${dataKey}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={0.4}/>
          <stop offset="100%" stopColor={color} stopOpacity={0}/>
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
      <XAxis dataKey="time" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
      <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} domain={['auto', 'auto']} />
      <Tooltip 
        contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
        itemStyle={{ color: color }}
        cursor={{ stroke: '#64748b', strokeWidth: 1 }}
      />
      <Area 
        type="monotone" 
        dataKey={dataKey} 
        stroke={color} 
        strokeWidth={1} 
        fill={`url(#grad-${dataKey})`} 
        isAnimationActive={true} 
        animationDuration={500}
      />
    </AreaChart>
  </ResponsiveContainer>
);

export default LiveChart;