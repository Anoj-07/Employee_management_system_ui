import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import employeeServiceInstance from "../services/EmployeeService";
import Emloyee from "./Emloyee";

const EmployeeList = () => {
  // Router to redirect to add employee page
  const navigate = useNavigate();

  //Hooks (use State)
  const [Loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);

  // to fetch the data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await employeeServiceInstance.getEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // Method for delete
  const deleteEmployee = (e, id) => {
    e.preventDefault();
    employeeServiceInstance.deleteEmployee(id).then((res) => {
      if (employees) {
        setEmployees((prevElement) => {
          return prevElement.filter((employee) => employee.id !== id);
        });
      }
    });
  };


  return (
    <div className="container mx-auto my-8">
      <div className="h-12">
        <button
          onClick={() => navigate("/addEmployee")}
          className="rounded bg-blue-700  text-white px-6 py-2 font-semibold"
        >
          AddEmployee
        </button>
      </div>

      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gradient-to-tl from-indigo-100 via-blue-200 to-white">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                first Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                last Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Email ID
              </th>
              <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          {/* It is for need to complete loading to fetch the data */}
          {!Loading && (
            <tbody className="bg-white">
              {employees.map((employee) => (
                // props
                <Emloyee
                  employee={employee}
                  deleteEmployee={deleteEmployee}
                  key={employee.id}
                />
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
