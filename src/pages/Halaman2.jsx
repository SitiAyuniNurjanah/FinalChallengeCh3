import React from "react";
import {useNavigate } from "react-router-dom";

const svgStyle = {
    backgroundSize: "100% 100%",
    width: "30px",
    height: "28px",
  };

export const Halaman2 = () => {
    const Navigate = useNavigate();

    const handleKembaliHal1 = () => {
        Navigate('/')
    }

    
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-indigo-300 to-purple-400">
      <div className="w-[45rem] h-[38rem] bg-slate-200 rounded-lg border-4 border-indigo-600">
        <h1 className="text-center font-bold text-xl font-serif mt-3">
          TodoInput
        </h1>
        <div className="border border-indigo-600 w-[35rem] h-[7rem] mt-3 mx-auto rounded-lg">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="white"
              class="w-5 h-5 bg-blue-300 ml-7 mt-5"
              style={svgStyle}>
              <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
              <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
            </svg>
            <input
              className="border border-slate-400 rounded-sm mt-5 w-[29rem] h-7 p-2 pr-8"
              placeholder="Input/Edit Todo"/>
          </div>
          <button className="inline-block rounded-sm bg-blue-300 font-serif text-center mt-3 ml-7 w-[31rem] h-7" style={{ color: 'white' }} onClick={handleKembaliHal1}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
