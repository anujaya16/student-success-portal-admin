import React from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { students } from "./Students"; // Import the array
import { getStatusColor } from "@/components/dashboard/StudentTable"; // Import the function

const StudentDetails = () => {
  const { id } = useParams();
  const student = students.find((s) => String(s.id) === String(id));

  return (
    <DashboardLayout>
      <div className="max-w-md mx-auto bg-white dark:bg-slate-900 rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-6">Student Details</h2>
        {/* Profile image */}
        <div className="flex justify-center mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Student profile"
            className="w-24 h-24 rounded-full border-2 border-gray-300 dark:border-gray-600 bg-white"
          />
        </div>
        <p className="mb-3"><strong>ID:</strong> {id}</p>
        <p className="mb-3"><strong>Name:</strong> {student?.name}</p>
        <p className="mb-3"><strong>Year:</strong> {student?.year}</p>
        <p className="mb-3"><strong>Email:</strong> {student?.email}</p>
        <p className="mb-3 flex items-center">
  <strong>Status:</strong>
  <span
    className={`ml-2 border border-gray-300 dark:border-gray-600 rounded px-3 py-1 text-sm font-medium ${
      student ? getStatusColor(student.status) : "bg-gray-100 text-gray-800"
    }`}
  >
    {student?.status ?? "Unknown"}
  </span>
</p>
        <p className="mb-3"><strong>Predicted Score:</strong> {student?.predictedPerformance}%</p>
        <p className="mb-3"><strong>Last Assessment:</strong> {student?.lastAssessment}</p>
      </div>
    </DashboardLayout>
  );
};

export default StudentDetails;