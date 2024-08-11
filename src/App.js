import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddEmployee from "./component/AddEmployee";
import Navbar from "./component/Navbar";
import EmployeeList from "./component/EmployeeList";
import UpdateEmployee from "./component/UpdateEmployee";

function App() {
  return (
    <>
      {/* Router */}

      <BrowserRouter>
        <Navbar />

        {/* defining different routes */}
        <Routes>
          <Route index element={<EmployeeList />} />
          <Route path="/" element={<EmployeeList />} />
          <Route path="/emplyeeList" element={<EmployeeList />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/editEmployee/:id" element={<UpdateEmployee />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
