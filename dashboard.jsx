// DoctorDashboard.jsx
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Stethoscope, MessageSquare, User, LogOut } from "lucide-react";

export default function DoctorDashboard() {
  const [doctorName] = useState("Dr. A. Sharma");
  const [appointments] = useState([
    { id: 1, patient: "Ramesh Kumar", time: "10:30 AM", type: "Video Call" },
    { id: 2, patient: "Sunita Devi", time: "11:15 AM", type: "In-Person" },
    { id: 3, patient: "Baldev Singh", time: "12:00 PM", type: "Follow-up" },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white p-5 flex flex-col">
        <h2 className="text-2xl font-bold mb-8">TeleHealth Nabha</h2>
        <nav className="space-y-4">
          <Button variant="ghost" className="w-full justify-start text-white hover:bg-blue-700">
            <Stethoscope className="mr-2" /> Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start text-white hover:bg-blue-700">
            <Calendar className="mr-2" /> Appointments
          </Button>
          <Button variant="ghost" className="w-full justify-start text-white hover:bg-blue-700">
            <MessageSquare className="mr-2" /> Messages
          </Button>
          <Button variant="ghost" className="w-full justify-start text-white hover:bg-blue-700">
            <User className="mr-2" /> Patients
          </Button>
          <Button variant="ghost" className="w-full justify-start text-white hover:bg-blue-700 mt-auto">
            <LogOut className="mr-2" /> Logout
          </Button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-semibold mb-4">Welcome, {doctorName}</h1>
        <p className="text-gray-600 mb-6">Here are your upcoming appointments:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appointments.map((appt) => (
            <Card key={appt.id} className="shadow-md rounded-2xl">
              <CardContent className="p-4">
                <h2 className="text-xl font-bold mb-2">{appt.patient}</h2>
                <p className="text-gray-600">⏰ {appt.time}</p>
                <p className="text-gray-600">📌 {appt.type}</p>
                <Button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Join Session
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
