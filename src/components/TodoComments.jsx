/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { TodoContext } from "../context/TodoContext";

const TodoComments = () => {
  const { id } = useParams();

  const { todos, setTodos } = useContext(TodoContext);

  const allTodoComments = todos.find((item) => {
    return item.id === parseInt(id);
  });

  const { text } = allTodoComments;
  console.log(text);

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [currentComment, setCurrentComment] = useState({});
  //edit state
  const [isEditing, setIsEditing] = useState(false);



  const submitComment = (e) => {
    e.preventDefault();
    if (comment !== "") {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          text: comment.trim(),
        },
      ]);
    }
    setComment("");
  };

  const deleteComment = (id) => {
    const removeComment = comments.filter((comment) => comment.id !== id);
    setComments(removeComment);
  };

  //edit input function
  const handleEditInputChange = (e) => {
    setCurrentComment({ ...currentComment, text: e.target.value });
  };

  //edit submit function
  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    handleUpdateComment(currentComment.id, currentComment);
  };

  // update function
  const handleUpdateComment = (id, updatedComment) => {
    const updatedItem = comments.map((comment) => {
      return comment.id === id ? updatedComment : comment;
    });
    setIsEditing(false);
    setComments(updatedItem);
  };
  //set isEdit function
  const handleEditClick = (comment) => {
    setIsEditing(true);
    setCurrentComment({ ...comment });
  };

 
  return (
    <div className="w-full h-[90vh] flex justify-center">
      <div className="w-[600px] mt-[150px]">
        <div className="flex justify-between">
          <h1>
            <p>Comment Section for:</p>
            <p className="italic">{text}</p>
          </h1>
          <Link to={"/todolist"}>close</Link>
        </div>

        {isEditing ? (
          <form onSubmit={handleEditFormSubmit} className="">
            <input
              value={currentComment.text}
              onChange={handleEditInputChange}
              type="text"
              className="w-full mt-5 border-b-2 border-black outline-none placeholder:text-center"
            />
            <button
              type="submit"
              className="px-6 py-1 mt-2 text-white bg-blue-500 rounded-sm">
              Update
            </button>
            <button
              className="px-4 py-1 ml-4 text-white bg-blue-500 rounded-sm"
              onClick={() => setIsEditing((prev) => !prev)}>
              Cancel
            </button>
          </form>
        ) : (
          <form onSubmit={submitComment} className="">
            <input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              type="text"
              className="w-full mt-5 border-b-2 border-black outline-none placeholder:text-center"
            />
            <button
              type="submit"
              className="px-6 py-1 mt-2 text-white bg-blue-500 rounded-sm">
              comment
            </button>
          </form>
        )}

        <div className="mt-10">
          {comments.map((comment) => {
            return (
              <div key={comment.id} className="flex justify-between mb-5">
                <p className="w-full text-center">{comment.text}</p>
                <div className="flex gap-x-5">
                  <button
                    className="px-6 py-1 text-white bg-red-500 rounded-sm"
                    onClick={() => deleteComment(comment.id)}>
                    Delete
                  </button>
                  <button
                    className="px-6 py-1 text-white bg-blue-500 rounded-sm"
                    onClick={() => handleEditClick(comment)}>
                    {" "}
                    Edit
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TodoComments;
