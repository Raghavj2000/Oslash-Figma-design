import toast, { Toaster } from "react-hot-toast";
import "./App.css";

import CardMenu from "./Card/CardMenu";
import Header from "./Pages/Header";
import NewHeader1 from "./Pages/NewHeader1";
import SubHeader from "./Pages/SubHeader";
import Subheader2 from "./Pages/Subheader2";

const notify = () => toast.success("done");
function App() {
  return (
    <div className="App ">
      <Toaster />
      <Header />
      <NewHeader1 />
      {/* <SubHeader />
      <Subheader2 /> */}
      <div className="px-4 pt-2 ">
        <CardMenu />
      </div>
    </div>
  );
}

export default App;
