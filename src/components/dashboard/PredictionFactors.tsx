
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const factors = [
  { name: 'Attendance', value: 85, fill: '#2D7FF9' },
  { name: 'Homework', value: 72, fill: '#20C997' },
  { name: 'Engagement', value: 65, fill: '#FF922B' },
  { name: 'Prior Grades', value: 90, fill: '#7048E8' },
  { name: 'Test Scores', value: 78, fill: '#51CF66' },
];

const PredictionFactors = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Prediction Factors</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={factors}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              layout="vertical"
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis dataKey="name" type="category" scale="band" width={100} />
              <Tooltip
                formatter={(value) => [`${value}%`, 'Importance']}
                contentStyle={{
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #e2e8f0',
                }}
                cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
              />
              <Bar 
                dataKey="value" 
                radius={[0, 4, 4, 0]}
                fill={(entry) => entry.fill}
                barSize={20}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default PredictionFactors;
