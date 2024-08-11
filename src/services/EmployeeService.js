import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {

    // To save data
   saveEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
   }

   //To get data
   getEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL);
   }

   //To delete
   deleteEmployee(id) {
    return axios.delete(EMPLOYEE_API_BASE_URL + "/" + id);
   }

   //To update
   getEmployeeById(id){
    return axios.get(EMPLOYEE_API_BASE_URL + "/" + id);
   }

   updateEmployee(employee, id){
    return axios.put(EMPLOYEE_API_BASE_URL + "/" + id, employee);
   }
}

const employeeServiceInstance = new EmployeeService();

// Step 3: Export the instance as the default export
export default employeeServiceInstance;

