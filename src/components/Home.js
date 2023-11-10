import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className=" h-screen bg-base-200">
    <h1 className=" flex justify-center text-3xl font-bold">Welcome to Student Profile</h1>
    <p className="grid place-items-center mt-12 text-xl font-serif ">Here you can track your attendence and manage your permissions according to your schedule.</p>
      <nav className=" bg-base-200 h-screen grid place-items-center justify-center">
        <div className=" navbar align-element">
          <div className=" navbar-center space-x-10 ">
            <Link to='/attendence' className=' btn btn-primary'>Attendence</Link>
            <Link to='/permission' className='btn btn-secondary'>Permissions</Link>
          </div>
        </div>
      </nav>
    </main>
  );
};

export default Home;
