import { useState } from "react";
import EmployeeList from "../components/EmployeeList";
import EmployeeForm from "../components/EmployeeForm";
import SearchBar from "../components/SearchBar";

/**
 * EmployeeDirectory component manages the entire employee directory.
 * Handles adding, deleting, and searching employees.
 */
const EmployeeDirectory = () => {
  // State to store list of employees
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Shivansh Sharma",
      role: "Software Engineer",
      department: "IT",
    },
    { id: 2, name: "Pooja Sharma", role: "Manager", department: "HR" },
    { id: 3, name: "Karan Sharma", role: "Sales", department: "Marketing" },
  ]);

  // State to store search input
  const [searchTerm, setSearchTerm] = useState("");

  // Function to add new employee
  const handleAdd = (employee) => {
    setEmployees([...employees, { id: Date.now(), ...employee }]);
  };

  // Function to delete employee by ID
  const handleDelete = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  // Filter employees based on search input (name, role, or department)
  const filteredEmployees = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        background: "linear-gradient(135deg, #74ebd5, #acb6e5)", // gradient background
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* Main content container */}
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          backgroundColor: "rgba(255, 255, 255, 0.95)", // slightly transparent white
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        }}
      >
        {/* Header */}
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#2c3e50",
            fontSize: "28px",
            fontWeight: "600",
          }}
        >
          Employee Directory
        </h2>

        {/* Search Bar */}
        <div style={{ marginBottom: "20px" }}>
          <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
        </div>

        {/* Employee Form */}
        <div
          style={{
            padding: "20px",
            backgroundColor: "#f7f9fb",
            borderRadius: "10px",
            marginBottom: "30px",
            boxShadow: "inset 0 1px 3px rgba(0,0,0,0.05)",
          }}
        >
          <EmployeeForm onAdd={handleAdd} />
        </div>

        {/* Employee List */}
        <div>
          <EmployeeList employees={filteredEmployees} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDirectory;
