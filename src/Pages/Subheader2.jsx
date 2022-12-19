import React from "react";
import All1 from "../Component/SelectionMenu";
import Button from "../Component/Button";
import toast from "react-hot-toast";
import { HamburgerIcon } from "../Icons/HamburgerIcon";
import Filter from "../Icons/Filter";
import Menu1 from "../Icons/Menu1";
import RadioGroup from "../RadioGroup/RadioGroup";
import SelectionMenu from "../Component/SelectionMenu";

const notify = () => toast.success("clicked Plus icon-button");
const notify1 = () => toast.success("lol");

const Subheader2 = () => {
  return (
    <div className=" flex justify-between items-center">
      <SelectionMenu />

      <div className="inline-flex items-center flex-shrink-0 gap-2">
        <nav>
          <Button onClick={notify}>
            <Filter />
            <span className="sr-only">Filter Menu</span>
          </Button>
          <Button>
            <Menu1 />
            <span className="sr-only">Arrange Menu</span>
          </Button>
        </nav>

        <RadioGroup />
      </div>
    </div>
  );
};

export default Subheader2;
