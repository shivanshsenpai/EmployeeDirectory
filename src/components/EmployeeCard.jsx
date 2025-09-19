import React from "react";

/**
 * EmployeeCard component displays individual employee details
 * and provides a delete button to remove the employee.
 * @param {Object} employee - Employee data (name, role, department, id)
 * @param {Function} onDelete - Function to delete the employee
 */
const EmployeeCard = ({ employee, onDelete }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "15px",
        marginBottom: "15px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      {/* Container for Name, Role, and Department */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {/* Employee Name */}
        <div
          style={{
            flex: "1",
            minWidth: "150px",
            textAlign: "center",
            border: "1px solid #eee",
            borderRadius: "6px",
            padding: "10px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <strong>Name:</strong> <br /> {employee.name}
        </div>

        {/* Employee Role */}
        <div
          style={{
            flex: "1",
            minWidth: "150px",
            textAlign: "center",
            border: "1px solid #eee",
            borderRadius: "6px",
            padding: "10px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <strong>Role:</strong> <br /> {employee.role}
        </div>

        {/* Employee Department */}
        <div
          style={{
            flex: "1",
            minWidth: "150px",
            textAlign: "center",
            border: "1px solid #eee",
            borderRadius: "6px",
            padding: "10px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <strong>Department:</strong> <br /> {employee.department}
        </div>
      </div>

      {/* Delete Button */}
      <div style={{ textAlign: "right", marginTop: "12px" }}>
        <button
          onClick={() => onDelete(employee.id)} // Call delete function with employee id
          style={{
            backgroundColor: "#dc3545",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            padding: "6px 12px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
