/* eslint-disable react/prop-types */
import React from "react";

const EditForm = ({
  currentTodo,
  setIsEditing,
  onEditInputChange,
  onEditFormSubmit,
}) => {
  return (
    <div className="flex items-center justify-center w-full">
      <form onSubmit={onEditFormSubmit} className="mt-5 w-[400px]  md:w-[600px]">
        <h2 className="text-[2rem] font-bold pb-20 text-center">Edit Todo</h2>
        <div className="flex flex-col justify-between w-full gap-y-3 md:gap-y-0 md:flex-row">
          <label htmlFor="updateTodo" className="text-[1.5rem]">Update todo:</label>
          <input
            className="w-full md:w-[250px] border-b-2 border-black outline-none placeholder:text-center"
            type="text"
            name="updateTodo"
            placeholder="Update todo"
            value={currentTodo}
            onChange={onEditInputChange}
          />
          <button
            type="submit"
            className="px-4 py-1 text-white bg-blue-500 rounded-sm">
            Update
          </button>
          <button
            className="px-4 py-1 text-white bg-blue-500 rounded-sm"
            onClick={() => setIsEditing((prev) => !prev)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
