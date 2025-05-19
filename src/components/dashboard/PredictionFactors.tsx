
/*import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const factorsData = [
  { name: 'Attendance', value: 85 },
  { name: 'Assignments', value: 72 },
  { name: 'Class Participation', value: 68 },
  { name: 'Previous Grades', value: 90 },
  { name: 'Study Hours', value: 65 }
];

const PredictionFactors = () => {
  return (
    <div className="h-full">
      <CardHeader className="pb-2">
        <CardTitle>Prediction Factors</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={factorsData}
              layout="vertical"
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="var(--border)" />
              <XAxis 
                type="number" 
                domain={[0, 100]} 
                stroke="var(--muted-foreground)" 
                fontSize={12}
              />
              <YAxis 
                dataKey="name" 
                type="category" 
                scale="band"
                width={100}
                tick={{ fontSize: 12 }}
                stroke="var(--muted-foreground)" 
              />
              <Tooltip 
                formatter={(value) => [`${value}%`, 'Impact']}
                labelStyle={{ fontWeight: 'bold' }}
                contentStyle={{ 
                  borderRadius: 'var(--radius)', 
                  border: '1px solid var(--border)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  backgroundColor: 'var(--card)'
                }}
              />
              <Bar 
                dataKey="value" 
                fill="url(#barGradient)"
                radius={[0, 4, 4, 0]}
                name="Impact"
              />
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#2D7FF9" className="dark:stop-color-blue-400" />
                  <stop offset="100%" stopColor="#7048E8" className="dark:stop-color-purple-400" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </div>
  );
};

export default PredictionFactors;
*/