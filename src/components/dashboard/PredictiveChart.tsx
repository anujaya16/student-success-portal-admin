
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { month: 'Jan', actual: 65, predicted: 60 },
  { month: 'Feb', actual: 72, predicted: 70 },
  { month: 'Mar', actual: 68, predicted: 71 },
  { month: 'Apr', actual: 78, predicted: 76 },
  { month: 'May', actual: 82, predicted: 80 },
  { month: 'Jun', actual: 79, predicted: 82 },
  { month: 'Jul', actual: null, predicted: 84 },
  { month: 'Aug', actual: null, predicted: 88 },
];

const PredictiveChart = () => {
  return (
    <Card className="col-span-full xl:col-span-2">
      
      <CardContent className="pt-4">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" />
              <YAxis domain={[0, 100]} tickCount={6} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #e2e8f0',
                }}
              />
              <defs>
                <linearGradient id="actualGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2D7FF9" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#2D7FF9" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="predictedGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#20C997" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#20C997" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="actual"
                stroke="#2D7FF9"
                fill="url(#actualGradient)"
                strokeWidth={2}
                dot={{ r: 4, strokeWidth: 2 }}
                activeDot={{ r: 6 }}
              />
              <Area
                type="monotone"
                dataKey="predicted"
                stroke="#20C997"
                fill="url(#predictedGradient)"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ r: 4, strokeWidth: 2 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default PredictiveChart;
