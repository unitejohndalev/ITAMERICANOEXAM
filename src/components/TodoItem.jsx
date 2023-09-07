/* eslint-disable react/prop-types */
import React from "react";

const TodoItem = ({ onEditClick, onDeleteClick, todos, isEditing }) => {
  return (
    <div className="flex flex-col items-center mt-[50px] ">
      <div className="w-[90%] md:w-[600px]">
        {todos.map((todo) => {
          return (
            <ul key={todo.id} className="flex justify-between mb-2">
            <p className="w-[380px] text-center">

              {todo.text}
            </p>
              {!isEditing && (
                <>
                  <button
                    className="px-6 py-1 text-white bg-blue-500 rounded-sm"
                    onClick={() => onEditClick(todo)}>
                    Edit
                  </button>
                  <button
                    className="px-6 py-1 text-white bg-red-500 rounded-sm"
                    onClick={() => onDeleteClick(todo.id)}>
                    Delete
                  </button>
                </>
              )}
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default TodoItem;
