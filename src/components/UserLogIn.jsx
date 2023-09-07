import React, { useState } from "react";

import TodoList from "./TodoList";
import { Link } from "react-router-dom";

const UserLogIn = () => {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    const { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div>{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="flex justify-center pt-5">
      <form onSubmit={handleSubmit} className="">
        <div className="flex justify-between pb-5">
          <label className="pr-5">Username </label>
          <input
            className="w-[150px] md:w-[250px] border-b-2 border-black outline-none"
            type="text"
            name="uname"
            required
          />
          {renderErrorMessage("uname")}
        </div>
        <div className="flex justify-between pb-5">
          <label className="pr-5">Password </label>
          <input
            className="w-[150px] md:w-[250px] border-b-2 border-black outline-none"
            type="password"
            name="pass"
            required
          />
          {renderErrorMessage("pass")}
        </div>
        <div className="flex justify-center w-full mt-5">
          <input
            className="px-6 py-1 text-white bg-blue-500 rounded-sm"
            type="submit"
          />
        </div>
      </form>
    </div>
  );

  return (
    <div className="flex justify-center w-full">
      <div className=" mt-[100px] w-[600px] ">
        <div className="">
          {isSubmitted ? (
            <p className="text-[1rem] text-end">
              <Link
                to={"/"}
                className="px-6 py-2 text-white bg-red-500 rounded-sm ">
                Log Out
              </Link>
            </p>
          ) : (
            <div className="flex flex-col text-center gap-y-5">
              <div>
                <p>username: user1</p>
                <p>password: pass1</p>
              </div>
              <div>
                <p>username: user2</p>
                <p>password: pass2</p>
              </div>
              <p className="text-[2rem] text-center pb-5">Sign In</p>
            </div>
          )}
        </div>
        {isSubmitted ? (
          <div>
            <TodoList />
          </div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
};

export default UserLogIn;
