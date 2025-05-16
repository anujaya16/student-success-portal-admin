
import React from 'react';
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
    <Card>
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
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis 
                dataKey="name" 
                type="category" 
                scale="band"
                width={100}
                tick={{ fontSize: 12 }}
              />
              <Tooltip 
                formatter={(value) => [`${value}%`, 'Impact']}
                labelStyle={{ fontWeight: 'bold' }}
              />
              <Bar 
                dataKey="value" 
                fill="#3b82f6"
                radius={[0, 4, 4, 0]}
                name="Impact"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default PredictionFactors;
