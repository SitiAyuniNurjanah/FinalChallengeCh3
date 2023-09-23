import React, { useState } from "react";
import { RenderList } from "../assets/components/renderList/RenderList";
import { useNavigate } from "react-router-dom";

const svgStyle = {
  backgroundSize: "100% 100%",
  width: "30px",
  height: "28px",
};

export const Halaman1 = () => {
  const navigate = useNavigate();

  const handleAddNewTask = () => {
    navigate("/add");
  };

  const [data, setData] = useState([
    {
      id: 1,
      text: "Learn ReactJS basics",
      check: false,
    },
    {
      id: 2,
      text: "Practice ReactJS",
      check: false,
    },
    {
      id: 3,
      text: "Learn Redux",
      check: false,
    },
    {
      id: 4,
      text: "Code portfolio in React",
      check: false,
    },
    {
      id: 5,
      text: "Learn React Native",
      check: false,
    },
  ]);

  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchInput, setSearchInput] = useState(""); 

  const handleDeleteAllTasks = () => {
    setData([]);
  };

  const renderList = () => {
    const filteredData = data.filter((value) =>
      value.text.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    return filteredData.map((value) => {
      return (
        <RenderList
          key={value.id}
          data={value}
          onDelete={() => handleDelete(value.id)}
          onDeleteChecked={handleDeleteChecked}
        />
      );
    });
  };

  const handleDelete = (idToDelete) => {
    const updatedData = data.filter((item) => item.id !== idToDelete);
    setData(updatedData);
  };

  const handleDeleteChecked = () => {
    const updatedData = data.filter((item) => !item.check);
    setData(updatedData);
  };

  const handleSearch = () => {
    setSearchKeyword(searchInput);
  };


  //body
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-indigo-300 to-purple-400">
      <div className="w-[45rem] h-[38rem] bg-slate-200 rounded-lg border-4 border-indigo-600">
        <h1 className="text-center font-bold text-xl font-serif mt-3">
          TodoSearch
        </h1>
        <div className="border border-indigo-600 w-[40rem] h-[7rem] mt-3 mx-auto rounded-lg">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="white"
              className="bg-blue-300 ml-7 mt-5"
              style={svgStyle}>
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              className="border border-slate-400 rounded-sm mt-5 w-[20rem] h-7 p-2 pr-8"
              placeholder="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
          <button className="inline-block rounded-sm bg-blue-300 font-serif text-center mt-3 ml-7 w-[22rem] h-7" style={{ color: 'white' }}
          onClick={handleSearch}>
            Search
          </button>
          <button
            className="inline-block rounded-sm bg-blue-300 w-[10rem] h-7 font-serif mt-3 ml-14"
            onClick={handleAddNewTask} style={{ color: 'white' }}>
            Add New Task
          </button>
        </div>
        <h1 className="text-center font-bold text-xl font-serif mt-3">
          TodoList
        </h1>
        <div className="flex">
          <button className="block rounded-sm bg-blue-300 w-[13rem] h-7 font-serif mt-3 ml-5" style={{ color: 'white' }}>
            Add
          </button>
          <button className="block rounded-sm bg-blue-300 w-[13rem] h-7 font-serif mt-3 ml-5" style={{ color: 'white' }}>
            Done
          </button>
          <button className="block rounded-sm bg-blue-300 w-[13rem] h-7 font-serif mt-3 ml-5" style={{ color: 'white' }}>
            Todo
          </button>
        </div>

        <div className="mt-10 ml-7 flex-col space-y-4">{renderList()}</div>

        <div className="fixed bottom-10">
          <button className="inline-block rounded-sm bg-red-600 w-[18rem] h-7 font-serif ml-10" style={{ color: 'white' }} handleDeleteChecked>
            Delete done task
          </button>
          <button
            className="inline-block rounded-sm bg-red-600 w-[18rem] h-7 font-serif ml-10"
            onClick={handleDeleteAllTasks} style={{ color: 'white' }}>
            Delete all task
          </button>
        </div>
      </div>
    </div>
  );
};

//catatan
//mungkin untung challenge ini sangat belum maksimal
//jadi cuman seadanya dan saya mampunya cuman segini
// untuk yang lainnya udah sempet di coba tapi gak jalan-jalan
//mungkin karena penempatan strukturnya yang masih acak-acakan jadi agak susah
//saya sendiri pun masih bingung
