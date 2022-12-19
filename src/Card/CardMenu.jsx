import React from "react";
import Card from "./Card";
import toast from "react-hot-toast";

const body = [
  {
    index: 1,
    fav: "true",
    name: "o/signup-flow",
    time: "5 mins ago",
    visits: "22 visits",
    logo: (
      <img
        src="https://static.oslash.com/profile/image/443c1908-f10f-47d6-90ec-edee07d6f150?v=1"
        alt=""
        className=" m-2 w-12 h-12 rounded-full"
      />
    ),
    url: "https://www.google.com/",
    avatar: (
      <img
        src="https://static.oslash.com/profile/image/443c1908-f10f-47d6-90ec-edee07d6f150?v=1"
        alt=""
        className=" w-5 h-5  rounded-full"
      />
    ),
  },
  {
    index: 2,
    name: "o/content-calender",
    fav: "false",
    time: "Today",
    visits: "22 visits",
    logo: (
      <img
        src="https://static.oslash.com/profile/image/443c1908-f10f-47d6-90ec-edee07d6f150?v=1"
        alt=""
        className=" m-2 w-12 h-12 rounded-full"
      />
    ),
    url: "https://www.google.com/",
    avatar: (
      <img
        src="https://static.oslash.com/profile/image/443c1908-f10f-47d6-90ec-edee07d6f150?v=1"
        alt=""
        className=" w-5 h-5  rounded-full"
      />
    ),
  },
  {
    index: 3,
    name: "o/roadmap",
    visits: "22 visits",
    url: "https://www.google.com/",
    fav: "true",
    time: "Yesterday",
    logo: (
      <img
        src="https://static.oslash.com/profile/image/443c1908-f10f-47d6-90ec-edee07d6f150?v=1"
        alt=""
        className=" m-2 w-12 h-12 rounded-full"
      />
    ),
    index: "https://www.google.com/",
    avatar: (
      <img
        src="https://static.oslash.com/profile/image/443c1908-f10f-47d6-90ec-edee07d6f150?v=1"
        alt=""
        className=" w-5 h-5  rounded-full"
      />
    ),
  },
  {
    index: 4,
    visits: "22 visits",
    name: "o/all-hands",
    fav: "false",
    time: "16th-Sep",
    logo: (
      <img
        src="https://static.oslash.com/profile/image/443c1908-f10f-47d6-90ec-edee07d6f150?v=1"
        alt=""
        className=" m-2 w-12 h-12 rounded-full"
      />
    ),
    url: "https://www.google.com/",
    avatar: (
      <img
        src="https://static.oslash.com/profile/image/443c1908-f10f-47d6-90ec-edee07d6f150?v=1"
        alt=""
        className=" w-5 h-5  rounded-full"
      />
    ),
  },
  {
    index: 5,
    visits: "22 visits",
    name: "o/user-feedback",
    fav: "false",
    time: "16th-Sep",
    logo: (
      <img
        src="https://static.oslash.com/profile/image/443c1908-f10f-47d6-90ec-edee07d6f150?v=1"
        alt=""
        className=" m-2 w-12 h-12 rounded-full"
      />
    ),
    url: "https://www.google.com/",
    avatar: (
      <img
        src="https://static.oslash.com/profile/image/443c1908-f10f-47d6-90ec-edee07d6f150?v=1"
        alt=""
        className=" w-5 h-5  rounded-full"
      />
    ),
  },
  {
    index: 6,
    visits: "22 visits",
    name: "o/card-designs",
    time: "16th-Sep",
    fav: "false",
    logo: (
      <img
        src="https://static.oslash.com/profile/image/443c1908-f10f-47d6-90ec-edee07d6f150?v=1"
        alt=""
        className=" m-2 w-12 h-12 rounded-full"
      />
    ),
    url: "https://www.google.com/",
    avatar: (
      <img
        src="https://static.oslash.com/profile/image/443c1908-f10f-47d6-90ec-edee07d6f150?v=1"
        alt=""
        className=" w-5 h-5  rounded-full"
      />
    ),
  },
];

const CardMenu = () => {
  return body.map((item, index) => {
    return (
      <Card
        onClick={() => {
          toast.success(`clicked item  ${index}`);
        }}
        logo={item.logo}
        createdTime={item.time}
        name={item.name}
        url={item.url}
        numberVisits={item.visits}
        isFav={item.fav}
        userAvatar={item.avatar}
      />
    );
  });
};

export default CardMenu;
