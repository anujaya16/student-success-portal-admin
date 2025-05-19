
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Filter } from 'lucide-react';

interface Student {
  id: string;
  name: string;
  year: string;
  predictedPerformance: number;
  status: 'At Risk' | 'Warning' | 'Good' | 'Excellent';
  lastAssessment: string;
  email: string;
}

const students: Student[] = [
  {
    id: '1',
    name: 'Akila Fernando',
    year: 'Year 2',
    predictedPerformance: 92,
    status: 'Excellent',
    lastAssessment: '2 days ago',
    email: 'akila.F@university.edu',
  },
  {
    id: '2',
    name: 'Hiruna Mendis',
    year: 'Year 2',
    predictedPerformance: 78,
    status: 'Good',
    lastAssessment: '3 days ago',
    email: 'hiruna.M@university.edu',
  },
  {
    id: '3',
    name: 'Renuja Sathnidu',
    year: 'Year 2',
    predictedPerformance: 65,
    status: 'Warning',
    lastAssessment: '1 week ago',
    email: 'renuja.S@university.edu',
  },
  {
    id: '4',
    name: 'Anujaya Jayanath',
    year: 'Year 2',
    predictedPerformance: 45,
    status: 'At Risk',
    lastAssessment: '5 days ago',
    email: 'anujaya.J@university.edu',
  },
  {
    id: '5',
    name: 'Awanki Thathsarani',
    year: 'Year 1',
    predictedPerformance: 88,
    status: 'Good',
    lastAssessment: '1 day ago',
    email: 'awanki.T@university.edu',
  },
  {
    id: '6',
    name: 'Tharushi Dilshara',
    year: 'Year 3',
    predictedPerformance: 72,
    status: 'Good',
    lastAssessment: '4 days ago',
    email: 'tharushi.D@university.edu',
  }
  
];

const getStatusColor = (status: Student['status']) => {
  switch (status) {
    case 'At Risk':
      return 'bg-red-100 text-red-800';
    case 'Warning':
      return 'bg-orange-100 text-orange-800';
    case 'Good':
      return 'bg-green-100 text-green-800';
    case 'Excellent':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const Students = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Students</h1>
        <p className="text-muted-foreground">Manage and view student performance predictions</p>
      </div>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-4">
          <CardTitle>Student List</CardTitle>
          <Button>Add New Student</Button>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search students..." className="pl-10 w-full" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline">Export</Button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Year</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead className="text-center">Predicted Score</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Assessment</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell className="font-medium">{student.name}</TableCell>
                    <TableCell>{student.year}</TableCell>
                    <TableCell>{student.email}</TableCell>
                    <TableCell className="text-center">{student.predictedPerformance}%</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(student.status)} variant="outline">
                        {student.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{student.lastAssessment}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm">View</Button>
                        <Button variant="outline" size="sm">Edit</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="mt-6 flex justify-between items-center">
            <div className="text-sm text-muted-foreground">
              Showing 10 of 125 students
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default Students;
