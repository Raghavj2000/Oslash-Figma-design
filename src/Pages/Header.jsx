import React from "react";
import Avatar from "../Component/Avatar";
import toast from "react-hot-toast";
import Button from "../Component/Button";
import BellIcon from "../Icons/BellIcon";
import { HamburgerIcon } from "../Icons/HamburgerIcon";
import QuestionIcon from "../Icons/QuestionIcon";
import SearchIcon from "../Icons/SearchIcon";
const notify = () => toast.success("clicked hamburger icon-button");
const notify1 = () => toast.success("clicked searchicon-button");

const Header = () => {
  return (
    <header className="h-12 w-full bg-white px-3 flex flex-row justify-between items-center border-b-2 ">
      {/* Menu Starts Here */}
      <nav className="flex items-center justify-center">
        <Button onClick={notify}>
          <HamburgerIcon />
          <span className="sr-only">Hamburger Menu</span>
        </Button>

        <Button onClick={notify1}>
          <SearchIcon />
          <span className="sr-only">search Menu</span>
        </Button>
      </nav>
      {/* Menu Ends Here */}

      <nav className="items-center flex justify-center">
        {/* New menu starts here */}
        <Button onClick={notify}>
          <QuestionIcon />
          <span className="sr-only">Help center menu</span>
        </Button>

        <Button onClick={notify1}>
          <BellIcon />
          <span className="sr-only">Notification Menu</span>
        </Button>

        <div className="items-center justify-center pt-1">
          <Avatar />
          <span className="sr-only">Hamburger Menu</span>
        </div>
        {/* new Menu ends here */}
      </nav>
    </header>
  );
};

export default Header;
