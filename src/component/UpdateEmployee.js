import React, {useEffect, useState}from "react";
import {  useNavigate, useParams} from "react-router-dom";
import employeeServiceInstance from "../services/EmployeeService";

const UpdateEmployee = () => {

    //useParam from react route dom
    const {id} = useParams();


    const naviagate = useNavigate();

    //useState
    const [employee, setemployee] = useState({
        id: "",
        firstName: "",
        lastName: "",
        emailId: "",
    });

    const handleChange = (e) => {
        const value = e.target.value; // Get the value from the input field that triggered the event
        setemployee({
          ...employee, // Spread the existing properties of the employee object
          [e.target.name]: value, // Update the property that matches the name of the input field
        });
      };


      //fetching data from the server
      useEffect(() => { 
        const fetchData = async () => {
            try {
                const response = await employeeServiceInstance.getEmployeeById(id);
                setemployee(response.data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
           }, [id])
      

  const updateEmployees = (e) => {
    e.preventDefault();
    employeeServiceInstance.updateEmployee(employee, id)
    .then((response) => {
        naviagate("/emplyeeList");
    })
        .catch((error)=>{
            console.log(error);
        });
    };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Update Employee</h1>
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
            onClick={updateEmployees}
            className="rounded text-white font-semibold bg-green-500 hover:bg-green-700 py-2 px-6 "
          >
            update
          </button>

          <button 
          onClick={() => naviagate("/emplyeeList")}
          className="rounded text-white font-semibold bg-red-500 hover:bg-red-700 py-2 px-6 ">
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployee;
