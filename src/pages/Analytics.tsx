
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

const Analytics = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="text-muted-foreground">View detailed analytics about student performance</p>
      </div>
      <div className="glass-card p-6 rounded-2xl">
        <p className="text-lg">Analytics dashboard content will appear here.</p>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
