import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Customers() {
  const [customers, setCustomers] = useState();
  useEffect(() => {
    console.log("fetching...");
    fetch("http://localhost:8000/api/customers/")
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data.customers);
        console.log(data);
      });
  }, []);
  return (
    <>
      <h1>Here are our Customers: </h1>
      {customers
        ? customers.map((customer) => {
            return (
              <ul>
                <li>
                  <Link to={"/customers/" + customer.id}>{customer.name}</Link>
                </li>
              </ul>
            );
          })
        : null}
    </>
  );
}
