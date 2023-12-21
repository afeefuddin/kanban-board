import React, { useContext, useState } from "react";
import Tune from "../assets/tune.svg";
import dropicon from "../assets/dropicon.svg";
import DisplayContext from "../Context/DisplayContext";

function Dropdown() {
  const {grouping,setGrouping,ordering,setOrdering} = useContext(DisplayContext)
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };
  return (
    <div className="border border-gray-200 dark:border-neutral-600 rounded p-1">
      <div
        className="flex flex-row items-center text-lg gap-1 "
        onClick={handleDropdown}
      >
        <div className="text-base">
          <img src={Tune} alt="" />
        </div>
        Display
        <div className="text-base">
          <img src={dropicon} alt="" />
        </div>
      </div>
      <div
        className={`${
          dropdownOpen ? "absolute" : "hidden"
        } bg-light-secondary dark:bg-dark-secondary p-4 border border-dark-secondary dark:border-light-secondary top-16 left-8 rounded-md `}
      >
        <div className="flex flex-col gap-3">
          <div className=" flex flex-row gap-20 w-full justify-between">
            <span>Grouping</span>
            <select
              name="Grouping"
              id="grouping"
              value={grouping}
              className="bg-light-secondary dark:bg-dark-secondary border rounded pl-2 pr-8 pt-1 pb-1"
              onChange={(e)=>setGrouping(e.target.value)}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className=" flex flex-row gap-20 w-full justify-between">
            <span>Ordering</span>
            <select
              name="ordering"
              id="ordering"
              value={ordering}
              className="bg-light-secondary dark:bg-dark-secondary border rounded pl-2 pr-8 pt-1 pb-1"
              onChange={(e)=>setOrdering(e.target.value)}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
