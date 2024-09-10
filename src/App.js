import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "./components/AddEmployee";
import Header from "./components/Header";

function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Shiban",
      role: "Developer",
      img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg",
    },
    {
      id: 2,
      name: "Sourab",
      role: "Dev",
      img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg",
    },
    {
      id: 3,
      name: "Abhishek",
      role: "Mech",
      img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg",
    },
    {
      id: 4,
      name: "Elvis",
      role: "Pump",
      img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg",
    },
    {
      id: 5,
      name: "Shiban",
      role: "Developer",
      img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg",
    },
    {
      id: 6,
      name: "Sourab",
      role: "Dev",
      img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg",
    },
    {
      id: 7,
      name: "Abhishek",
      role: "Mech",
      img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg",
    },
    {
      id: 8,
      name: "Elvis",
      role: "Pump",
      img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg",
    },
    // {
    //   name: "Abhay",
    //   role: { role },
    //   img: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg",
    // },
  ]);
  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }

  const showEmployees = true;
  return (
    <div className="App bg-gray-300 min-h-screen">
      <Header />
      {showEmployees ? (
        <>
          <div className="flex flex-wrap justify-center my-2">
            {employees.map((employee) => {
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
                />
              );
            })}
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
