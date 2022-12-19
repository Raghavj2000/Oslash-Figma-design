import React from "react";
import toast from "react-hot-toast";
import Button from "../Component/Button";

const notify = () => toast.success("clicked hamburger icon-button");

const Card = ({
  logo,
  name,
  url,
  onClick,
  isFav,
  userAvatar,
  createdTime,
  numberVisits,
}) => {
  return (
    <div className="pb-4">
      <div
        className="  bg-white flex  border  cursor-pointer hover:bg-slate-100  rounded-lg drop-shadow-sm "
        onClick={onClick}
      >
        <div className="flex items-center pr-6">
          {logo}
          <div className="ml-3 ">
            <a
              onClick={(e) => e.stopPropagation()}
              href={url}
              className="font-display  font-medium text-sm hover:underline "
            >
              {name}
            </a>
            <ul className="flex gap-2 items-center font-display  text-xs">
              <li>{userAvatar}</li>
              <li>{createdTime}</li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="#6b7280"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
              <button className="rounded-full bg-gray-100   w-14 h-5 ">
                <span className="text-xs text-gray-500">{numberVisits}</span>
              </button>
            </ul>
          </div>
        </div>
        <span className="ml-auto">
          <Button className=" ">
            {isFav == "true" ? (
              <span className="inline-flex h-8 w-8 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 "
                  viewBox="0 0 20 20"
                  fill="#eab308"
                  onClick={notify}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </span>
            ) : (
              <span className="inline-flex h-8 w-8 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#9ca3af"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </span>
            )}
          </Button>
        </span>
      </div>
    </div>
  );
};

export default Card;
