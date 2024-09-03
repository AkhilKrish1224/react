import "./App.css";
import Employee from "./components/Employee";
import { useState } from "react";

function App() {
  const [role, setRole] = useState("dev");
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <Employee name="Shiban" role="Intern" />
          <Employee name="Sourab" role="Dev" />
          <Employee name="Abhishek" role="Mech" />
          <Employee name="Elvis" role="Pump" />
          <Employee name="Abhay" role={role} />
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
