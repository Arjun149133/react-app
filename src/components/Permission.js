import React from "react";
import { AiFillCheckSquare } from "react-icons/ai";

const Permission = () => {
  return (
    <section className=" flex flex-col h-screen m-auto ml-72 ">
      <div className=" mt-24 p-4 w-auto">
        <p className=" text-2xl m-2 text-blue-500 font-bold">Task To Do</p>
        <div className="">
          <h1 className=" text-xl font-bold">
            * Meeting with Coordinate abhi at mech block     <p className=" text-xl font-bold text-gray-500">Room no:401 </p>     <p className=" text-xl font-bold text-blue-500">Time: 12pm</p>
          </h1>
          <h1 className=" text-xl font-bold">
            * Meeting with Hod at administration block     <p className=" text-xl font-bold text-gray-500">Room no:305 </p>     <p className=" text-xl font-bold text-blue-500">Time: 10am</p>
          </h1>
          <h1 className=" text-xl font-bold"></h1>
        </div>
      </div>
      <div className=" mt-24 p-4 w-auto">
        <p className=" text-2xl m-2 font-bold text-green-500">Task Done</p>
        <div className="">
          <h1 className=" text-xl font-bold">
            * Conducting a meeting with tech club members
          </h1>
          <h1 className=" text-xl font-bold">
            * Sports event permission with hod
          </h1>
        </div>
      </div>
      <details className="dropdown">
        <summary className="m-1 btn">Ask Permission From</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <a>HOD madam</a>
          </li>
          <li>
            <a>CO-ORDINATE madam</a>
          </li>
          <li>
            <a>MATHS Sir</a>
          </li>
          <li>
            <a>Mentor</a>
          </li>
        </ul>
      </details>
    </section>
  );
};

export default Permission;
