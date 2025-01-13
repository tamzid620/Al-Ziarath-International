import { Link } from "react-router-dom";
import icon from "../../../assets/icons/wired-outline-409-tool-hover-oscillate.gif";

const UnderConstruction = () => {
  return (
    <div className="bg-gradient-to-r from-[#399FE0] to-[#3062A9] h-screen flex items-center justify-center">
        <div className="content-div text-center">
      <div className="flex justify-center ">
        <img src={icon} alt="" />
      </div>
      <h1
        style={{ fontFamily: "Taviraj, serif" }}
        className=" text-3xl mt-10 text-white"
      >
        The page is under Construction{" "}
      </h1>
      <div className="flex justify-center mt-5">
        <Link to="/">
          <button className="bg-white hover:bg-gradient-to-l from-[#399FE0] to-[#3062A9] text-black font-semibold rounded-md px-8 py-2 uppercase shadow-md">
            Back To Home
          </button>
        </Link>
      </div>
        </div>
    </div>
  );
};

export default UnderConstruction;
