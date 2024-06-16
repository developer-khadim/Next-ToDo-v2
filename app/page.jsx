"use client";
import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

function page() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }
  const deleteTask = (index) => {
    let copyTasks = [...tasks];
    copyTasks.splice(index, 1);
    setTasks(copyTasks);
  };

  function handleFormSubmit(e) {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setTasks([...tasks, { text: inputValue }]);
      setInputValue("");
    }
  }

  return (
    <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mt-20">
      <h2 className="w-full h-16 pt-2 bg-gray-700 text-white font-mono text-2xl font-light leading-normal text-center rounded-t-lg">
        ✺ TO-DO LIST ✺
      </h2>
      <div className="w-full">
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              className="bg-gray-200 border-b border-gray-200 text-gray-600 p-4"
            >
              <label className=" flex justify-between cursor-pointer line-height-normal">
                <span className=" ml-6 transition-all duration-200 ease-linear text-gray-500 text-sm">
                  {task.text}
                </span>
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded font-bold hover:bg-red-600"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="bg-gray-200 border-none font-mono w-full rounded-b-lg text-gray-600 text-sm p-4 transition-all duration-200 ease-linear"
          placeholder="Write new item and hit 'Enter'"
          value={inputValue}
          onChange={handleInputChange}
          aria-label="Add new task"
        />
      </form>
      <div className="mt-5">
        <h1 className=" text-center">
          🌐 Don't forget to check out my social media links! 🔗👩‍💻{" "}
        </h1>
        <div className="flex justify-center gap-6 mt-5 ">
          <a  target="_blank" href="https://github.com/developer-khadim" className="text-2xl hover:text-gray-200">
            <FaGithub />
          </a>
          <a  target="_blank" href="https://www.linkedin.com/in/khadim-ali-a7b483294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-2xl hover:text-gray-200">
            <FaLinkedin />
          </a>
          <a target="_blank" href="https://www.facebook.com/profile.php?id=100082838006573&mibextid=ZbWKwL" className="text-2xl hover:text-gray-200">
            <FaFacebookSquare />
          </a>
        </div>
      </div>
    </div>
  );
}

export default page;