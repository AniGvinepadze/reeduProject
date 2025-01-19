import { Link } from "react-router-dom";
import { arrowLeftIconWhite } from "../../../assets";
import Button from "../../atoms/button";

export default function RoadMapHeader() {
  return (
    <header className="text-white bg-darkBlue rounded-[10px] w-full  mt-20 max-800:mt-14 max-700:mt-0 max-700:rounded-none p-6 flex justify-between max-450:mt-0 max-450:rounded-none">
      <div>
        <div>
          <Link to="/" className="flex">
            <img
              src={arrowLeftIconWhite}
              alt="arrowLeftIcon"
              className="w-4 h-2 mt-[5px] object-contain cursor-pointer"
            />
            <p className="font-jost font-bold text-sm ml-2 cursor-pointer">
              Go Back
            </p>
          </Link>
        </div>
        <h2 className="font-bold font-jost text-2xl mt-2 mx-2 max-400:text-xl">
          Roadmap
        </h2>
      </div>
      <Button
        label="+ Add Feedback "
        variant="primary"
        classname="bg-purple max-650:px-4 mt-2"
        func={() => alert("Button clicked!")}
      />
    </header>
  );
}
