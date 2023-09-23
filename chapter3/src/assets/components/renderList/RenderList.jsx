import React, { useState } from "react";

export const RenderList = (props) => {
  const [text, setText] = useState(props.data.text);
  const [check, setCheck] = useState(props.data.check);
  const [isChecked, setIsChecked] = useState(check);
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    props.onDelete();
  };

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleCheckboxChange = () => {
    setCheck(!check);
    setIsChecked(!isChecked);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className={`border border-slate-400 rounded-sm w-[40rem] h-8 ${props.isDone ? "line-through text-red-500" : ""}`}>
    <div className="border border-slate-400 rounded-sm w-[40rem] h-8">
      <div className={`space-x-10 ${isChecked ? "line-through text-red-500" : ""}`}>
        {isEditing ? (
          <input
            className="w-50 ml-3 bg-slate-100"
            value={text}
            onChange={handleTextChange}
          />
        ) : (
          <span className={`ml-3 ${isChecked ? "text-red-600" : ""}`}>{text}</span>
        )}

        <div className={`inline-block float-right p-1 ${isChecked ? "text-red-500" : ""}`}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />

          <button className="ml-3" onClick={handleToggleEdit}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="yellow"
              className="w-4 h-4"
            >
              <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
            </svg>
          </button>

          <button className="ml-3" onClick={handleDelete}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="red"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
</div>
  );
};
