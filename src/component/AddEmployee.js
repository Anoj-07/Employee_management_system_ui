import React, { useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  // use state Hook
  //The useState hook is one of the fundamental hooks in React. It allows you to add state to functional components. 
  //Before hooks, state management was only possible in class components, but useState makes it easy to use state in functional components as well.
  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
  });

  // Navigate Hook (useNavigate)
 const navigate = useNavigate();

  //  The function handleChange is commonly used in React to handle changes in form input fields.
  // This pattern is particularly useful when managing the state of form data.
  const handleChange = (e) => {
    const value = e.target.value; // Get the value from the input field that triggered the event
    setEmployee({
      ...employee, // Spread the existing properties of the employee object
      [e.target.name]: value, // Update the property that matches the name of the input field
    });
  };

  //   function for save Employee (save)
  const saveEmployee = (e) => {
    e.preventDefault(); //prevent the refreshing the data
    EmployeeService.saveEmployee(employee)
      .then((response) => {
        console.log(response);
        navigate("/emplyeeList")
      })
      .catch((error) => {
        console.log(error);
      });
  };


  //function for reset (clear)
  const reset = (e) =>{
    e.preventDefault(); //it make refresh default
    setEmployee(
      {
        id: "",
        firstName: "",
        lastName: "",
        emailId: "",
      });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add New Employee</h1>
        </div>

        {/* form detail */}
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            first Name
          </label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        {/* last name */}
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        {/* email id */}
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Email
          </label>
          <input
            type="email"
            name="emailId"
            value={employee.emailId}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        {/* Button Save & clear*/}
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={saveEmployee}
            className="rounded text-white font-semibold bg-green-500 hover:bg-green-700 py-2 px-6 "
          >
            Save
          </button>

          <button 
          onClick={reset}
          className="rounded text-white font-semibold bg-red-500 hover:bg-red-700 py-2 px-6 ">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
