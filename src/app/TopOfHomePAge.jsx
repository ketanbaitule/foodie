import React from "react";
import RoundedButton from "../components/RoundedButton";

function TopOfHomePAge() {
  return (
    <>
      <div className="flex justify-evenly w-full flex-col lg:flex-row items-center gap-16 p-8 ">
        <div className="flex flex-col  gap-16 justify-center items-start">
          <div className="">
            <h4 className="text-3xl md:text-4xl font-semibold mb-8">
              Are you hungary ?
            </h4>
            <h1 className="lg:text-8xl text-5xl text-primary font-bold mb-4">
              Don’t wait!
            </h1>
            <p className="text-md md:text-xl font-normal">
              Recommended by every foodie Order now for exclusive Offers.
            </p>
          </div>
          <RoundedButton text={"Order Now"} />
        </div>

        <div className="rounded-full justify-center items-center">
          <img
            src="/home.png"
            alt=" food image"
            className="w-[300px] h-[300px] sm:w-[460px] sm:h-[460px] xl:w-[550px] xl:h-[550px] rounded-full  "
          />
        </div>
      </div>
    </>
  );
}

export default TopOfHomePAge;
