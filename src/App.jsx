import React from "react";
import EmployeeDirectory from "./pages/EmployeeDirectory";

function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif", // Set default font
        backgroundColor: "#e9ecef", // Light gray background
        minHeight: "100vh", // Full viewport height
        padding: "20px", // Some padding around content
      }}
    >
      <nav
        style={{
          backgroundColor: "#343a40", // Dark navbar background
          padding: "10px 20px", // Padding inside navbar
          
        }}
      >
        <span
          style={{
            color: "#fff", // White text
            fontSize: "22px", // Font size for navbar title
            fontWeight: "bold", // Bold text
          }}
        >
          Employee Directory
        </span>
      </nav>
      {/* Render the main Employee Directory */}
      <EmployeeDirectory />

      {/* Employee Directory Navbar Styling */}
    </div>
  );
}

export default App;
