
import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const UserLogIn = lazy(() => import("./components/UserLogIn"));
const Home = lazy(() => import("./components/Home"))
const TodoList = lazy(() => import("./components/TodoList"));
const TodoComments = lazy(() => import("./components/TodoComments"));

function App() {
  return (
    <>
      <h1 className="text-[2rem] text-center font-light py-10">
        IT AMERICANO FRONT-END DEVELOPER EXAMINATION
      </h1>
      <Suspense fallback={`......Loading`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<UserLogIn />} />
          <Route path="/todolist" element={<TodoList />} />

          <Route path="/todocomments/:id" element={<TodoComments />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
