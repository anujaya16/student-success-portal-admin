
import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Clock } from "lucide-react";

const courseData = [
  {
    id: 1,
    title: "Mathematics for Technology I",
    description: "Fundamentals of mathematics for computer science",
    instructor: "Dr. Rasika Rajapaksha",
    students: 32,
    credits: 3,
    duration: "16 weeks",
    category: "Computer Science",
    level: "Beginner"
  },
  {
    id: 2,
    title: "Advanced Mathematics",
    description: "Calculus, linear algebra and differential equations",
    instructor: "Prof. N. G. J. Dias",
    students: 28,
    credits: 4,
    duration: "14 weeks",
    category: "Computer Science",
    level: "Advanced"
  },
  {
    id: 3,
    title: "Networking I",
    description: "Networking for computer science",
    instructor: "Mr. L. Akash Tharuka",
    students: 25,
    credits: 4,
    duration: "15 weeks",
    category: "Computer Science",
    level: "Intermediate"
  },
  
];

const Courses = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Courses</h1>
        <p className="text-muted-foreground">Manage and track all courses</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        {courseData.map((course) => (
          <Card key={course.id} className="overflow-hidden">
            <CardHeader className="bg-muted/50 pb-4">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <p className="text-muted-foreground mt-1">{course.instructor}</p>
                </div>
                <Badge variant={
                  course.level === "Beginner" ? "secondary" :
                  course.level === "Intermediate" ? "outline" : "default"
                }>
                  {course.level}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="mb-4">{course.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{course.students} Students</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{course.credits} Credits</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium">{course.category}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Courses;
