/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from "react";

//create context
export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  //get list in local storage store in in todos state
  const [todos, setTodos] = useState(() => {
    const saveTodos = localStorage.getItem("todos");
    if (saveTodos) {
      return JSON.parse(saveTodos);
    }
    return [];
  });

  //put todos in localstorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); //set todos as depencies since it changes data

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos
      }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
