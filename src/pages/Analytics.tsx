
import React from 'react';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Sample data for charts
const weeklyData = [
  { name: 'M', value: 5 },
  { name: 'T', value: 10 },
  { name: 'W', value: 7 },
  { name: 'T', value: 2 },
  { name: 'F', value: 12 },
  { name: 'S', value: 15 },
  { name: 'S', value: 29 }
];

const Analytics = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
        <p className="text-muted-foreground">View detailed analytics about student performance</p>
      </div>

      {/* Daily Attendance Chart */}
      <Card className="glass-card hover-scale mb-8">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-medium">Daily Attendance</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="h-[300px] w-full bg-dashboard-green/10 dark:bg-dashboard-green/20 rounded-lg overflow-hidden">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                <Line type="monotone" dataKey="value" stroke="#51CF66" strokeWidth={2} dot={{ r: 4 }} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--chart-text-color)' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--chart-text-color)' }} />
                <CartesianGrid vertical={false} stroke="rgba(255, 255, 255, 0.1)" />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="text-dashboard-green font-medium flex items-center">↑ 15% increase in attendance</span>
            <span className="text-xs text-muted-foreground">Updated 4 minutes ago</span>
          </div>
        </CardContent>
      </Card>

      {/* Analytics Summary */}
      <Card className="glass-card hover-scale">
        <CardHeader>
          <CardTitle>Attendance Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Insights</h3>
              <p className="text-muted-foreground mt-1">Current semester attendance is showing positive trends across most departments. The highest attendance rate is observed in Computer Science courses (87%), followed by Engineering (83%) and Business (79%).</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Recommendations</h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground mt-1">
                <li>Focus outreach on departments with attendance below 75%</li>
                <li>Implement early morning attendance incentives for 8 AM lectures</li>
                <li>Consider hybrid options for evening classes to boost participation</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default Analytics;
