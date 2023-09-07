import React from "react";
import { Link } from "react-router-dom";

const AddForm = ({ todo, onAddInputChange, onAddFormSubmit }) => {
  return (
    <div className="flex items-center justify-center w-full">
      <form onSubmit={onAddFormSubmit} className="mt-[150px] w-[400px] md:w-[600px]">
        
        <div className="flex flex-col w-full">

        <h1 className="text-[2rem] font-bold pb-2 text-center">
          Add Todo Application
        </h1>
        <Link to={"/"} className="flex justify-end pb-20">

        <button
          className="px-3 py-1 text-white bg-red-500 rounded-sm"
         >
          Logout
        </button>
        </Link>
        </div>
        <div className="flex justify-between md:w-full">
          <label htmlFor="todo" className="text-[1.5rem] ">
            Create todo:
          </label>
          <input
            className="w-[150px] md:w-[250px] border-b-2 border-black outline-none placeholder:text-center"
            type="text"
            name="todo"
            placeholder="Create new todo"
            value={todo}
            onChange={onAddInputChange}
          />
          <button
            type="sumbit"
            className="px-6 py-1 text-white bg-blue-500 rounded-sm">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
