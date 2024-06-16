import React from "react";

function ProductItem() {
  return (
    <>
      <div className="flex justify-evenly items-center flex-wrap">
        <div className="w-80 h-[461px]">
          <div className="h-44 w-44 rounded-full relative top-20 left-4 bg-slate-200">
            <img
              src="/food.jpg"
              className="h-44 w-44 rounded-full"
              alt="img product"
            />
          </div>
          <div className="w-[305.5px] h-[350px] rounded-[50px] bg-base flex flex-col items-center p-5">
            <div className="flex justify-center items-center gap-1 self-end">
              <h1 className="text-lg">5.0</h1>
              <svg
                className="fill-primary w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
            </div>

            <div className="flex flex-col justify-center items-center pt-16 gap-5">
              <h2 className="text-3xl text-wrap">Sweet Corn Soup</h2>
              <h5 className="text-2xl">Flat Rs.100 off</h5>
              <h6 className="text-3xl">&#8377;119</h6>
            </div>
          </div>
        </div>

        <div className="w-80 h-[461px]">
          <div className="h-44 w-44 rounded-full relative top-20 left-4 bg-slate-200">
            <img
              src="/food.jpg"
              className="h-44 w-44 rounded-full"
              alt="img product"
            />
          </div>
          <div className="w-[305.5px] h-[350px] rounded-[50px] bg-base flex flex-col items-center p-5">
            <div className="flex justify-center items-center gap-1 self-end">
              <h1 className="text-lg">5.0</h1>
              <svg
                className="fill-primary w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
            </div>

            <div className="flex flex-col justify-center items-center pt-16 gap-5">
              <h2 className="text-3xl text-wrap">Sweet Corn Soup</h2>
              <h5 className="text-2xl">Flat Rs.100 off</h5>
              <h6 className="text-3xl">&#8377;119</h6>
            </div>
          </div>
        </div>

        <div className="w-80 h-[461px]">
          <div className="h-44 w-44 rounded-full relative top-20 left-4 bg-slate-200">
            <img
              src="/food.jpg"
              className="h-44 w-44 rounded-full"
              alt="img product"
            />
          </div>
          <div className="w-[305.5px] h-[350px] rounded-[50px] bg-base flex flex-col items-center p-5">
            <div className="flex justify-center items-center gap-1 self-end">
              <h1 className="text-lg">5.0</h1>
              <svg
                className="fill-primary w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
            </div>

            <div className="flex flex-col justify-center items-center pt-16 gap-5">
              <h2 className="text-3xl text-wrap">Sweet Corn Soup</h2>
              <h5 className="text-2xl">Flat Rs.100 off</h5>
              <h6 className="text-3xl">&#8377;119</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
