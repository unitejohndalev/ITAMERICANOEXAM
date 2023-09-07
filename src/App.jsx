
import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const UserLogIn = lazy(() => import("./components/UserLogIn"));
const Home = lazy(() => import("./components/Home"))

function App() {
  return (
    <>
      <h1 className="text-[2rem] text-center font-light">
        IT AMERICANO FRONT-END DEVELOPER EXAMINATION
      </h1>
      <Suspense fallback={`......Loading`}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signin" element={<UserLogIn/>} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
