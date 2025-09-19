import React, { useState } from "react";

/**
 * EmployeeForm component provides inputs to add a new employee.
 * It allows entering Name, Role, Department, and a custom department if "Other" is selected.
 * @param {Function} onAdd - Function to add a new employee
 */
const EmployeeForm = ({ onAdd }) => {
  // State for input fields
  const [name, setName] = useState(""); // Employee Name
  const [role, setRole] = useState(""); // Employee Role
  const [department, setDepartment] = useState(""); // Selected department
  const [customDepartment, setCustomDepartment] = useState(""); // Custom department if "Other"

  // List of departments
  const departments = ["HR", "IT", "Finance", "Marketing", "Other"];

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // If "Other" is selected, use customDepartment
    const finalDepartment =
      department === "Other" ? customDepartment : department;

    // Only add if all fields are filled
    if (name && role && finalDepartment) {
      onAdd({ name, role, department: finalDepartment });

      // Reset the form fields
      setName("");
      setRole("");
      setDepartment("");
      setCustomDepartment("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        marginBottom: "20px",
        alignItems: "center",
      }}
    >
      {/* Input for Employee Name */}
      <input
        type="text"
        placeholder="Employee Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          flex: "1",
          minWidth: "180px",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "6px",
        }}
      />

      {/* Input for Employee Role */}
      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        style={{
          flex: "1",
          minWidth: "180px",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "6px",
        }}
      />

      {/* Dropdown for Department selection */}
      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        style={{
          flex: "1",
          minWidth: "180px",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "6px",
          backgroundColor: "#fff",
        }}
      >
        <option value="">Select Department</option>
        {departments.map((dept, idx) => (
          <option key={idx} value={dept}>
            {dept}
          </option>
        ))}
      </select>

      {/* Show custom input if "Other" is selected */}
      {department === "Other" && (
        <input
          type="text"
          placeholder="Enter custom department"
          value={customDepartment}
          onChange={(e) => setCustomDepartment(e.target.value)}
          style={{
            flex: "1",
            minWidth: "180px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />
      )}

      {/* Submit Button */}
      <button
        type="submit"
        style={{
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          padding: "10px 18px",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Add Employee
      </button>
    </form>
  );
};

export default EmployeeForm;
