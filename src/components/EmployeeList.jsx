import EmployeeCard from "./EmployeeCard";

/**
 * EmployeeList component displays a list of employees.
 * It maps through the employees array and renders EmployeeCard for each.
 * @param {Array} employees - List of employee objects
 * @param {Function} onDelete - Function to delete an employee
 */
const EmployeeList = ({ employees, onDelete }) => {
  return (
    <div>
      {employees.length > 0 ? (
        // If employees exist, map through and show EmployeeCard
        employees.map((emp) => (
          <EmployeeCard key={emp.id} employee={emp} onDelete={onDelete} />
        ))
      ) : (
        // If no employees, show a message
        <p style={{ color: "#666", fontStyle: "italic" }}>
          No employees found.
        </p>
      )}
    </div>
  );
};

export default EmployeeList;
