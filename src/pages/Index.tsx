
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import StatCard from '@/components/dashboard/StatCard';
import PredictiveChart from '@/components/dashboard/PredictiveChart';
import StudentTable from '@/components/dashboard/StudentTable';
import PredictionFactors from '@/components/dashboard/PredictionFactors';
import RecentActivities from '@/components/dashboard/RecentActivities';
import { Users, BookOpen, AlertTriangle, BarChart } from 'lucide-react';

const Index = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Overview</h1>
        <p className="text-muted-foreground">Welcome to your student performance prediction admin panel</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Total Students" 
          value="1,245" 
          description="Across all years" 
          icon={<Users className="h-5 w-5 text-dashboard-blue dark:text-blue-400" />}
          trend="up"
          trendValue="4.5% from last semester"
          type="info"
        />
        <StatCard 
          title="Prediction Accuracy" 
          value="94.2%" 
          description="Current semester" 
          icon={<BarChart className="h-5 w-5 text-dashboard-green dark:text-green-400" />}
          trend="up"
          trendValue="1.2% improvement"
          type="success"
        />
        <StatCard 
          title="At-Risk Students" 
          value="78" 
          description="Requiring intervention" 
          icon={<AlertTriangle className="h-5 w-5 text-dashboard-orange dark:text-orange-400" />}
          trend="down"
          trendValue="3.8% from last semester"
          type="warning"
        />
        <StatCard 
          title="Courses Monitored" 
          value="32" 
          description="Across all departments" 
          icon={<BookOpen className="h-5 w-5 text-dashboard-purple dark:text-purple-400" />}
          type="default"
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
        <div className="xl:col-span-2 glass-card rounded-2xl">
          <PredictiveChart />
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="glass-card rounded-2xl">
            <PredictionFactors />
          </div>
          <div className="glass-card rounded-2xl">
            <RecentActivities />
          </div>
        </div>
      </div>

      <div className="mb-8 glass-card rounded-2xl">
        <StudentTable />
      </div>
    </DashboardLayout>
  );
};

export default Index;
