import React from "react";
import Shortcut from "../Icons/Shortcut";
import toast, { Toast } from "react-hot-toast";
import Shortcutdownmenu from "../Component/Shortcutdownmenu";
const notify3 = () => toast.success("clicked Plus icon-button");

const SubHeader = () => {
  return (
    <div className=" pb-4 flex justify-between items-center">
      <nav className="items-center ">
        <Shortcut />
      </nav>
      <nav>
        <div class="flex flex-row justify-center bg-indigo-600 px-2 py-2 rounded-md">
          <button
            onClick={notify3}
            class="rounded-tl-md rounded-bl-md text-white flex justify-center items-center mr-3 ml-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>

          {/* <div class="rounded-tr-md rounded-br-md bg-indigo-600 p-2 px-3 text-white"> */}
          <Shortcutdownmenu />
          {/* </div> */}
        </div>
      </nav>
    </div>
  );
};

export default SubHeader;
