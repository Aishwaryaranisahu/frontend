<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Doctor Dashboard - Telemedicine Nabha</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #f5f7fa;
      color: #333;
    }
    .sidebar {
      width: 220px;
      background: #003366;
      color: white;
      position: fixed;
      top: 0;
      bottom: 0;
      padding: 20px;
    }
    .sidebar h2 {
      font-size: 20px;
      margin-bottom: 30px;
    }
    .sidebar a {
      display: block;
      color: white;
      text-decoration: none;
      padding: 10px 0;
      margin: 5px 0;
    }
    .sidebar a:hover {
      background: #0055aa;
      border-radius: 5px;
      padding-left: 10px;
    }
    .main {
      margin-left: 240px;
      padding: 20px;
    }
    h1 {
      font-size: 24px;
      margin-bottom: 10px;
    }
    .card {
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0px 2px 5px rgba(0,0,0,0.1);
      margin-bottom: 20px;
    }
    .card h2 {
      margin-top: 0;
    }
    .appointments ul, .patients ul {
      list-style: none;
      padding: 0;
    }
    .appointments li, .patients li {
      padding: 10px;
      border-bottom: 1px solid #eee;
    }
    .btn {
      background: #003366;
      color: white;
      padding: 8px 12px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .btn:hover {
      background: #0055aa;
    }
    textarea {
      width: 100%;
      height: 100px;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 10px;
      margin-bottom: 10px;
    }
  </style>
</head>
<body>

  <!-- Sidebar -->
  <div class="sidebar">
    <h2>TeleHealth Nabha</h2>
    <a href="#dashboard">Dashboard</a>
    <a href="#appointments">Appointments</a>
    <a href="#patients">Patients</a>
    <a href="#prescription">Write Prescription</a>
    <a href="#profile">Profile Settings</a>
  </div>

  <!-- Main content -->
  <div class="main">
    <h1>Welcome, Dr. Sharma</h1>

    <!-- Upcoming Appointments -->
    <div class="card appointments" id="appointments">
      <h2>Upcoming Appointments</h2>
      <ul>
        <li><strong>Ramesh Kumar</strong> - 10:30 AM (Video Call)</li>
        <li><strong>Sunita Devi</strong> - 11:15 AM (In-Person)</li>
        <li><strong>Baldev Singh</strong> - 12:00 PM (Follow-up)</li>
      </ul>
    </div>

    <!-- Patient Records -->
    <div class="card patients" id="patients">
      <h2>Patient Records</h2>
      <ul>
        <li><strong>Ramesh Kumar</strong> - Diabetes, BP</li>
        <li><strong>Sunita Devi</strong> - Pregnancy Care</li>
        <li><strong>Baldev Singh</strong> - Post Surgery Follow-up</li>
      </ul>
    </div>

    <!-- Write Prescription -->
    <div class="card" id="prescription">
      <h2>Write Prescription</h2>
      <textarea placeholder="Enter prescription here..."></textarea>
      <button class="btn">Save Prescription</button>
    </div>

    <!-- Profile Settings -->
    <div class="card" id="profile">
      <h2>Profile Settings</h2>
      <p><strong>Name:</strong> Dr. Sharma</p>
      <p><strong>Email:</strong> dr.sharma@example.com</p>
      <p><strong>Specialization:</strong> General Physician</p>
      <button class="btn">Edit Profile</button>
    </div>
  </div>

  <script>
    // Redux placeholder integration example
    // This can later be connected to a Redux store
    const state = {
      doctor: { name: "Dr. Sharma" },
      appointments: [
        { patient: "Ramesh Kumar", time: "10:30 AM", type: "Video Call" },
        { patient: "Sunita Devi", time: "11:15 AM", type: "In-Person" },
        { patient: "Baldev Singh", time: "12:00 PM", type: "Follow-up" }
      ]
    };

    console.log("Redux state placeholder:", state);
  </script>
</body>
</html>
