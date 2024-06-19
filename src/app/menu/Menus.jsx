import { FaSearch, FaMapMarkerAlt, FaCity } from "react-icons/fa";
import { oswald } from "@/style/font";

export default function Menus() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col sm:flex-row w-full max-w-5xl gap-7">
        <div className="flex items-center bg-white bg-opacity-20 rounded-3xl p-3 backdrop-blur-md w-full">
          <FaSearch className="text-white" />
          <input
            type="text"
            placeholder="Search"
            className="ml-3 bg-transparent border-none outline-none w-full text-white placeholder-white"
          />
        </div>
        <div className="flex items-center bg-white bg-opacity-20 rounded-3xl p-3 backdrop-blur-md w-full">
          <FaMapMarkerAlt className="text-white" />
          <input
            type="text"
            placeholder="Enter your location"
            className="ml-3 bg-transparent border-none outline-none w-full text-white placeholder-white"
          />
        </div>
        <div className="flex items-center bg-white bg-opacity-20 rounded-3xl p-3 backdrop-blur-md w-full">
          <FaCity className="text-white" />
          <input
            type="text"
            placeholder="Enter your city"
            className="ml-3 bg-transparent border-none outline-none w-full text-white placeholder-white"
          />
        </div>
      </div>

      <div
        className="relative flex w-full max-w-5xl mt-10"
        style={{ height: "512px" }}
      >
        <div
          className="relative  rounded-3xl md:rounded-tl-3xl md:rounded-bl-3xl md:rounded-tr-none md:rounded-br-none   md:w-1/2 md:px-16  bg-cover bg-center"
          style={{
            backgroundImage: "url('./reactangle.jpg')",
            width: "100%",
            height: "512px",
          }}
        >
          <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-customGray bg-opacity-55 p-3 rounded-3xl w-[90%] sm:w-[550px] sm:h-[412px]">
            <p
              className={`${oswald.className} text-2xl font-bold text-white pl-12`}
            >
              Find the best restaurants, cafés and bars in India <br /> <br />{" "}
              <br />
            </p>
            <p
              className={`${oswald.className} text-2xl font-medium text-white pl-14 `}
            >
              Late night at office? <br /> Order food from favourite <br />{" "}
              restaurants near you
            </p>
            <button className="  bg-primary text-white px-10 py-3 rounded-xl block mx-auto mt-6 lg:ml-96 lg:mt-20  sm:ml-0 sm:mt-20 sm:w-auto ">
              Explore
            </button>
          </div>
        </div>

        <div
          className=" bg-customGray rounded-tr-3xl rounded-br-3xl md:block hidden"
          style={{
            width: "430px",
            height: "512px",
            backgroundImage: "url('./thali.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
}
