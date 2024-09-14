import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { useContext, useEffect } from "react";
import { LoginContext } from "../App";

const navigation = [
  { name: "Employees", href: "/employees" },
  { name: "Customers", href: "/customers" },
  { name: "Dictionary", href: "/dictionary" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header(props) {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);

  return (
    <>
      <Disclosure as="nav" className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-14 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      // aria-current={item.current ? "page" : undefined}
                      // className={classNames(
                      //   item.current
                      //     ? "no-underline bg-gray-900 text-white"
                      //     : "no-underline text-gray-300 hover:bg-gray-700 hover:text-white",
                      //   "rounded-md px-3 py-2 text-sm font-medium"
                      // )}
                      className={({ isActive }) => {
                        return (
                          "no-underline rounded-md px-3 py-2 text-sm font-medium " +
                          (isActive
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white")
                        );
                      }}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                  <NavLink
                    to={loggedIn ? "/logout" : "/login"}
                    className="no-underline rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    // aria-current={item.current ? "page" : undefined}
                    // className={classNames(
                    //   item.current
                    //     ? "no-underline bg-gray-900 text-white"
                    //     : "no-underline text-gray-300 hover:bg-gray-700 hover:text-white",
                    //   "rounded-md px-3 py-2 text-sm font-medium"
                    // )}
                  >
                    {loggedIn ? "Logout" : "Login"}
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                // aria-current={item.current ? "page" : undefined}
                // className={classNames(
                //   item.current
                //     ? "no-underline bg-gray-900 text-white"
                //     : "no-underline text-gray-300 hover:bg-gray-700 hover:text-white",
                //   "rounded-md px-3 py-2 text-sm font-medium"
                // )}
                className={({ isActive }) => {
                  return (
                    "no-underline block rounded-md px-3 py-2 text-base font-medium " +
                    (isActive
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white")
                  );
                }}
              >
                {item.name}
              </NavLink>
            ))}
            <NavLink
              to={loggedIn ? "/logout" : "/login"}
              className="no-underline block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              // aria-current={item.current ? "page" : undefined}
              // className={classNames(
              //   item.current
              //     ? "no-underline bg-gray-900 text-white"
              //     : "no-underline text-gray-300 hover:bg-gray-700 hover:text-white",
              //   "rounded-md px-3 py-2 text-sm font-medium"
              // )}
            >
              {loggedIn ? "Logout" : "Login"}
            </NavLink>
          </div>
        </DisclosurePanel>
      </Disclosure>
      <div className="bg-gray-300">
        <div className="max-w-7xl mx-auto min-h-screen px-3 py-2">
          {props.children}
        </div>
      </div>
    </>
  );
}
