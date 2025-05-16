
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
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to your student performance prediction admin panel</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard 
          title="Total Students" 
          value="1,245" 
          description="Across all grades" 
          icon={<Users className="h-5 w-5 text-dashboard-blue" />}
          trend="up"
          trendValue="4.5% from last month"
        />
        <StatCard 
          title="Prediction Accuracy" 
          value="94.2%" 
          description="Current term" 
          icon={<BarChart className="h-5 w-5 text-dashboard-teal" />}
          trend="up"
          trendValue="1.2% improvement"
        />
        <StatCard 
          title="At-Risk Students" 
          value="78" 
          description="Requiring intervention" 
          icon={<AlertTriangle className="h-5 w-5 text-dashboard-orange" />}
          trend="down"
          trendValue="3.8% from last month"
        />
        <StatCard 
          title="Courses Monitored" 
          value="32" 
          description="Across all departments" 
          icon={<BookOpen className="h-5 w-5 text-dashboard-purple" />}
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
        <PredictiveChart />
        <div className="grid grid-cols-1 gap-6">
          <PredictionFactors />
          <RecentActivities />
        </div>
      </div>

      <div className="mb-6">
        <StudentTable />
      </div>
    </DashboardLayout>
  );
};

export default Index;
