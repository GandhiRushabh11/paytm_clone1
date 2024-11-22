import { Link } from "react-router-dom";
import { Button } from "./Button";

const Appbar = () => {
  return (
    <div className="shadow h-14 flex justify-between items-center md:px-10">
      <Link to={"/dashboard"}>
        <div className="flex flex-col h-full ml-4 font-bold">
          PayTM APP
        </div>
      </Link>
      <div className="flex items-center gap-2">
        {<Button label={"Sign Out"}></Button>}
        <div className="flex flex-col h-full mr-4">
          {"Rushabh Gandhi"}
        </div>
        <div className="rounded-full h-10 w-10 p-4 bg-slate-200 flex justify-center mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {"R"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appbar;