import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex items-center justify-center w-full h-[50vh]">
      <Link to={"/signin"}>
        <button className="px-6 py-2 text-white bg-blue-600 rounded-sm">Proceed to TODO LIST</button>
      </Link>
    </div>
  );
};

export default Home;
